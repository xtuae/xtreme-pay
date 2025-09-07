<template>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue'

defineProps({
  products: Array,
})
</script>
