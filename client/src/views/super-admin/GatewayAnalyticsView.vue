<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold">Gateway Analytics</h1>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <GatewayPerformanceChart />
      <TransactionVolumeChart />
      <RevenueBreakdown />
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ProcessingTimeChart />
      <UserAdoptionChart />
      <GeographicDistribution />
    </div>
    <GatewayMonitoring />
  </div>
</template>

<script setup lang="ts">
import GatewayPerformanceChart from '@/components/super-admin/GatewayPerformanceChart.vue'
import TransactionVolumeChart from '@/components/super-admin/TransactionVolumeChart.vue'
import RevenueBreakdown from '@/components/super-admin/RevenueBreakdown.vue'
import ProcessingTimeChart from '@/components/super-admin/ProcessingTimeChart.vue'
import UserAdoptionChart from '@/components/super-admin/UserAdoptionChart.vue'
import GeographicDistribution from '@/components/super-admin/GeographicDistribution.vue'
import GatewayMonitoring from '@/components/super-admin/GatewayMonitoring.vue'
</script>
