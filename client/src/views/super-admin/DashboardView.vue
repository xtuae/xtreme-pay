<template>
  <div class="space-y-4">
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Total Users" :value="stats?.total_users" change="+20.1% from last month" :icon="Users" />
      <StatCard title="Total Transactions" :value="stats?.total_transactions" change="+180.1% from last month" :icon="CreditCard" />
      <StatCard title="Total Revenue" :value="`$${stats?.total_revenue}`" change="+19% from last month" :icon="DollarSign" />
      <StatCard title="Active Gateways" :value="stats?.active_gateways" change="+2 since last hour" :icon="Network" />
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div class="col-span-4">
        <RevenueChart />
      </div>
      <div class="col-span-3">
        <ActivityFeed :activity-feed="activityFeed" />
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div class="col-span-4">
        <UserGrowthChart />
      </div>
      <div class="col-span-3">
        <QuickActions />
        <SystemHealth class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useSuperAdminStore } from '@/stores/superAdmin'
import { storeToRefs } from 'pinia'
import StatCard from '@/components/dashboard/StatCard.vue'
import ActivityFeed from '@/components/dashboard/ActivityFeed.vue'
import QuickActions from '@/components/dashboard/QuickActions.vue'
import SystemHealth from '@/components/dashboard/SystemHealth.vue'
import RevenueChart from '@/components/dashboard/RevenueChart.vue'
import UserGrowthChart from '@/components/dashboard/UserGrowthChart.vue'
import { Users, CreditCard, DollarSign, Network } from 'lucide-vue-next'

const superAdminStore = useSuperAdminStore()
const { stats, activityFeed } = storeToRefs(superAdminStore)

onMounted(() => {
  superAdminStore.fetchDashboardStats()
  superAdminStore.fetchActivityFeed()
})
</script>
