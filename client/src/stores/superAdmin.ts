import { defineStore } from 'pinia'
import { ref } from 'vue'
import { superAdminService } from '@/services/superAdmin.service'

export const useSuperAdminStore = defineStore('superAdmin', () => {
  const stats = ref<any>(null)
  const activityFeed = ref<any[] | null>(null)
  const users = ref<any[] | null>(null)
  const totalUsers = ref<number | null>(null)
  const totalPayments = ref<number | null>(null)
  const totalTransactions = ref<number | null>(null)
  const totalInvoices = ref<number | null>(null)
  const isLoading = ref(false)

  async function fetchTotalUsers() {
    isLoading.value = true
    try {
      totalUsers.value = await superAdminService.getTotalUsers()
    } finally {
      isLoading.value = false
    }
  }

  async function fetchTotalPayments() {
    isLoading.value = true
    try {
      totalPayments.value = await superAdminService.getTotalPayments()
    } finally {
      isLoading.value = false
    }
  }

  async function fetchTotalTransactions() {
    isLoading.value = true
    try {
      totalTransactions.value = await superAdminService.getTotalTransactions()
    } finally {
      isLoading.value = false
    }
  }

  async function fetchTotalInvoices() {
    isLoading.value = true
    try {
      totalInvoices.value = await superAdminService.getTotalInvoices()
    } finally {
      isLoading.value = false
    }
  }

  async function fetchUsers() {
    isLoading.value = true
    try {
      users.value = await superAdminService.getUsers()
    } finally {
      isLoading.value = false
    }
  }

  async function updateUserStatus(userId: string, status: string) {
    isLoading.value = true
    try {
      await superAdminService.updateUserStatus(userId, status)
      await fetchUsers()
    } finally {
      isLoading.value = false
    }
  }

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
    users,
    isLoading,
    fetchDashboardStats,
    fetchActivityFeed,
    fetchUsers,
    updateUserStatus,
    totalUsers,
    totalPayments,
    totalTransactions,
    totalInvoices,
    fetchTotalUsers,
    fetchTotalPayments,
    fetchTotalTransactions,
    fetchTotalInvoices,
  }
})
