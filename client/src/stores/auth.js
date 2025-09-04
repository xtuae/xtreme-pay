import { defineStore } from 'pinia'
import { api } from '../utils/api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token'),
    isLoading: false,
    error: null
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'admin' || state.user?.role === 'superadmin',
    isSuperAdmin: (state) => state.user?.role === 'superadmin',
    isApproved: (state) => state.user?.status === 'approved'
  },
  
  actions: {
    async login(credentials) {
      this.isLoading = true
      try {
        const response = await api.post('/auth/login', credentials)
        this.token = response.data.token
        this.user = response.data.user
        localStorage.setItem('token', this.token)
        this.error = null
      } catch (error) {
        this.error = error.response?.data?.message || 'Login failed'
        throw error
      } finally {
        this.isLoading = false
      }
    },
    
    async register(userData) {
      this.isLoading = true
      try {
        const response = await api.post('/auth/register', userData)
        this.token = response.data.token
        this.user = response.data.user
        localStorage.setItem('token', this.token)
        this.error = null
      } catch (error) {
        this.error = error.response?.data?.message || 'Registration failed'
        throw error
      } finally {
        this.isLoading = false
      }
    },
    
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    }
  }
})
