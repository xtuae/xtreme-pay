<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Payment Links</h1>
      <CreatePaymentLinkModal />
    </div>
    <PaymentLinkTable :payment-links="paymentLinks.paymentLinks" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usePaymentLinksStore } from '@/stores/paymentLinks'
import PaymentLinkTable from '@/components/merchant/PaymentLinkTable.vue'
import CreatePaymentLinkModal from '@/components/merchant/CreatePaymentLinkModal.vue'

const paymentLinks = usePaymentLinksStore()

onMounted(() => {
  paymentLinks.fetchPaymentLinks()
})
</script>
