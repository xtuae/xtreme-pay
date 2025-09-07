import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMonitoringStore = defineStore('monitoring', () => {
  const gatewayStatus = ref<any[]>([])
  const isLoading = ref(false)

  async function fetchGatewayStatus() {
    isLoading.value = true
    try {
      // Mock data
      gatewayStatus.value = [
        { id: 1, name: 'Stripe', status: 'operational' },
        { id: 2, name: 'PayPal', status: 'downtime' },
      ]
    } finally {
      isLoading.value = false
    }
  }

  return {
    gatewayStatus,
    isLoading,
    fetchGatewayStatus,
  }
})
