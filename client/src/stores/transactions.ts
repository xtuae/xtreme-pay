import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions = ref<any[]>([])
  const isLoading = ref(false)

  async function fetchTransactions() {
    isLoading.value = true
    try {
      // Mock data
      transactions.value = [
        { id: 1, customer_name: 'John Doe', amount: 10, currency: 'USD', status: 'completed', created_at: new Date() },
        { id: 2, customer_name: 'Jane Doe', amount: 20, currency: 'USD', status: 'pending', created_at: new Date() },
      ]
    } finally {
      isLoading.value = false
    }
  }

  return {
    transactions,
    isLoading,
    fetchTransactions,
  }
})
