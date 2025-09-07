<template>
  <Badge :variant="roleClass">{{ role }}</Badge>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Badge } from '@/components/ui/badge'
import type { UserRole } from '@/types/auth'

const props = defineProps<{
  role: UserRole
}>()

const roleClass = computed(() => {
  switch (props.role) {
    case 'superadmin':
      return 'destructive'
    case 'moderator':
      return 'secondary'
    default:
      return 'outline'
  }
})
</script>
