<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>
          <input type="checkbox" :checked="allSelected" @change="toggleAll" />
        </TableHead>
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
        <TableCell>
          <input type="checkbox" :value="product.id" v-model="selectedProductsLocal" />
        </TableCell>
        <TableCell>{{ product.name }}</TableCell>
        <TableCell>{{ product.sku }}</TableCell>
        <TableCell>{{ product.category }}</TableCell>
        <TableCell>{{ product.price }} {{ product.currency }}</TableCell>
        <TableCell>{{ product.status }}</TableCell>
        <TableCell>
          <!-- Only existing Edit/Delete buttons -->
          <Button size="sm" @click="$emit('edit', product)">Edit</Button>
          <Button size="sm" variant="destructive" @click="$emit('delete', product.id)">Delete</Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import { ref, watch, computed, defineProps, defineEmits } from 'vue'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'

const props = defineProps({
  products: Array,
  selectedProducts: Array
})

const emit = defineEmits(['edit', 'delete', 'update:selectedProducts'])

const selectedProductsLocal = ref([...props.selectedProducts])

// Sync local selection with parent
watch(selectedProductsLocal, (val) => {
  emit('update:selectedProducts', val)
})

watch(
  () => props.selectedProducts,
  (val) => {
    selectedProductsLocal.value = [...val]
  }
)

// Select all checkbox
const allSelected = computed(() => props.products?.length && selectedProductsLocal.value.length === props.products.length)

function toggleAll(event) {
  if (event.target.checked) {
    selectedProductsLocal.value = props.products.map(p => p.id)
  } else {
    selectedProductsLocal.value = []
  }
}
</script>
