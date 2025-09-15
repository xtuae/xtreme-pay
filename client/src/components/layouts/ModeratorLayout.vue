<template>
  <BaseLayout :navigation="navigation">
    <router-view></router-view>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from './BaseLayout.vue'
import {
  LayoutDashboard,
  Users,
  Ticket,
  LifeBuoy,
  BarChart,
} from 'lucide-vue-next'

const navigation = [
  { name: 'Dashboard', href: '/moderator', icon: LayoutDashboard },
  { name: 'Assigned Users', href: '/moderator/users', icon: Users },
  { name: 'Support Tickets', href: '/moderator/tickets', icon: Ticket },
  { name: 'User Assistance', href: '/moderator/assistance', icon: LifeBuoy },
  { name: 'Limited Analytics', href: '/moderator/analytics', icon: BarChart },
]
</script>
