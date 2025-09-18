<template>
  <aside :class="['h-screen bg-white shadow-md transition-all duration-300', { 'w-64': !isCollapsed, 'w-20': isCollapsed }]">
    <div :class="['flex items-center p-6', { 'justify-between': !isCollapsed, 'justify-center': isCollapsed }]">
      <h1 v-if="!isCollapsed" class="text-2xl font-bold">Xtreme Pay</h1>
      <button @click="isCollapsed = !isCollapsed">
        <Menu class="w-6 h-6 text-gray-700" />
      </button>
    </div>
    <nav class="mt-2">
      <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="['flex items-center py-3 text-gray-700 hover:bg-gray-200', { 'px-6': !isCollapsed, 'justify-center': isCollapsed }]">
        <component :is="item.icon" class="w-5 h-5" />
        <span v-if="!isCollapsed" class="mx-3">{{ item.name }}</span>
      </router-link>
    </nav>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { Home, Users, CreditCard, FileText, Settings, Menu } from 'lucide-vue-next'

const isCollapsed = ref(false)

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
