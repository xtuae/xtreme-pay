import { supabase } from '@/utils/supabase'

class SuperAdminService {
  async getDashboardStats() {
    const { data, error } = await supabase.rpc('get_super_admin_stats')
    if (error) throw error
    return data
  }

  async getActivityFeed() {
    const { data, error } = await supabase
      .from('audit_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)
    if (error) throw error
    return data
  }
}

export const superAdminService = new SuperAdminService()
