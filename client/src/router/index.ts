import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import LoginView from '../views/auth/LoginView.vue';
import RegisterView from '../views/auth/RegisterView.vue';
import ForgotPasswordView from '../views/auth/ForgotPasswordView.vue';
import MerchantLayout from '../components/layouts/MerchantLayout.vue';
import ModeratorLayout from '../components/layouts/ModeratorLayout.vue';
import SuperAdminLayout from '../components/layouts/SuperAdminLayout.vue';
import MerchantDashboard from '../views/merchant/DashboardView.vue';
import PaymentLinksView from '../views/merchant/PaymentLinksView.vue';
import ProductsView from '../views/merchant/ProductsView.vue';
import TransactionsView from '../views/merchant/TransactionsView.vue';
import TransactionDetailView from '../views/merchant/TransactionDetailView.vue';
import AnalyticsView from '../views/merchant/AnalyticsView.vue';
import ReportsView from '../views/merchant/ReportsView.vue';
import GatewaysView from '../views/merchant/GatewaysView.vue';
import SettingsView from '../views/merchant/SettingsView.vue';
import AdminDashboard from '../pages/dashboard/AdminDashboard.vue';
import SuperAdminDashboard from '../views/super-admin/DashboardView.vue';
import UserManagementView from '../views/super-admin/UserManagementView.vue';
import UserDetailView from '../views/super-admin/UserDetailView.vue';
import KYCVerificationView from '../views/super-admin/KYCVerificationView.vue';
import GatewayManagementView from '../views/super-admin/GatewayManagementView.vue';
import GatewayAnalyticsView from '../views/super-admin/GatewayAnalyticsView.vue';
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
import { authGuard } from './guards';

const routes: Array<RouteRecordRaw> = [
  { path: '/login', component: LoginView, meta: { guest: true } },
  { path: '/signup', component: RegisterView, meta: { guest: true } },
  { path: '/forgot-password', component: ForgotPasswordView, meta: { guest: true } },
  {
    path: '/',
    component: MerchantLayout,
    meta: { requiresAuth: true, roles: ['user'] },
    children: [
      { path: '', component: MerchantDashboard },
      { path: 'payment-links', component: PaymentLinksView },
      { path: 'products', component: ProductsView },
      { path: 'profile', component: ProfilePage },
      { path: 'transactions', component: TransactionsView },
      { path: 'transactions/:id', component: TransactionDetailView },
      { path: 'invoices', component: InvoicesPage },
      { path: 'invoices/create', component: CreateInvoicePage },
      { path: 'gateways', component: GatewaysView },
      { path: 'tax-settings', component: TaxSettingsPage },
      { path: 'settings', component: SettingsView },
      { path: 'onboarding', component: OnboardingPage },
      { path: 'analytics', component: AnalyticsView },
      { path: 'reports', component: ReportsView },
    ],
  },
  {
    path: '/moderator',
    component: ModeratorLayout,
    meta: { requiresAuth: true, roles: ['moderator'] },
    children: [
      { path: '', component: AdminDashboard },
    ],
  },
  {
    path: '/super-admin',
    component: SuperAdminLayout,
    meta: { requiresAuth: true, roles: ['superadmin'] },
    children: [
      { path: '', component: SuperAdminDashboard },
      { path: 'users', component: UserManagementView },
      { path: 'users/:id', component: UserDetailView },
      { path: 'kyc', component: KYCVerificationView },
      { path: 'gateways', component: GatewayManagementView },
      { path: 'analytics', component: GatewayAnalyticsView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(authGuard);

export default router;
