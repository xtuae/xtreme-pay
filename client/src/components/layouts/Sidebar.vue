<template>
  <aside class="w-64 bg-white shadow-md">
    <div class="p-6">
      <h1 class="text-2xl font-bold">Xtreme Pay</h1>
    </div>
    <nav class="mt-6">
      <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
        <component :is="item.icon" class="w-5 h-5" />
        <span class="mx-3">{{ item.name }}</span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { Home, Users, CreditCard, FileText, Settings } from 'lucide-vue-next'

const authStore = useAuthStore()

const navigation = computed(() => {
  const baseNav = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Transactions', href: '/transactions', icon: CreditCard },
    { name: 'Invoices', href: '/invoices', icon: FileText },
    { name: 'Settings', href: '/settings', icon: Settings },
  ]

  if (authStore.isSuperAdmin) {
    return [
      ...baseNav,
      { name: 'User Management', href: '/admin/users', icon: Users },
      { name: 'System Gateways', href: '/super-admin/gateways', icon: CreditCard },
    ]
  }

  if (authStore.isAdmin) {
    return [
      ...baseNav,
      { name: 'User Management', href: '/admin/users', icon: Users },
    ]
  }

  return baseNav
})
</script>
