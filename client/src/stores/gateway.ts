import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGatewayStore = defineStore('gateway', () => {
  const gateways = ref<any[]>([])
  const isLoading = ref(false)

  async function fetchGateways() {
    isLoading.value = true
    try {
      // Mock data
      gateways.value = [
        { id: 1, name: 'Stripe', status: 'active', users: 120, transactions: 1200 },
        { id: 2, name: 'PayPal', status: 'inactive', users: 80, transactions: 800 },
      ]
    } finally {
      isLoading.value = false
    }
  }

  return {
    gateways,
    isLoading,
    fetchGateways,
  }
})
