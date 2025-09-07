<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Product</TableHead>
        <TableHead>SKU</TableHead>
        <TableHead>Category</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="product in products" :key="product.id">
        <TableCell>{{ product.name }}</TableCell>
        <TableCell>{{ product.sku }}</TableCell>
        <TableCell>{{ product.category }}</TableCell>
        <TableCell>{{ product.price }} {{ product.currency }}</TableCell>
        <TableCell>{{ product.status }}</TableCell>
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
  products: Array,
})
</script>
