<template>
  <div class="flex items-center space-x-2">
    <Button variant="outline">
      <Check class="w-4 h-4 mr-2" />
      Activate Selected
    </Button>
    <Button variant="outline">
      <X class="w-4 h-4 mr-2" />
      Deactivate Selected
    </Button>
    <Button variant="destructive">
      <Trash2 class="w-4 h-4 mr-2" />
      Delete Selected
    </Button>
    <Button variant="outline">
      <Download class="w-4 h-4 mr-2" />
      Export
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Check, X, Trash2, Download } from 'lucide-vue-next'
</script>
