<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Payment Gateways</h1>
      <GatewaySetupWizard />
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <UserGatewayCard v-for="gateway in userGateways.gateways" :key="gateway.id" :gateway="gateway" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserGatewaysStore } from '@/stores/userGateways'
import UserGatewayCard from '@/components/merchant/UserGatewayCard.vue'
import GatewaySetupWizard from '@/components/merchant/GatewaySetupWizard.vue'

const userGateways = useUserGatewaysStore()

onMounted(() => {
  userGateways.fetchGateways()
})
</script>
