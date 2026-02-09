import type { APIRoute } from 'astro';
import { createServerSupabaseClient, createServiceRoleClient } from '../../../lib/supabase/server';
import { sendRejectionEmail } from '../../../lib/email/resend';

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

    // Get user ID and reason from request
    const { userId, reason } = await request.json();

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
        approval_status: 'rejected',
        rejection_reason: reason || null,
        approved_by: null,
        approved_at: null,
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
        action: 'rejected',
        reason: reason || null,
      });

    // Send rejection email
    if (updatedUser?.email) {
      await sendRejectionEmail(updatedUser.email, updatedUser.full_name, reason);
    }

    return new Response(JSON.stringify({ success: true, user: updatedUser }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Reject user error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
