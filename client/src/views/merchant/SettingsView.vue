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
        <ProfileSettings />
      </TabsContent>
      <TabsContent value="business">
        <BusinessSettings />
      </TabsContent>
      <TabsContent value="security">
        <SecuritySettings />
      </TabsContent>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ProfileSettings from '@/components/merchant/settings/ProfileSettings.vue'
import BusinessSettings from '@/components/merchant/settings/BusinessSettings.vue'
import SecuritySettings from '@/components/merchant/settings/SecuritySettings.vue'
</script>
