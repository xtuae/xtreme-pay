import { useAuthStore } from '@/stores/auth'
import type { NavigationGuard } from 'vue-router'

export const authGuard: NavigationGuard = async (to, from, next) => {
  const authStore = useAuthStore()

  // Fetch user on initial load
  if (!authStore.user) {
    await authStore.fetchUser()
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authStore.isAuthenticated) {
      next('/login')
    } else {
      const userRole = authStore.user?.role
      const requiredRoles = to.meta.roles as string[]

      if (requiredRoles && !requiredRoles.includes(userRole!)) {
        // Redirect to an unauthorized page or home
        next('/')
      } else {
        next()
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (authStore.isAuthenticated) {
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
}
