<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold">Analytics</h1>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <RevenueChart />
      <TransactionVolumeChart />
      <ConversionRateChart />
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <CustomerAnalytics />
      <GeographicChart />
      <PerformanceMetrics />
    </div>
  </div>
</template>

<script setup lang="ts">
import RevenueChart from '@/components/merchant/analytics/RevenueChart.vue'
import TransactionVolumeChart from '@/components/merchant/analytics/TransactionVolumeChart.vue'
import ConversionRateChart from '@/components/merchant/analytics/ConversionRateChart.vue'
import CustomerAnalytics from '@/components/merchant/analytics/CustomerAnalytics.vue'
import GeographicChart from '@/components/merchant/analytics/GeographicChart.vue'
import PerformanceMetrics from '@/components/merchant/analytics/PerformanceMetrics.vue'
</script>
