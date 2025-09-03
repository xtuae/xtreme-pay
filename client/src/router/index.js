import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/auth/Login.vue';
import Signup from '../pages/auth/Signup.vue';
import Dashboard from '../pages/user/Dashboard.vue';
import Profile from '../pages/user/Profile.vue';
import Transactions from '../pages/user/Transactions.vue';
import Invoices from '../pages/user/Invoices.vue';
import PaymentGateways from '../pages/user/PaymentGateways.vue';
import TaxSettings from '../pages/user/TaxSettings.vue';
import Settings from '../pages/user/Settings.vue';
import Onboarding from '../pages/user/Onboarding.vue';
import AdminDashboard from '../pages/admin/AdminDashboard.vue';
import UserManagement from '../pages/admin/UserManagement.vue';
import OnboardingTracking from '../pages/admin/OnboardingTracking.vue';
import AdminSettings from '../pages/admin/AdminSettings.vue';
import { useAuthStore } from '../stores/auth';

const routes = [
  { path: '/login', component: Login, meta: { guest: true } },
  { path: '/signup', component: Signup, meta: { guest: true } },
  { path: '/', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  { path: '/transactions', component: Transactions, meta: { requiresAuth: true } },
  { path: '/invoices', component: Invoices, meta: { requiresAuth: true } },
  { path: '/gateways', component: PaymentGateways, meta: { requiresAuth: true } },
  { path: '/tax-settings', component: TaxSettings, meta: { requiresAuth: true } },
  { path: '/settings', component: Settings, meta: { requiresAuth: true } },
  { path: '/onboarding', component: Onboarding, meta: { requiresAuth: true } },
  // Admin routes
  { path: '/admin', component: AdminDashboard, meta: { requiresAuth: true, admin: true } },
  { path: '/admin/users', component: UserManagement, meta: { requiresAuth: true, admin: true } },
  { path: '/admin/onboarding', component: OnboardingTracking, meta: { requiresAuth: true, admin: true } },
  { path: '/admin/settings', component: AdminSettings, meta: { requiresAuth: true, admin: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authStore.isAuthenticated) {
      next('/login');
    } else if (to.matched.some((record) => record.meta.admin) && !authStore.isAdmin) {
      next('/');
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (authStore.isAuthenticated) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
