<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-lg font-semibold text-gray-700 mb-4">Notification Settings</h2>
    <form @submit.prevent="updateNotifications" class="space-y-6">
      <div class="flex items-center justify-between">
        <label for="emailNotifications" class="block text-sm font-medium text-gray-700">Email Notifications</label>
        <input v-model="emailNotifications" id="emailNotifications" type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
      </div>
      <div class="flex items-center justify-between">
        <label for="smsNotifications" class="block text-sm font-medium text-gray-700">SMS Notifications</label>
        <input v-model="smsNotifications" id="smsNotifications" type="checkbox" class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
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

const emailNotifications = ref(authStore.user?.user_metadata?.notifications?.email || false)
const smsNotifications = ref(authStore.user?.user_metadata?.notifications?.sms || false)

const updateNotifications = async () => {
  try {
    await authStore.updateProfile({
      notifications: {
        email: emailNotifications.value,
        sms: smsNotifications.value,
      },
    })
  } catch (error) {
    console.error('Failed to update notifications:', error)
  }
}
</script>
