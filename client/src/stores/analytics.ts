import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAnalyticsStore = defineStore('analytics', () => {
  const revenue = ref<any>(null)
  const transactions = ref<any>(null)
  const customers = ref<any>(null)
  const isLoading = ref(false)

  async function fetchAnalytics() {
    isLoading.value = true
    try {
      // Mock data
      revenue.value = {}
      transactions.value = {}
      customers.value = {}
    } finally {
      isLoading.value = false
    }
  }

  return {
    revenue,
    transactions,
    customers,
    isLoading,
    fetchAnalytics,
  }
})
