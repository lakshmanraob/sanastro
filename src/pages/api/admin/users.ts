import type { APIRoute } from 'astro';
import { createServerSupabaseClient, createServiceRoleClient } from '../../../lib/supabase/server';

export const GET: APIRoute = async ({ url, cookies }) => {
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

    // Get filter and pagination from query params
    const filter = url.searchParams.get('filter') || 'all';
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    // Build query
    let query = serviceClient
      .from('user_logins')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (filter !== 'all') {
      query = query.eq('approval_status', filter);
    }

    const { data: users, count, error } = await query;

    if (error) {
      console.error('Error fetching users:', error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({
      users,
      pagination: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil((count || 0) / limit),
      },
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('List users error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
