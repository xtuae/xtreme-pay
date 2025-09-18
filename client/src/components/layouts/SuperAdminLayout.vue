<template>
  <BaseLayout :navigation="navigation">
    <router-view></router-view>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
import {
  LayoutDashboard,
  Users,
  BarChart,
  Network,
  FileCheck,
  Settings,
  FileClock,
} from 'lucide-vue-next'

const navigation = [
  { name: 'Dashboard', href: '/super-admin', icon: LayoutDashboard },
  { name: 'User Management', href: '/super-admin/users', icon: Users },
  { name: 'System Analytics', href: '/super-admin/analytics', icon: BarChart },
  { name: 'Gateway Management', href: '/super-admin/gateways', icon: Network },
  { name: 'Document Verification', href: '/super-admin/kyc', icon: FileCheck },
  { name: 'System Settings', href: '/super-admin/settings', icon: Settings },
  { name: 'Audit Logs', href: '/super-admin/logs', icon: FileClock },
]
</script>
