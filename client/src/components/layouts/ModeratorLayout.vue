<template>
  <BaseLayout :navigation="navigation">
    <router-view></router-view>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'

const navigation = [
  { name: 'Dashboard', href: '/moderator' },
  { name: 'Assigned Users', href: '/moderator/users' },
  { name: 'Support Tickets', href: '/moderator/tickets' },
  { name: 'User Assistance', href: '/moderator/assistance' },
  { name: 'Limited Analytics', href: '/moderator/analytics' },
]
</script>
