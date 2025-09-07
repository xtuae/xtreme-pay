import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserGatewaysStore = defineStore('userGateways', () => {
  const gateways = ref<any[]>([])
  const isLoading = ref(false)

  async function fetchGateways() {
    isLoading.value = true
    try {
      // Mock data
      gateways.value = [
        { id: 1, name: 'Stripe', status: 'connected', last_transaction: new Date() },
        { id: 2, name: 'PayPal', status: 'disconnected', last_transaction: null },
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
