import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const appUrl = import.meta.env.PUBLIC_APP_URL;

// Email sender - update this once you have a verified domain
const FROM_EMAIL = 'Sanastro <onboarding@resend.dev>';

export async function sendWelcomeEmail(email: string, name: string | null) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Welcome to Sanastro - Account Pending Approval',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Nunito Sans', Arial, sans-serif; line-height: 1.6; color: #3D2E2E; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { text-align: center; padding: 20px 0; }
              .logo { width: 60px; height: 60px; background: linear-gradient(135deg, #C4A484, #D4A574); border-radius: 50%; display: inline-block; }
              h1 { color: #3D2E2E; font-family: 'Cormorant Garamond', Georgia, serif; }
              .content { background: #FAF7F2; padding: 30px; border-radius: 16px; }
              .button { display: inline-block; background: #C4A484; color: white; padding: 12px 24px; text-decoration: none; border-radius: 9999px; margin: 20px 0; }
              .footer { text-align: center; padding: 20px; color: #9A8B7A; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo"></div>
                <h1>Welcome to Sanastro</h1>
              </div>
              <div class="content">
                <p>Hello ${name || 'there'},</p>
                <p>Thank you for signing up for Sanastro - your gateway to KP Astrology insights!</p>
                <p>Your account is currently <strong>pending approval</strong> by our admin team. We'll notify you as soon as your account is approved.</p>
                <p>Once approved, you'll be able to:</p>
                <ul>
                  <li>Create and save horoscope charts</li>
                  <li>Get detailed predictions based on KP system</li>
                  <li>Analyze planetary positions and dashas</li>
                </ul>
                <p>We'll send you another email once your account is ready!</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Sanastro. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return { success: false, error };
  }
}

export async function sendApprovalEmail(email: string, name: string | null) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Your Sanastro Account Has Been Approved!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Nunito Sans', Arial, sans-serif; line-height: 1.6; color: #3D2E2E; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { text-align: center; padding: 20px 0; }
              h1 { color: #3D2E2E; font-family: 'Cormorant Garamond', Georgia, serif; }
              .content { background: #FAF7F2; padding: 30px; border-radius: 16px; }
              .success-badge { background: #4A7C59; color: white; padding: 8px 16px; border-radius: 9999px; display: inline-block; margin-bottom: 20px; }
              .button { display: inline-block; background: #C4A484; color: white; padding: 12px 24px; text-decoration: none; border-radius: 9999px; margin: 20px 0; }
              .footer { text-align: center; padding: 20px; color: #9A8B7A; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Account Approved!</h1>
              </div>
              <div class="content">
                <span class="success-badge">Approved</span>
                <p>Hello ${name || 'there'},</p>
                <p>Great news! Your Sanastro account has been <strong>approved</strong> by our team.</p>
                <p>You now have full access to all features:</p>
                <ul>
                  <li>Create personalized horoscope charts</li>
                  <li>Get detailed KP astrology predictions</li>
                  <li>Analyze Vimshottari Dasha timelines</li>
                  <li>Save and manage multiple profiles</li>
                </ul>
                <p style="text-align: center;">
                  <a href="${appUrl}/dashboard" class="button">Go to Dashboard</a>
                </p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Sanastro. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send approval email:', error);
    return { success: false, error };
  }
}

export async function sendRejectionEmail(email: string, name: string | null, reason?: string) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Sanastro Account Status Update',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Nunito Sans', Arial, sans-serif; line-height: 1.6; color: #3D2E2E; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { text-align: center; padding: 20px 0; }
              h1 { color: #3D2E2E; font-family: 'Cormorant Garamond', Georgia, serif; }
              .content { background: #FAF7F2; padding: 30px; border-radius: 16px; }
              .info-box { background: #FFF3CD; padding: 15px; border-radius: 8px; margin: 20px 0; }
              .footer { text-align: center; padding: 20px; color: #9A8B7A; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Account Status Update</h1>
              </div>
              <div class="content">
                <p>Hello ${name || 'there'},</p>
                <p>We regret to inform you that your Sanastro account request has not been approved at this time.</p>
                ${reason ? `
                  <div class="info-box">
                    <strong>Reason:</strong> ${reason}
                  </div>
                ` : ''}
                <p>If you believe this is an error or would like to discuss this decision, please contact our support team.</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Sanastro. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send rejection email:', error);
    return { success: false, error };
  }
}

export async function sendAdminNotification(userEmail: string, userName: string | null) {
  const adminEmails = import.meta.env.ADMIN_EMAILS?.split(',').filter(Boolean) || [];

  if (adminEmails.length === 0) {
    console.warn('No admin emails configured');
    return { success: false, error: 'No admin emails configured' };
  }

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: adminEmails,
      subject: 'New User Registration - Pending Approval',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Nunito Sans', Arial, sans-serif; line-height: 1.6; color: #3D2E2E; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { text-align: center; padding: 20px 0; }
              h1 { color: #3D2E2E; font-family: 'Cormorant Garamond', Georgia, serif; }
              .content { background: #FAF7F2; padding: 30px; border-radius: 16px; }
              .user-info { background: #EDE4D8; padding: 15px; border-radius: 8px; margin: 20px 0; }
              .button { display: inline-block; background: #C4A484; color: white; padding: 12px 24px; text-decoration: none; border-radius: 9999px; margin: 20px 0; }
              .footer { text-align: center; padding: 20px; color: #9A8B7A; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New User Registration</h1>
              </div>
              <div class="content">
                <p>A new user has registered and is awaiting your approval:</p>
                <div class="user-info">
                  <p><strong>Email:</strong> ${userEmail}</p>
                  <p><strong>Name:</strong> ${userName || 'Not provided'}</p>
                  <p><strong>Registered:</strong> ${new Date().toLocaleString()}</p>
                </div>
                <p style="text-align: center;">
                  <a href="${appUrl}/admin/users" class="button">Review in Admin Panel</a>
                </p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Sanastro Admin</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send admin notification:', error);
    return { success: false, error };
  }
}

export async function sendVerificationEmail(email: string, name: string | null, token: string) {
  const verifyUrl = `${appUrl}/auth/verify?token=${token}`;

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Verify Your Email - Sanastro',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: 'Nunito Sans', Arial, sans-serif; line-height: 1.6; color: #3D2E2E; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { text-align: center; padding: 20px 0; }
              h1 { color: #3D2E2E; font-family: 'Cormorant Garamond', Georgia, serif; }
              .content { background: #FAF7F2; padding: 30px; border-radius: 16px; }
              .button { display: inline-block; background: #C4A484; color: white; padding: 12px 24px; text-decoration: none; border-radius: 9999px; margin: 20px 0; }
              .link { word-break: break-all; background: #EDE4D8; padding: 10px; border-radius: 8px; font-size: 12px; }
              .footer { text-align: center; padding: 20px; color: #9A8B7A; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Verify Your Email</h1>
              </div>
              <div class="content">
                <p>Hello ${name || 'there'},</p>
                <p>Please verify your email address by clicking the button below:</p>
                <p style="text-align: center;">
                  <a href="${verifyUrl}" class="button">Verify Email</a>
                </p>
                <p>Or copy and paste this link into your browser:</p>
                <p class="link">${verifyUrl}</p>
                <p><strong>This link will expire in 24 hours.</strong></p>
              </div>
              <div class="footer">
                <p>If you didn't create an account with Sanastro, you can safely ignore this email.</p>
                <p>&copy; ${new Date().getFullYear()} Sanastro. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Failed to send verification email:', error);
    return { success: false, error };
  }
}
