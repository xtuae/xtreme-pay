<template>
  <BaseLayout :navigation="navigation">
    <router-view></router-view>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Payment Links', href: '/payment-links' },
  { name: 'Products', href: '/products' },
  { name: 'Transactions', href: '/transactions' },
  { name: 'Customers', href: '/customers' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Settings', href: '/settings' },
  { name: 'API Keys', href: '/api-keys' },
]
</script>
