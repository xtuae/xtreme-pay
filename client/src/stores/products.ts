import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref<any[]>([])
  const isLoading = ref(false)

  async function fetchProducts() {
    isLoading.value = true
    try {
      // Mock data
      products.value = [
        { id: 1, name: 'Product 1', price: 10, currency: 'USD', status: 'active', sku: 'P1', category: 'Category 1' },
        { id: 2, name: 'Product 2', price: 20, currency: 'USD', status: 'inactive', sku: 'P2', category: 'Category 2' },
      ]
    } finally {
      isLoading.value = false
    }
  }

  return {
    products,
    isLoading,
    fetchProducts,
  }
})
