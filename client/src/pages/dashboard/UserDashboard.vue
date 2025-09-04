<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">User Dashboard</h1>
      <p class="text-muted-foreground">Welcome back!</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard title="Total Transactions" value="1,234" change="+12.5%" />
      <StatsCard title="Total Revenue" value="$12,345" change="+8.2%" />
      <StatsCard title="Pending Invoices" value="56" change="+5" />
      <StatsCard title="Gateway Status" value="Active" change="All systems normal" />
    </div>

    <div class="mt-8">
      <RecentActivity />
    </div>
  </div>
</template>

<script setup>
import StatsCard from '../../components/dashboard/StatsCard.vue'
import RecentActivity from '../../components/dashboard/RecentActivity.vue'
</script>
