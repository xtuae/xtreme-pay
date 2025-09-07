<template>
  <BaseLayout :navigation="navigation">
    <router-view></router-view>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'

const navigation = [
  { name: 'Dashboard', href: '/super-admin' },
  { name: 'User Management', href: '/super-admin/users' },
  { name: 'System Analytics', href: '/super-admin/analytics' },
  { name: 'Gateway Management', href: '/super-admin/gateways' },
  { name: 'Document Verification', href: '/super-admin/documents' },
  { name: 'System Settings', href: '/super-admin/settings' },
  { name: 'Audit Logs', href: '/super-admin/logs' },
]
</script>
