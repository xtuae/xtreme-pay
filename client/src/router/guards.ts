import { useAuthStore } from '@/stores/auth'
import type { NavigationGuard } from 'vue-router'

export const authGuard: NavigationGuard = async (to, from, next) => {
  const authStore = useAuthStore()

  // Fetch user on initial load
  if (!authStore.user) {
    await authStore.fetchUser()
  }

  if (to.matched.some((record) => record.meta.guest)) {
    if (authStore.isAuthenticated) {
      const userRole = authStore.user?.role;
      if (userRole === 'superadmin') {
        next('/super-admin');
      } else if (userRole === 'moderator') {
        next('/moderator');
      } else if (userRole === 'user') { // Assuming 'user' role corresponds to '/merchant'
        next('/merchant');
      } else {
        next('/'); // Fallback for other roles or if role is undefined
      }
    } else {
      next();
    }
  } else {
    next();
  }
}
