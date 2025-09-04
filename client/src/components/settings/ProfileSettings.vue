<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-lg font-semibold text-gray-700 mb-4">Profile Settings</h2>
    <form @submit.prevent="updateProfile" class="space-y-6">
      <div>
        <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
        <input v-model="firstName" id="firstName" type="text" required class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
      </div>
      <div>
        <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
        <input v-model="lastName" id="lastName" type="text" required class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input v-model="email" id="email" type="email" required class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
      </div>
      <div class="flex justify-end">
        <button type="submit" class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Save Changes</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'

const authStore = useAuthStore()

const firstName = ref(authStore.user?.user_metadata?.first_name || '')
const lastName = ref(authStore.user?.user_metadata?.last_name || '')
const email = ref(authStore.user?.email || '')

const updateProfile = async () => {
  try {
    await authStore.updateProfile({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
    })
  } catch (error) {
    console.error('Failed to update profile:', error)
  }
}
</script>
