<template>
  <Card>
    <CardHeader>
      <CardTitle>Recent Transactions</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="transaction in transactions" :key="transaction.id">
            <TableCell>{{ transaction.customer_name }}</TableCell>
            <TableCell>{{ transaction.amount }}</TableCell>
            <TableCell>{{ transaction.status }}</TableCell>
            <TableCell>{{ new Date(transaction.created_at).toLocaleDateString() }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

defineProps({
  transactions: Array,
})
</script>
