<template>
  <div class="flex space-x-2">
    <Button>
      <Link class="w-4 h-4 mr-2" />
      Create Payment Link
    </Button>
    <Button>
      <Plus class="w-4 h-4 mr-2" />
      Add New Product
    </Button>
    <Button>
      <FileText class="w-4 h-4 mr-2" />
      Generate Invoice
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Link, Plus, FileText } from 'lucide-vue-next'
</script>
