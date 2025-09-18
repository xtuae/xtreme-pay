<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Moderator Dashboard</h1>
      <p class="text-muted-foreground">Overview of user activity and approvals.</p>
    </div>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <StatCard title="Total Users" :value="superAdminStore.totalUsers?.toString() || '0'" change="" :icon="Users" />
      <StatCard title="Payments Done" :value="`$${superAdminStore.totalPayments?.toFixed(2) || '0.00'}`" change="" :icon="CreditCard" />
      <StatCard title="Transactions" :value="superAdminStore.totalTransactions?.toString() || '0'" change="" :icon="DollarSign" />
      <StatCard title="Invoices Sent" :value="superAdminStore.totalInvoices?.toString() || '0'" change="" :icon="FileText" />
    </div>

    <UserManagement />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import UserManagement from '@/components/dashboard/UserManagement.vue'
import StatCard from '@/components/dashboard/StatCard.vue'
import { Users, CreditCard, DollarSign, FileText } from 'lucide-vue-next'
import { useSuperAdminStore } from '@/stores/superAdmin'

const superAdminStore = useSuperAdminStore()

onMounted(() => {
  superAdminStore.fetchTotalUsers()
  superAdminStore.fetchTotalPayments()
  superAdminStore.fetchTotalTransactions()
  superAdminStore.fetchTotalInvoices()
})
</script>
