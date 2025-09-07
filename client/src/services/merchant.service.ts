import { supabase } from '@/utils/supabase'

class MerchantService {
  async getDashboardStats(merchantId: string) {
    const { data, error } = await supabase.rpc('get_merchant_stats', { merchant_id: merchantId })
    if (error) throw error
    return data
  }

  async getRecentTransactions(merchantId: string) {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('merchant_id', merchantId)
      .order('created_at', { ascending: false })
      .limit(10)
    if (error) throw error
    return data
  }
}

export const merchantService = new MerchantService()
