import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../pages/auth/LoginPage.vue';
import RegisterPage from '../pages/auth/RegisterPage.vue';
import AppLayout from '../components/layout/AppLayout.vue';
import UserDashboard from '../pages/dashboard/UserDashboard.vue';
import AdminDashboard from '../pages/dashboard/AdminDashboard.vue';
import SuperAdminDashboard from '../pages/dashboard/SuperAdminDashboard.vue';
import UsersPage from '../pages/users/UsersPage.vue';
import OnboardingPage from '../pages/users/OnboardingPage.vue';
import ProfilePage from '../pages/users/ProfilePage.vue';
import PaymentGateways from '../pages/payments/PaymentGateways.vue';
import TransactionsPage from '../pages/payments/TransactionsPage.vue';
import ProcessPayment from '../pages/payments/ProcessPayment.vue';
import InvoicesPage from '../pages/invoices/InvoicesPage.vue';
import CreateInvoicePage from '../pages/invoices/CreateInvoicePage.vue';
import SettingsPage from '../pages/settings/SettingsPage.vue';
import TaxSettingsPage from '../pages/settings/TaxSettingsPage.vue';
import ReportsPage from '../pages/reports/ReportsPage.vue';
import { useAuthStore } from '../stores/auth';

const routes = [
  { path: '/login', component: LoginPage, meta: { guest: true } },
  { path: '/signup', component: RegisterPage, meta: { guest: true } },
  {
    path: '/',
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', component: UserDashboard },
      { path: 'profile', component: ProfilePage },
      { path: 'transactions', component: TransactionsPage },
      { path: 'invoices', component: InvoicesPage },
      { path: 'invoices/create', component: CreateInvoicePage },
      { path: 'gateways', component: PaymentGateways },
      { path: 'tax-settings', component: TaxSettingsPage },
      { path: 'settings', component: SettingsPage },
      { path: 'onboarding', component: OnboardingPage },
      { path: 'reports', component: ReportsPage },
    ],
  },
  {
    path: '/admin',
    component: AppLayout,
    meta: { requiresAuth: true, admin: true },
    children: [
      { path: '', component: AdminDashboard },
      { path: 'users', component: UsersPage },
    ],
  },
  {
    path: '/super-admin',
    component: AppLayout,
    meta: { requiresAuth: true, superAdmin: true },
    children: [
      { path: '', component: SuperAdminDashboard },
    ],
  },
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
    } else if (to.matched.some((record) => record.meta.superAdmin) && !authStore.isSuperAdmin) {
      next('/');
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
