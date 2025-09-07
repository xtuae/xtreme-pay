import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSettingsStore = defineStore('settings', () => {
  const profile = ref<any>(null)
  const business = ref<any>(null)
  const security = ref<any>(null)
  const isLoading = ref(false)

  async function fetchSettings() {
    isLoading.value = true
    try {
      // Mock data
      profile.value = {}
      business.value = {}
      security.value = {}
    } finally {
      isLoading.value = false
    }
  }

  return {
    profile,
    business,
    security,
    isLoading,
    fetchSettings,
  }
})
