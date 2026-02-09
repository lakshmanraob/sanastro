import type { APIRoute } from 'astro';
import { createServerSupabaseClient, createServiceRoleClient } from '../../../lib/supabase/server';
import { sendApprovalEmail } from '../../../lib/email/resend';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const supabase = createServerSupabaseClient(cookies);
    const serviceClient = createServiceRoleClient();

    // Verify admin session
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Verify user is admin
    const { data: adminRecord } = await serviceClient
      .from('admin_logins')
      .select('id')
      .eq('auth_id', session.user.id)
      .single();

    if (!adminRecord) {
      return new Response(JSON.stringify({ error: 'Forbidden' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Get user ID from request
    const { userId } = await request.json();

    if (!userId) {
      return new Response(JSON.stringify({ error: 'User ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Update user status
    const { data: updatedUser, error: updateError } = await serviceClient
      .from('user_logins')
      .update({
        approval_status: 'approved',
        approved_by: adminRecord.id,
        approved_at: new Date().toISOString(),
        rejection_reason: null,
      })
      .eq('id', userId)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating user:', updateError);
      return new Response(JSON.stringify({ error: updateError.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create approval log
    await serviceClient
      .from('approval_logs')
      .insert({
        user_id: userId,
        admin_id: adminRecord.id,
        action: 'approved',
      });

    // Send approval email
    if (updatedUser?.email) {
      await sendApprovalEmail(updatedUser.email, updatedUser.full_name);
    }

    return new Response(JSON.stringify({ success: true, user: updatedUser }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Approve user error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
