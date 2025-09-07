<template>
  <Badge :variant="statusClass">{{ status }}</Badge>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Badge } from '@/components/ui/badge'
import type { UserStatus } from '@/types/auth'

const props = defineProps<{
  status: UserStatus
}>()

const statusClass = computed(() => {
  switch (props.status) {
    case 'active':
      return 'default'
    case 'pending':
      return 'secondary'
    case 'suspended':
      return 'destructive'
    default:
      return 'outline'
  }
})
</script>
