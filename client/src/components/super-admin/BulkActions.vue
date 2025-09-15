<template>
  <div class="flex items-center space-x-2">
    <Button variant="outline" @click="trigger('activate')">
      <ShieldCheck class="w-4 h-4 mr-2" /> Activate Selected
    </Button>
    <Button variant="outline" @click="trigger('suspend')">
      <ShieldX class="w-4 h-4 mr-2" /> Suspend Selected
    </Button>
    <Button variant="destructive" @click="trigger('delete')">
      <Trash2 class="w-4 h-4 mr-2" /> Delete Selected
    </Button>
    <Button variant="outline" @click="trigger('export')">
      <Download class="w-4 h-4 mr-2" /> Export
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { ShieldCheck, ShieldX, Trash2, Download } from 'lucide-vue-next'

const emit = defineEmits(['bulk-action'])

const trigger = (action: string) => {
  emit('bulk-action', action)
}
</script>
