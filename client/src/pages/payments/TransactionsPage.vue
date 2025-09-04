<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Transactions</h1>
      <p class="text-muted-foreground">View and manage your transactions.</p>
    </div>

    <TransactionTable />
  </div>
</template>

<script setup>
import TransactionTable from '../../components/payments/TransactionTable.vue'
</script>
