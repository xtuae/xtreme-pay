<template>
  <div class="flex space-x-2">
    <Button variant="outline">
      <Check class="w-4 h-4 mr-2" />
      Approve
    </Button>
    <RejectionReasonModal />
    <Button variant="outline">
      <FilePlus class="w-4 h-4 mr-2" />
      Request More Documents
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Check, FilePlus } from 'lucide-vue-next'
import RejectionReasonModal from './RejectionReasonModal.vue'
</script>
