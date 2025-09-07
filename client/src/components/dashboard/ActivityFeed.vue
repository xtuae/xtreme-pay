<template>
  <Card>
    <CardHeader>
      <CardTitle>Recent Activity</CardTitle>
    </CardHeader>
    <CardContent>
      <div v-for="item in activityFeed" :key="item.id" class="flex items-center space-x-4">
        <div class="flex-shrink-0">
          <Avatar>
            <AvatarImage :src="item.user.avatar_url" />
            <AvatarFallback>{{ item.user.email.charAt(0).toUpperCase() }}</AvatarFallback>
          </Avatar>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
            {{ item.action }}
          </p>
          <p class="text-sm text-gray-500 truncate dark:text-gray-400">
            {{ item.details }}
          </p>
        </div>
        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {{ new Date(item.created_at).toLocaleTimeString() }}
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

defineProps({
  activityFeed: Array,
})
</script>
