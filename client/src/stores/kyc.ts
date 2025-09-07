import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useKycStore = defineStore('kyc', () => {
  const documents = ref<any[]>([])
  const isLoading = ref(false)

  async function fetchDocuments() {
    isLoading.value = true
    try {
      // Mock data
      documents.value = [
        { id: 1, name: 'Business Registration', status: 'pending', user: { name: 'John Doe' } },
        { id: 2, name: 'Tax Document', status: 'approved', user: { name: 'Jane Doe' } },
      ]
    } finally {
      isLoading.value = false
    }
  }

  return {
    documents,
    isLoading,
    fetchDocuments,
  }
})
