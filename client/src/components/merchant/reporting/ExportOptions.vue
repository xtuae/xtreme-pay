<template>
  <div class="flex space-x-2">
    <Button variant="outline">
      <FileText class="w-4 h-4 mr-2" />
      PDF
    </Button>
    <Button variant="outline">
      <FileText class="w-4 h-4 mr-2" />
      CSV
    </Button>
    <Button variant="outline">
      <FileText class="w-4 h-4 mr-2" />
      Excel
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-vue-next'
</script>
