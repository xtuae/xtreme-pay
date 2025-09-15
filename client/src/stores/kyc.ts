import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useKycStore = defineStore('kyc', () => {
  const documents = ref<any[]>([])
  const isLoading = ref(false)
  const selectedDocument = ref<any | null>(null)
  const searchQuery = ref('')
  const filterType = ref('all')

  // Fetch mock documents
  async function fetchDocuments() {
    isLoading.value = true
    try {
      documents.value = [
        {
          id: 1,
          name: 'Business Registration',
          status: 'pending',
          type: 'registration',
          user: { name: 'John Doe' },
          fileUrl: '/docs/business.pdf',
          history: [],
        },
        {
          id: 2,
          name: 'Tax Document',
          status: 'approved',
          type: 'tax',
          user: { name: 'Jane Doe' },
          fileUrl: '/docs/tax.pdf',
          history: [
            {
              action: 'Approved',
              date: new Date().toLocaleString(),
            },
          ],
        },
      ]
    } finally {
      isLoading.value = false
    }
  }

  // Select a document to view
  function selectDocument(doc: any) {
    selectedDocument.value = doc
  }

  // Approve action
  function approveDocument(docId: number) {
    const doc = documents.value.find(d => d.id === docId)
    if (doc) {
      doc.status = 'approved'
      doc.history = doc.history || []
      doc.history.push({
        action: 'Approved',
        date: new Date().toLocaleString(),
      })
    }
  }

  // Reject action
  function rejectDocument(docId: number, reason: string) {
    const doc = documents.value.find(d => d.id === docId)
    if (doc) {
      doc.status = 'rejected'
      doc.history = doc.history || []
      doc.history.push({
        action: 'Rejected',
        reason,
        date: new Date().toLocaleString(),
      })
    }
  }

  // Request more documents action
  function requestMoreDocuments(docId: number) {
    const doc = documents.value.find(d => d.id === docId)
    if (doc) {
      doc.status = 'more_requested'
      doc.history = doc.history || []
      doc.history.push({
        action: 'Requested More Documents',
        date: new Date().toLocaleString(),
      })
    }
  }

  // Computed: filter + search
  const filteredDocuments = computed(() => {
    return documents.value.filter(doc => {
      const matchesSearch = doc.user.name
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
      const matchesFilter =
        filterType.value === 'all' || doc.type === filterType.value
      return matchesSearch && matchesFilter
    })
  })

  return {
    documents,
    isLoading,
    selectedDocument,
    searchQuery,
    filterType,
    fetchDocuments,
    selectDocument,
    approveDocument,
    rejectDocument,
    requestMoreDocuments,
    filteredDocuments,
  }
})
