<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Gateway Management</h1>
      <AddGatewayModal />
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <SystemGatewayCard v-for="gateway in gatewayStore.gateways" :key="gateway.id" :gateway="gateway" />
    </div>
    <GatewayConfiguration />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useGatewayStore } from '@/stores/gateway'
import SystemGatewayCard from '@/components/super-admin/SystemGatewayCard.vue'
import AddGatewayModal from '@/components/super-admin/AddGatewayModal.vue'
import GatewayConfiguration from '@/components/super-admin/GatewayConfiguration.vue'

const gatewayStore = useGatewayStore()

onMounted(() => {
  gatewayStore.fetchGateways()
})
</script>
