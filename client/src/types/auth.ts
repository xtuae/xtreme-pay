export type UserRole = 'superadmin' | 'moderator' | 'user'
export type UserStatus = 'pending' | 'active' | 'suspended' | 'deactivated'

export interface User {
  id: string
  email: string
  role: UserRole
  status: UserStatus
  created_at: string
  updated_at: string
}

export interface MerchantProfile {
  id: string
  user_id: string
  business_name: string
  business_type?: string
  business_email?: string
  business_phone?: string
  business_address?: any
  website_url?: string
  logo_url?: string
}

export interface AuthState {
  user: User | null
  merchant: MerchantProfile | null
  isLoading: boolean
  isAuthenticated: boolean
}
