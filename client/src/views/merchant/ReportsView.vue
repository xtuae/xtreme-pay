<template>
  <div class="space-y-4">
    <h1 class="text-3xl font-bold">Reports</h1>
    <div class="flex items-center justify-between">
      <DateRangePicker />
      <ExportOptions />
    </div>
    <ReportBuilder />
  </div>
</template>

<script setup lang="ts">
import DateRangePicker from '@/components/merchant/reporting/DateRangePicker.vue'
import ExportOptions from '@/components/merchant/reporting/ExportOptions.vue'
import ReportBuilder from '@/components/merchant/reporting/ReportBuilder.vue'
</script>
