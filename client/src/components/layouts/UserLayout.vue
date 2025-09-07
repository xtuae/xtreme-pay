<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="w-64 bg-white shadow-md">
      <div class="p-6">
        <h1 class="text-2xl font-bold">Xtreme Pay</h1>
      </div>
      <nav class="mt-6">
        <router-link to="/" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
          <span class="mx-3">Dashboard</span>
        </router-link>
        <router-link to="/profile" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
          <span class="mx-3">Profile</span>
        </router-link>
        <router-link to="/transactions" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
          <span class="mx-3">Transactions</span>
        </router-link>
        <router-link to="/invoices" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
          <span class="mx-3">Invoices</span>
        </router-link>
        <router-link to="/gateways" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
          <span class="mx-3">Payment Gateways</span>
        </router-link>
        <router-link to="/tax-settings" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
          <span class="mx-3">Tax Settings</span>
        </router-link>
        <router-link to="/settings" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
          <span class="mx-3">Settings</span>
        </router-link>
      </nav>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="flex justify-between items-center p-6 bg-white border-b">
        <div></div>
        <div>
          <span class="mr-4">Welcome, {{ user?.email }}</span>
          <button @click="logout" class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Logout</button>
        </div>
      </header>
      <main class="flex-1 overflow-y-auto">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const user = computed(() => authStore.user)

const logout = async () => {
  await authStore.logout()
  router.push('/login')
}
</script>
