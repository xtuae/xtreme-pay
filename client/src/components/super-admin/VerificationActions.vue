<template>
  <div class="flex space-x-2">
    <Button variant="outline" @click="kyc.approveDocument(document.id)">
      <Check class="w-4 h-4 mr-2" />
      Approve
    </Button>

    <RejectionReasonModal @reject="reason => kyc.rejectDocument(document.id, reason)" />

    <Button variant="outline" @click="kyc.requestMoreDocuments(document.id)">
      <FilePlus class="w-4 h-4 mr-2" />
      Request More Documents
    </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Check, FilePlus } from 'lucide-vue-next'
import { useKycStore } from '@/stores/kyc'
import RejectionReasonModal from './RejectionReasonModal.vue'

const props = defineProps({
  document: Object
})

const kyc = useKycStore()
</script>
