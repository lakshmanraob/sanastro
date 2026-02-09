export type ApprovalStatus = 'pending' | 'approved' | 'rejected';

export interface UserLogin {
  id: string;
  auth_id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  approval_status: ApprovalStatus;
  approved_by: string | null;
  approved_at: string | null;
  rejection_reason: string | null;
  email_verified: boolean;
  last_login_at: string | null;
  login_count: number;
  created_at: string;
  updated_at: string;
}

export interface AdminLogin {
  id: string;
  auth_id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  is_super_admin: boolean;
  last_login_at: string | null;
  created_at: string;
}

export interface ApprovalLog {
  id: string;
  user_id: string;
  admin_id: string;
  action: ApprovalStatus;
  reason: string | null;
  created_at: string;
}

export interface EmailVerification {
  id: string;
  user_id: string;
  token: string;
  expires_at: string;
  used_at: string | null;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      user_logins: {
        Row: UserLogin;
        Insert: Omit<UserLogin, 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Omit<UserLogin, 'id' | 'created_at'>>;
      };
      admin_logins: {
        Row: AdminLogin;
        Insert: Omit<AdminLogin, 'id' | 'created_at'>;
        Update: Partial<Omit<AdminLogin, 'id' | 'created_at'>>;
      };
      approval_logs: {
        Row: ApprovalLog;
        Insert: Omit<ApprovalLog, 'id' | 'created_at'>;
        Update: never;
      };
      email_verifications: {
        Row: EmailVerification;
        Insert: Omit<EmailVerification, 'id' | 'created_at'>;
        Update: Partial<Pick<EmailVerification, 'used_at'>>;
      };
    };
  };
}
