<template>
  <div class="flex items-center space-x-2">
    <Button variant="outline" @click="$emit('activateSelected')">
      <Check class="w-4 h-4 mr-2" />
      Activate Selected
    </Button>
    <Button variant="outline" @click="$emit('deactivateSelected')">
      <X class="w-4 h-4 mr-2" />
      Deactivate Selected
    </Button>
    <!-- Keep other buttons as they are; no change needed -->
    <Button variant="destructive">
      <Trash2 class="w-4 h-4 mr-2" />
      Delete Selected
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Check, X, Trash2 } from 'lucide-vue-next'

defineProps({
  selectedProducts: {
    type: Array,
    required: true
  }
})
</script>
