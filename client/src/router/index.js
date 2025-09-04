import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../pages/auth/LoginPage.vue';
import RegisterPage from '../pages/auth/RegisterPage.vue';
import AppLayout from '../components/layout/AppLayout.vue';
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
import SuperAdminDashboard from '../pages/dashboard/SuperAdminDashboard.vue';
import { useAuthStore } from '../stores/auth';

const routes = [
  { path: '/login', component: LoginPage, meta: { guest: true } },
  { path: '/signup', component: RegisterPage, meta: { guest: true } },
  {
    path: '/',
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', component: Dashboard },
      { path: 'profile', component: Profile },
      { path: 'transactions', component: Transactions },
      { path: 'invoices', component: Invoices },
      { path: 'gateways', component: PaymentGateways },
      { path: 'tax-settings', component: TaxSettings },
      { path: 'settings', component: Settings },
      { path: 'onboarding', component: Onboarding },
    ],
  },
  // Admin routes
  { path: '/admin', component: AdminDashboard, meta: { requiresAuth: true, admin: true } },
  { path: '/admin/users', component: UserManagement, meta: { requiresAuth: true, admin: true } },
  { path: '/admin/onboarding', component: OnboardingTracking, meta: { requiresAuth: true, admin: true } },
  { path: '/admin/settings', component: AdminSettings, meta: { requiresAuth: true, admin: true } },
  // Super Admin routes
  { path: '/super-admin', component: SuperAdminDashboard, meta: { requiresAuth: true, superAdmin: true } },
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
    } else if (to.matched.some((record) => record.meta.superAdmin) && !authStore.isSuperAdmin) {
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
