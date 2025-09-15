<template>
  <div class="space-y-4">
    <!-- Stats Section -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard title="Total Users" :value="stats?.total_users" change="+20.1% from last month" :icon="Users" />
      <StatCard title="Total Transactions" :value="stats?.total_transactions" change="+180.1% from last month" :icon="CreditCard" />
      <StatCard title="Total Revenue" :value="`$${stats?.total_revenue}`" change="+19% from last month" :icon="DollarSign" />
      <StatCard title="Active Gateways" :value="stats?.active_gateways" change="+2 since last hour" :icon="Network" />
    </div>

    <!-- Revenue & Activity -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div class="col-span-4">
        <RevenueChart :chart-data="revenueData" />
      </div>
      <div class="col-span-3">
        <ActivityFeed :activity-feed="activityFeed" />
      </div>
    </div>

    <!-- User Growth & Quick Actions -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div class="col-span-4">
        <UserGrowthChart :chart-data="userGrowthData" />
      </div>
      <div class="col-span-3">
        <QuickActions @action="handleAction" />
        <SystemHealth class="mt-4" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Users, CreditCard, DollarSign, Network } from 'lucide-vue-next'
import StatCard from '@/components/dashboard/StatCard.vue'
import ActivityFeed from '@/components/dashboard/ActivityFeed.vue'
import QuickActions from '@/components/dashboard/QuickActions.vue'
import SystemHealth from '@/components/dashboard/SystemHealth.vue'
import RevenueChart from '@/components/dashboard/RevenueChart.vue'
import UserGrowthChart from '@/components/dashboard/UserGrowthChart.vue'

// 📊 Stats
const stats = ref({
  total_users: 1245,
  total_transactions: 8912,
  total_revenue: 45000,
  active_gateways: 8,
})

// 📊 Revenue Data
const revenueData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [5000, 7000, 8500, 10000, 9000, 12000],
      borderColor: '#4ade80',
      backgroundColor: 'rgba(74, 222, 128, 0.2)',
      fill: true,
    },
  ],
})

// 📊 User Growth Data
const userGrowthData = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Users',
      data: [200, 400, 600, 900, 1200, 1500],
      borderColor: '#60a5fa',
      backgroundColor: 'rgba(96, 165, 250, 0.2)',
      fill: true,
    },
  ],
})

// 📜 Activity Feed
const activityFeed = ref([
  { id: 1, user: { email: 'john@example.com', avatar_url: '' }, action: 'User Created', details: 'John Doe created an account', created_at: new Date() },
  { id: 2, user: { email: 'admin@example.com', avatar_url: '' }, action: 'Gateway Activated', details: 'Stripe Gateway Activated', created_at: new Date() },
])

// QuickActions
function handleAction(action: string) {
  alert(`Clicked on ${action}`)
}

onMounted(() => {
  console.log('Dashboard Loaded ✅')
})
</script>
