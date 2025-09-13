// src/stores/gateway.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGatewayStore = defineStore('gateway', () => {
  const gateways = ref<any[]>([])
  const isLoading = ref(false)
  const selectedGateway = ref<any | null>(null)

  async function fetchGateways() {
    isLoading.value = true
    try {
      // Mock data - replace with real API call if needed
      gateways.value = [
        { id: 1, name: 'Stripe', status: 'active', users: 120, transactions: 1200 },
        { id: 2, name: 'PayPal', status: 'active', users: 80, transactions: 800 },
      ]
    } finally {
      isLoading.value = false
    }
  }

  function addGateway(gateway: any) {
    const newGateway = {
      id: Date.now(),
      name: gateway.name || 'New Gateway',
      status: gateway.status || 'inactive',
      users: Number(gateway.users) || 0,
      transactions: Number(gateway.transactions) || 0,
    }
    gateways.value.push(newGateway)
    return newGateway
  }

  function deleteGateway(id: number) {
    gateways.value = gateways.value.filter(g => g.id !== id)
    // If deleted one was selected, clear selection
    if (selectedGateway.value && selectedGateway.value.id === id) {
      selectedGateway.value = null
    }
  }

  function selectGateway(gateway: any) {
    // store a shallow clone so edits don't immediately mutate list until saved
    selectedGateway.value = gateway ? { ...gateway } : null
  }

  function updateGateway(updated: any) {
    const idx = gateways.value.findIndex(g => g.id === updated.id)
    if (idx !== -1) {
      // replace with the updated object
      gateways.value[idx] = { ...updated }
    }
    // clear selection after save
    selectedGateway.value = null
  }

  function toggleStatus(id: number) {
    const g = gateways.value.find(g => g.id === id)
    if (g) {
      g.status = g.status === 'active' ? 'inactive' : 'active'
    }
    // if the toggled gateway is currently open in config, sync it too
    if (selectedGateway.value && selectedGateway.value.id === id) {
      selectedGateway.value.status = gateways.value.find(g => g.id === id)?.status
    }
  }

  return {
    gateways,
    isLoading,
    selectedGateway,
    fetchGateways,
    addGateway,
    deleteGateway,
    selectGateway,
    updateGateway,
    toggleStatus,
  }
})
