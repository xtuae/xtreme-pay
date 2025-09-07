import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePaymentLinksStore = defineStore('paymentLinks', () => {
  const paymentLinks = ref<any[]>([])
  const isLoading = ref(false)

  async function fetchPaymentLinks() {
    isLoading.value = true
    try {
      // Mock data
      paymentLinks.value = [
        { id: 1, title: 'Product 1', amount: 10, currency: 'USD', status: 'active', created_at: new Date(), clicks: 100, conversions: 10 },
        { id: 2, title: 'Product 2', amount: 20, currency: 'USD', status: 'inactive', created_at: new Date(), clicks: 200, conversions: 20 },
      ]
    } finally {
      isLoading.value = false
    }
  }

  return {
    paymentLinks,
    isLoading,
    fetchPaymentLinks,
  }
})
