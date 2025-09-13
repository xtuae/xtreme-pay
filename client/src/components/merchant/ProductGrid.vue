<template>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <div
      v-for="product in products"
      :key="product.id"
      class="border p-4 rounded relative"
    >
      <!-- Checkbox for selection -->
      <input
        type="checkbox"
        class="absolute top-2 left-2"
        :value="product.id"
        v-model="selectedProductsLocal"
      />

      <!-- Product card content -->
      <ProductCard :product="product" />

      <!-- Actions (only existing buttons) -->
      <div class="flex space-x-2 mt-2">
        <Button size="sm" @click="$emit('edit', product)">Edit</Button>
        <Button size="sm" variant="destructive" @click="$emit('delete', product.id)">Delete</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import ProductCard from './ProductCard.vue'
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
</script>
