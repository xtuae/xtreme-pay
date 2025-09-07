import { supabase } from '@/utils/supabase'
import type { User } from '@/types/auth'

class AuthService {
  async login(credentials: any) {
    const { data, error } = await supabase.auth.signInWithPassword(credentials)
    if (error) throw error
    return data.user as unknown as User
  }

  async logout() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  async register(userData: any) {
    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        data: {
          role: 'user',
          status: 'pending',
        },
      },
    })
    if (error) throw error
    return data.user as unknown as User
  }

  async resetPassword(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) throw error
  }

  async getUser() {
    const { data: { user } } = await supabase.auth.getUser()
    return user as unknown as User | null
  }

  async getMerchantProfile(userId: string) {
    const { data, error } = await supabase
      .from('merchant_profiles')
      .select('*')
      .eq('user_id', userId)
      .single()
    if (error) throw error
    return data
  }
}

export const authService = new AuthService()
