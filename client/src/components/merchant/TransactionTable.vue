<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Transaction ID</TableHead>
        <TableHead>Customer</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Date</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="transaction in transactions" :key="transaction.id">
        <TableCell>{{ transaction.id }}</TableCell>
        <TableCell>{{ transaction.customer_name }}</TableCell>
        <TableCell>{{ transaction.amount }} {{ transaction.currency }}</TableCell>
        <TableCell>
          <TransactionStatusBadge :status="transaction.status" />
        </TableCell>
        <TableCell>{{ new Date(transaction.created_at).toLocaleString() }}</TableCell>
        <TableCell>
          <!-- Actions will go here -->
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import TransactionStatusBadge from './TransactionStatusBadge.vue'

defineProps({
  transactions: Array,
})
</script>
