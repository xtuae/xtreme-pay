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

  async getUsers() {
    const { data, error } = await supabase.from('users').select('*')
    if (error) throw error
    return data
  }

  async updateUserStatus(userId: string, status: string) {
    const { data, error } = await supabase.from('users').update({ status }).eq('id', userId)
    if (error) throw error
    return data
  }

  async getTotalUsers() {
    const { count, error } = await supabase.from('users').select('*', { count: 'exact' })
    if (error) throw error
    return count
  }

  async getTotalPayments() {
    const { data, error } = await supabase.rpc('get_total_payments')
    if (error) throw error
    return data
  }

  async getTotalTransactions() {
    const { count, error } = await supabase.from('transactions').select('*', { count: 'exact' })
    if (error) throw error
    return count
  }

  async getTotalInvoices() {
    const { count, error } = await supabase.from('invoices').select('*', { count: 'exact' })
    if (error) throw error
    return count
  }
}

export const superAdminService = new SuperAdminService()
