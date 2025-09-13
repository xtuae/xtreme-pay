<template>
  <div class="space-y-4">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Products</h1>
      <Button @click="openCreateModal = true">Add Product</Button>
    </div>

    <!-- Filters & Bulk Actions -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0 md:space-x-2">
      <!-- Search & Category Filter -->
      <div class="flex flex-1 space-x-2">
        <input
          type="text"
          placeholder="Search by product name..."
          v-model="searchQuery"
          class="border rounded p-2 flex-1"
        />
        <select v-model="selectedCategory" class="border rounded p-2">
          <option value="">All Categories</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>

      <!-- Bulk Actions -->
      <BulkProductActions
        :selectedProducts="selectedProducts"
        @activateSelected="activateSelectedProducts"
        @deactivateSelected="deactivateSelectedProducts"
        @deleteSelected="deleteSelectedProducts"
      />
    </div>

    <!-- View Toggle -->
    <div class="flex items-center space-x-2">
      <Button :variant="view === 'grid' ? 'default' : 'outline'" @click="view = 'grid'">Grid</Button>
      <Button :variant="view === 'list' ? 'default' : 'outline'" @click="view = 'list'">List</Button>
    </div>

    <!-- Product Display -->
    <ProductGrid
      v-if="view === 'grid'"
      :products="filteredProducts"
      v-model:selectedProducts="selectedProducts"
      @edit="openEditProduct"
      @delete="deleteProduct"
    />
    <ProductList
      v-else
      :products="filteredProducts"
      v-model:selectedProducts="selectedProducts"
      @edit="openEditProduct"
      @delete="deleteProduct"
    />

    <!-- Create/Edit Modal -->
    <Dialog v-model:open="openCreateModal">
      <DialogContent class="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{{ editProductData ? 'Edit Product' : 'Add New Product' }}</DialogTitle>
        </DialogHeader>

        <form @submit.prevent="editProductData ? updateProduct() : createProduct()" class="space-y-4 mt-4">
          <!-- Product Name -->
          <div>
            <label class="block text-sm font-medium mb-1">Product Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Enter your product name"
              class="w-full border rounded p-2"
              required
            />
          </div>

          <!-- Product ID -->
          <div>
            <label class="block text-sm font-medium mb-1">Product ID</label>
            <input
              v-model="form.id"
              type="text"
              placeholder="Enter your product Id"
              class="w-full border rounded p-2"
              required
            />
          </div>

          <!-- Price -->
          <div>
            <label class="block text-sm font-medium mb-1">Price</label>
            <input
              v-model.number="form.price"
              type="number"
              min="0"
              class="w-full border rounded p-2"
              required
            />
          </div>

          <!-- Product Code -->
          <div>
            <label class="block text-sm font-medium mb-1">Product Code</label>
            <input
              v-model="form.code"
              type="text"
              placeholder="Enter your product code"
              class="w-full border rounded p-2"
            />
          </div>

          <!-- Product Description -->
          <div>
            <label class="block text-sm font-medium mb-1">Product Description</label>
            <textarea
              v-model="form.description"
              placeholder="Enter your product detailed description here..."
              class="w-full border rounded p-2"
              rows="3"
            ></textarea>
          </div>

          <!-- Actions -->
          <div class="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" @click="closeModal">Close</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'
import ProductGrid from '@/components/merchant/ProductGrid.vue'
import ProductList from '@/components/merchant/ProductList.vue'
import BulkProductActions from '@/components/merchant/BulkProductActions.vue'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const products = useProductsStore()
const view = ref('grid')
const searchQuery = ref('')
const selectedCategory = ref('')
const openCreateModal = ref(false)
const editProductData = ref(null)
const selectedProducts = ref<number[]>([])

// Form state
const form = ref({
  id: '',
  name: '',
  price: 0,
  code: '',
  description: '',
  status: 'Inactive',
  category: 'General',
})

// Fetch products
onMounted(() => {
  products.fetchProducts()
})

// Filtered products
const filteredProducts = computed(() => {
  let result = products.products
  if (searchQuery.value)
    result = result.filter(p =>
      p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  if (selectedCategory.value)
    result = result.filter(p => p.category === selectedCategory.value)
  return result
})

// Categories for filter
const categories = computed(() => [...new Set(products.products.map(p => p.category))])

// Reset form
function resetForm() {
  form.value = {
    id: '',
    name: '',
    price: 0,
    code: '',
    description: '',
    status: 'Inactive',
    category: 'General',
  }
}

// Close modal
function closeModal() {
  resetForm()
  editProductData.value = null
  openCreateModal.value = false
}

// ----- Product Actions -----
function createProduct() {
  products.createProduct({ ...form.value })
  closeModal()
}

function openEditProduct(product) {
  form.value = { ...product }
  editProductData.value = product
  openCreateModal.value = true
}

function updateProduct() {
  products.updateProduct({ ...form.value })
  closeModal()
}

function deleteProduct(productId: number) {
  if (!confirm('Delete this product?')) return
  products.deleteProduct(productId)
  selectedProducts.value = selectedProducts.value.filter(id => id !== productId)
}

// ----- Bulk Actions -----
function activateSelectedProducts() {
  if (!selectedProducts.value.length) return
  selectedProducts.value.forEach(id => {
    const product = products.products.find(p => p.id === id)
    if (product) product.status = 'Active'
  })
}

function deactivateSelectedProducts() {
  if (!selectedProducts.value.length) return
  selectedProducts.value.forEach(id => {
    const product = products.products.find(p => p.id === id)
    if (product) product.status = 'Inactive'
  })
}

function deleteSelectedProducts() {
  if (!selectedProducts.value.length) return
  if (!confirm('Delete selected products?')) return
  selectedProducts.value.forEach(id => products.deleteProduct(id))
  selectedProducts.value = []
}
</script>
