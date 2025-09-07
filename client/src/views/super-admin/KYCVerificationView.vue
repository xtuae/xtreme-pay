<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold">KYC Verification</h1>
    <div class="flex items-center justify-between">
      <KYCFilters />
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <DocumentCard v-for="doc in kyc.documents" :key="doc.id" :document="doc" />
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <DocumentViewer />
      <div>
        <VerificationActions />
        <DocumentHistory class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useKycStore } from '@/stores/kyc'
import DocumentCard from '@/components/super-admin/DocumentCard.vue'
import DocumentViewer from '@/components/super-admin/DocumentViewer.vue'
import VerificationActions from '@/components/super-admin/VerificationActions.vue'
import DocumentHistory from '@/components/super-admin/DocumentHistory.vue'
import KYCFilters from '@/components/super-admin/KYCFilters.vue'

const kyc = useKycStore()

onMounted(() => {
  kyc.fetchDocuments()
})
</script>
