<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Transactions</h1>
    </div>
    <div class="flex items-center justify-between">
      <TransactionFilters />
    </div>
    <TransactionTable :transactions="transactions.transactions" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useTransactionsStore } from '@/stores/transactions'
import TransactionTable from '@/components/merchant/TransactionTable.vue'
import TransactionFilters from '@/components/merchant/TransactionFilters.vue'

const transactions = useTransactionsStore()

onMounted(() => {
  transactions.fetchTransactions()
})
</script>
