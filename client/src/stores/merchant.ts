import { defineStore } from 'pinia'
import { ref } from 'vue'
import { merchantService } from '@/services/merchant.service'
import { useAuthStore } from './auth'

export const useMerchantStore = defineStore('merchant', () => {
  const stats = ref<any>(null)
  const recentTransactions = ref<any[] | null>(null)
  const isLoading = ref(false)
  const auth = useAuthStore()

  async function fetchDashboardStats() {
    if (!auth.user) return
    isLoading.value = true
    try {
      stats.value = await merchantService.getDashboardStats(auth.user.id)
    } finally {
      isLoading.value = false
    }
  }

  async function fetchRecentTransactions() {
    if (!auth.user) return
    isLoading.value = true
    try {
      recentTransactions.value = await merchantService.getRecentTransactions(auth.user.id)
    } finally {
      isLoading.value = false
    }
  }

  return {
    stats,
    recentTransactions,
    isLoading,
    fetchDashboardStats,
    fetchRecentTransactions,
  }
})
