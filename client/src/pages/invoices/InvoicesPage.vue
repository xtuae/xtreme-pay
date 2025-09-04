<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Invoices</h1>
      <p class="text-muted-foreground">Manage your invoices.</p>
    </div>

    <div class="flex justify-end mb-4">
      <router-link to="/invoices/create" class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Create Invoice</router-link>
    </div>

    <InvoiceTable />
  </div>
</template>

<script setup>
import InvoiceTable from '../../components/invoices/InvoiceTable.vue'
</script>
