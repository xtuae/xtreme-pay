<template>
  <BaseLayout :navigation="navigation">
    <router-view></router-view>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
import {
  LayoutDashboard,
  Link,
  Box,
  ArrowRightLeft,
  Users,
  BarChart,
  Settings,
  KeyRound,
} from 'lucide-vue-next'

const navigation = [
  { name: 'Dashboard', href: '/merchant', icon: LayoutDashboard },
  { name: 'Payment Links', href: '/merchant/payment-links', icon: Link },
  { name: 'Products', href: '/merchant/products', icon: Box },
  { name: 'Transactions', href: '/merchant/transactions', icon: ArrowRightLeft },
  { name: 'Customers', href: '/merchant/customers', icon: Users },
  { name: 'Analytics', href: '/merchant/analytics', icon: BarChart },
  { name: 'Settings', href: '/merchant/settings', icon: Settings },
  { name: 'API Keys', href: '/merchant/api-keys', icon: KeyRound },
]
</script>
