<template>
  <div class="flex space-x-2">
    <Button variant="ghost" size="icon">
      <Eye class="w-4 h-4" />
    </Button>
    <Button variant="ghost" size="icon">
      <Pencil class="w-4 h-4" />
    </Button>
    <Button variant="ghost" size="icon">
      <ShieldCheck class="w-4 h-4 text-green-500" v-if="user.status !== 'active'" />
      <ShieldX class="w-4 h-4 text-red-500" v-else />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Eye, Pencil, ShieldCheck, ShieldX } from 'lucide-vue-next'

defineProps({
  user: Object,
})
</script>
