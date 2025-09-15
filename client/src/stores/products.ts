import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref<any[]>([])
  const isLoading = ref(false)

  // Fetch mock products
  async function fetchProducts() {
    isLoading.value = true
    try {
      // Mock data
      products.value = [
        { id: 1, name: 'Product 1', price: 10, currency: 'USD', status: 'Active', sku: 'P1', category: 'Category 1', description: 'Demo product 1' },
        { id: 2, name: 'Product 2', price: 20, currency: 'USD', status: 'Inactive', sku: 'P2', category: 'Category 2', description: 'Demo product 2' },
      ]
    } finally {
      isLoading.value = false
    }
  }

  // Create new product
  function createProduct(product: any) {
    const newId = products.value.length ? Math.max(...products.value.map(p => p.id)) + 1 : 1
    products.value.push({
      ...product,
      id: newId,
      status: product.status || 'Inactive',
    })
  }

  // Update product
  function updateProduct(updated: any) {
    const index = products.value.findIndex(p => p.id === updated.id)
    if (index !== -1) {
      products.value[index] = { ...updated }
    }
  }

  // Delete product
  function deleteProduct(productId: number) {
    products.value = products.value.filter(p => p.id !== productId)
  }

  // Update status
  function updateProductStatus(productId: number, status: string) {
    const product = products.value.find(p => p.id === productId)
    if (product) {
      product.status = status
    }
  }

  return {
    products,
    isLoading,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    updateProductStatus,
  }
})
