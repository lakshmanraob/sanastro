import { defineMiddleware } from 'astro:middleware';
import { createServerSupabaseClient } from './lib/supabase/server';

const protectedRoutes = ['/dashboard', '/chart', '/predictions', '/dasha', '/birth-data'];
const adminRoutes = ['/admin'];
const authRoutes = ['/auth/login'];
const publicAuthRoutes = ['/auth/pending', '/auth/rejected', '/auth/callback', '/auth/logout'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Skip middleware for API routes and static assets
  if (pathname.startsWith('/api/') || pathname.startsWith('/_')) {
    return next();
  }

  const supabase = createServerSupabaseClient(context.cookies);

  // Use getUser() for secure authentication (not getSession)
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  // Initialize locals
  context.locals.session = user ? { user } as any : null;
  context.locals.user = user ?? null;
  context.locals.isAdmin = false;
  context.locals.approvalStatus = null;

  // If we have a user, get their status
  if (user) {
    // Check if admin
    const { data: adminRecord } = await supabase
      .from('admin_logins')
      .select('id')
      .eq('auth_id', user.id)
      .single();

    if (adminRecord) {
      context.locals.isAdmin = true;
      context.locals.approvalStatus = 'approved';
    } else {
      // Get user record
      const { data: userRecord } = await supabase
        .from('user_logins')
        .select('approval_status')
        .eq('auth_id', user.id)
        .single();

      if (userRecord) {
        context.locals.approvalStatus = userRecord.approval_status;
      }
    }
  }

  // Redirect authenticated users away from login page
  if (authRoutes.some(route => pathname.startsWith(route))) {
    if (user) {
      if (context.locals.isAdmin) {
        return context.redirect('/admin');
      }
      if (context.locals.approvalStatus === 'approved') {
        return context.redirect('/dashboard');
      }
      if (context.locals.approvalStatus === 'pending') {
        return context.redirect('/auth/pending');
      }
      if (context.locals.approvalStatus === 'rejected') {
        return context.redirect('/auth/rejected');
      }
    }
    return next();
  }

  // Allow public auth routes (pending, rejected, callback, logout)
  if (publicAuthRoutes.some(route => pathname.startsWith(route))) {
    return next();
  }

  // Check admin routes
  if (adminRoutes.some(route => pathname.startsWith(route))) {
    if (!user) {
      return context.redirect('/auth/login');
    }
    if (!context.locals.isAdmin) {
      return context.redirect('/dashboard');
    }
    return next();
  }

  // Check protected routes
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!user) {
      return context.redirect('/auth/login');
    }

    // Check approval status for non-admin users
    if (!context.locals.isAdmin) {
      if (context.locals.approvalStatus === 'pending') {
        return context.redirect('/auth/pending');
      }
      if (context.locals.approvalStatus === 'rejected') {
        return context.redirect('/auth/rejected');
      }
      if (context.locals.approvalStatus !== 'approved') {
        return context.redirect('/auth/login');
      }
    }
  }

  return next();
});
