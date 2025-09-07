<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Products</h1>
      <CreateProductModal />
    </div>
    <div class="flex items-center justify-between">
      <ProductFilters />
      <BulkProductActions />
    </div>
    <div class="flex items-center space-x-2">
      <Button :variant="view === 'grid' ? 'default' : 'outline'" @click="view = 'grid'">Grid</Button>
      <Button :variant="view === 'list' ? 'default' : 'outline'" @click="view = 'list'">List</Button>
    </div>
    <ProductGrid v-if="view === 'grid'" :products="products.products" />
    <ProductList v-else :products="products.products" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'
import ProductGrid from '@/components/merchant/ProductGrid.vue'
import ProductList from '@/components/merchant/ProductList.vue'
import ProductFilters from '@/components/merchant/ProductFilters.vue'
import BulkProductActions from '@/components/merchant/BulkProductActions.vue'
import CreateProductModal from '@/components/merchant/CreateProductModal.vue'
import { Button } from '@/components/ui/button'

const products = useProductsStore()
const view = ref('grid')

onMounted(() => {
  products.fetchProducts()
})
</script>
