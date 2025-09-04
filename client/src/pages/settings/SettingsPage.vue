<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Settings</h1>
      <p class="text-muted-foreground">Manage your account settings.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-1">
        <ul class="space-y-2">
          <li>
            <button @click="activeTab = 'profile'" :class="{ 'bg-gray-200': activeTab === 'profile' }" class="w-full text-left px-4 py-2 rounded-md">Profile</button>
          </li>
          <li>
            <button @click="activeTab = 'security'" :class="{ 'bg-gray-200': activeTab === 'security' }" class="w-full text-left px-4 py-2 rounded-md">Security</button>
          </li>
          <li>
            <button @click="activeTab = 'notifications'" :class="{ 'bg-gray-200': activeTab === 'notifications' }" class="w-full text-left px-4 py-2 rounded-md">Notifications</button>
          </li>
        </ul>
      </div>
      <div class="md:col-span-2">
        <div v-if="activeTab === 'profile'">
          <ProfileSettings />
        </div>
        <div v-if="activeTab === 'security'">
          <SecuritySettings />
        </div>
        <div v-if="activeTab === 'notifications'">
          <NotificationSettings />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProfileSettings from '../../components/settings/ProfileSettings.vue'
import SecuritySettings from '../../components/settings/SecuritySettings.vue'
import NotificationSettings from '../../components/settings/NotificationSettings.vue'

const activeTab = ref('profile')
</script>
