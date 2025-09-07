<template>
  <div class="flex items-center space-x-2">
    <Button variant="outline">
      <ShieldCheck class="w-4 h-4 mr-2" />
      Activate Selected
    </Button>
    <Button variant="outline">
      <ShieldX class="w-4 h-4 mr-2" />
      Suspend Selected
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
import { ShieldCheck, ShieldX, Trash2, Download } from 'lucide-vue-next'
</script>
