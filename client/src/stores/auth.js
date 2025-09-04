import { defineStore } from 'pinia'
import { supabase } from '../utils/supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token'),
    isLoading: false,
    error: null
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.user_metadata?.role === 'admin' || state.user?.user_metadata?.role === 'superadmin',
    isSuperAdmin: (state) => state.user?.user_metadata?.role === 'superadmin',
  },
  
  actions: {
    async login(credentials) {
      this.isLoading = true
      this.error = null
      try {
        const { data, error } = await supabase.auth.signInWithPassword(credentials)
        if (error) throw error
        this.token = data.session.access_token
        this.user = data.user
        localStorage.setItem('token', this.token)
        return data.user // Return the user object
      } catch (error) {
        this.error = error.message || 'Login failed'
        throw error
      } finally {
        this.isLoading = false
      }
    },
    
    async register(userData) {
      this.isLoading = true
      this.error = null
      try {
        const { data, error } = await supabase.auth.signUp({
          email: userData.email,
          password: userData.password,
          options: {
            data: {
              first_name: userData.firstName,
              last_name: userData.lastName,
              company_name: userData.companyName,
              phone: userData.phone,
              role: 'user',
              status: 'pending'
            }
          }
        })
        if (error) throw error
        this.token = data.session.access_token
        this.user = data.user
        localStorage.setItem('token', this.token)
        return data.user // Return the user object
      } catch (error) {
        this.error = error.message || 'Registration failed'
        throw error
      } finally {
        this.isLoading = false
      }
    },
    
    async logout() {
      this.isLoading = true
      this.error = null
      try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        this.user = null
        this.token = null
        localStorage.removeItem('token')
      } catch (error) {
        this.error = error.message || 'Logout failed'
        throw error
      } finally {
        this.isLoading = false
      }
    }
  }
})
