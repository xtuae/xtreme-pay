<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold">Settings</h1>
    <Tabs default-value="profile">
      <TabsList>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="business">Business</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <ProfileSettings :user="user" />
      </TabsContent>

      <TabsContent value="business">
        <BusinessSettings :user="user" />
      </TabsContent>

      <TabsContent value="security">
        <SecuritySettings :user="user" />
      </TabsContent>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProfileSettings from '@/components/merchant/settings/ProfileSettings.vue'
import BusinessSettings from '@/components/merchant/settings/BusinessSettings.vue'
import SecuritySettings from '@/components/merchant/settings/SecuritySettings.vue'

// reactive user object
const user = ref({
  name: '',
  email: '',
  phone: '',
  businessName: '',
  businessAddress: '',
  // add other fields you need
})

// simulate fetching user data from API
const fetchUserData = async () => {
  // replace this with your API call
  const response = await fetch('/api/user') 
  const data = await response.json()
  user.value = data
}

onMounted(() => {
  fetchUserData()
})
</script>
