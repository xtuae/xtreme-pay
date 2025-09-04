<template>
  <header class="flex justify-between items-center p-6 bg-white border-b">
    <div></div>
    <div>
      <span class="mr-4">Welcome, {{ user?.email }}</span>
      <button @click="logout" class="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">Logout</button>
    </div>
  </header>
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
