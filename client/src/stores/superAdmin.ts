import { defineStore } from 'pinia'
import { ref } from 'vue'
import { superAdminService } from '@/services/superAdmin.service'

export const useSuperAdminStore = defineStore('superAdmin', () => {
  const stats = ref<any>(null)
  const activityFeed = ref<any[] | null>(null)
  const isLoading = ref(false)

  async function fetchDashboardStats() {
    isLoading.value = true
    try {
      stats.value = await superAdminService.getDashboardStats()
    } finally {
      isLoading.value = false
    }
  }

  async function fetchActivityFeed() {
    isLoading.value = true
    try {
      activityFeed.value = await superAdminService.getActivityFeed()
    } finally {
      isLoading.value = false
    }
  }

  return {
    stats,
    activityFeed,
    isLoading,
    fetchDashboardStats,
    fetchActivityFeed,
  }
})
