<template>
  <Card>
    <CardHeader>
      <CardTitle>Gateway Monitoring</CardTitle>
    </CardHeader>
    <CardContent>
      <div v-for="gateway in monitoring.gatewayStatus" :key="gateway.id" class="flex items-center justify-between">
        <span>{{ gateway.name }}</span>
        <span :class="['px-2 py-1 text-xs font-medium rounded-full', { 'bg-green-100 text-green-800': gateway.status === 'operational', 'bg-red-100 text-red-800': gateway.status === 'downtime' }]">
          {{ gateway.status }}
        </span>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMonitoringStore } from '@/stores/monitoring'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const monitoring = useMonitoringStore()

onMounted(() => {
  monitoring.fetchGatewayStatus()
})
</script>
