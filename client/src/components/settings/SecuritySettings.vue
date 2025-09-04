<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-lg font-semibold text-gray-700 mb-4">Security Settings</h2>
    <form @submit.prevent="updatePassword" class="space-y-6">
      <div>
        <label for="currentPassword" class="block text-sm font-medium text-gray-700">Current Password</label>
        <input v-model="currentPassword" id="currentPassword" type="password" required class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
      </div>
      <div>
        <label for="newPassword" class="block text-sm font-medium text-gray-700">New Password</label>
        <input v-model="newPassword" id="newPassword" type="password" required class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
      </div>
      <div>
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm New Password</label>
        <input v-model="confirmPassword" id="confirmPassword" type="password" required class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
      </div>
      <div class="flex justify-end">
        <button type="submit" class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Update Password</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'

const authStore = useAuthStore()

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const updatePassword = async () => {
  if (newPassword.value !== confirmPassword.value) {
    alert('New passwords do not match.')
    return
  }
  try {
    await authStore.updatePassword({
      currentPassword: currentPassword.value,
      newPassword: newPassword.value,
    })
  } catch (error) {
    console.error('Failed to update password:', error)
  }
}
</script>
