<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Link</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Created</TableHead>
        <TableHead>Clicks</TableHead>
        <TableHead>Conversions</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="link in paymentLinks" :key="link.id">
        <TableCell>{{ link.title }}</TableCell>
        <TableCell>{{ link.amount }} {{ link.currency }}</TableCell>
        <TableCell>{{ link.status }}</TableCell>
        <TableCell>{{ new Date(link.created_at).toLocaleDateString() }}</TableCell>
        <TableCell>{{ link.clicks }}</TableCell>
        <TableCell>{{ link.conversions }}</TableCell>
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

defineProps({
  paymentLinks: Array,
})
</script>
