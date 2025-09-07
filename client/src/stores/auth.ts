import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authService } from '@/services/auth.service'
import type { User, MerchantProfile } from '@/types/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const merchant = ref<MerchantProfile | null>(null)
  const isLoading = ref(false)
  const isAuthenticated = computed(() => !!user.value)

  const isSuperAdmin = computed(() => user.value?.role === 'superadmin')
  const isModerator = computed(() => user.value?.role === 'moderator')
  const isUser = computed(() => user.value?.role === 'user')

  async function login(credentials: any) {
    isLoading.value = true
    try {
      const userData = await authService.login(credentials)
      user.value = userData
      if (userData.role === 'user') {
        await fetchMerchantProfile(userData.id)
      }
    } finally {
      isLoading.value = false
    }
  }

  async function register(userData: any) {
    isLoading.value = true
    try {
      const newUser = await authService.register(userData)
      user.value = newUser
    } finally {
      isLoading.value = false
    }
  }

  async function logout() {
    isLoading.value = true
    try {
      await authService.logout()
      user.value = null
      merchant.value = null
    } finally {
      isLoading.value = false
    }
  }

  async function fetchUser() {
    isLoading.value = true
    try {
      const userData = await authService.getUser()
      user.value = userData
      if (userData?.role === 'user') {
        await fetchMerchantProfile(userData.id)
      }
    } finally {
      isLoading.value = false
    }
  }

  async function fetchMerchantProfile(userId: string) {
    const profile = await authService.getMerchantProfile(userId)
    merchant.value = profile
  }

  return {
    user,
    merchant,
    isLoading,
    isAuthenticated,
    isSuperAdmin,
    isModerator,
    isUser,
    login,
    register,
    logout,
    fetchUser,
  }
})
