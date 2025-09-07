<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Dashboard</h1>
      <QuickActionButtons />
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <RevenueCard title="Today's Revenue" :value="`$${merchant.stats?.today_revenue}`" change="+10% from yesterday" :icon="DollarSign" />
      <RevenueCard title="This Month's Revenue" :value="`$${merchant.stats?.month_revenue}`" change="+15% from last month" :icon="DollarSign" />
      <RevenueCard title="Total Transactions" :value="merchant.stats?.total_transactions" change="+20% from last month" :icon="CreditCard" />
      <RevenueCard title="Conversion Rate" :value="`${merchant.stats?.conversion_rate}%`" change="+5% from last month" :icon="TrendingUp" />
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div class="col-span-4">
        <RevenueChart />
      </div>
      <div class="col-span-3">
        <RecentTransactions :transactions="merchant.recentTransactions" />
      </div>
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div class="col-span-4">
        <TopProductsCard />
      </div>
      <div class="col-span-3">
        <GatewayStatusCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMerchantStore } from '@/stores/merchant'
import { storeToRefs } from 'pinia'
import RevenueCard from '@/components/merchant/RevenueCard.vue'
import QuickActionButtons from '@/components/merchant/QuickActionButtons.vue'
import RecentTransactions from '@/components/merchant/RecentTransactions.vue'
import GatewayStatusCard from '@/components/merchant/GatewayStatusCard.vue'
import RevenueChart from '@/components/merchant/RevenueChart.vue'
import TopProductsCard from '@/components/merchant/TopProductsCard.vue'
import { DollarSign, CreditCard, TrendingUp } from 'lucide-vue-next'

const merchant = useMerchantStore()
const { stats, recentTransactions } = storeToRefs(merchant)

onMounted(() => {
  merchant.fetchDashboardStats()
  merchant.fetchRecentTransactions()
})
</script>
