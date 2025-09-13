<template>
  <Dialog v-model:open="open">
    <!-- Trigger Button -->
    <DialogTrigger as-child>
      <Button>Add Product</Button>
    </DialogTrigger>

    <!-- Dialog Content -->
    <DialogContent class="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>Add New Product</DialogTitle>
      </DialogHeader>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4 mt-4">
        <!-- Product Name -->
        <div>
          <label class="block text-sm font-medium mb-1">Product Name</label>
          <input
            v-model="product.name"
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
            v-model="product.id"
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
            v-model.number="product.price"
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
            v-model="product.code"
            type="text"
            placeholder="Enter your product code"
            class="w-full border rounded p-2"
          />
        </div>

        <!-- Product Description -->
        <div>
          <label class="block text-sm font-medium mb-1">Product Description</label>
          <textarea
            v-model="product.description"
            placeholder="Enter your product detailed description here..."
            class="w-full border rounded p-2"
            rows="3"
          ></textarea>
        </div>

        <!-- Actions -->
        <div class="flex justify-end space-x-2 pt-4">
          <Button type="button" variant="outline" @click="open = false">Close</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

// Local state
const open = ref(false)

const product = ref({
  id: '',
  name: '',
  price: 0,
  code: '',
  description: ''
})

// Emit save event
function handleSubmit() {
  console.log('New product:', product.value)
  // here you can emit or call Pinia store
  // emit('save', { ...product.value })

  // reset form
  product.value = { id: '', name: '', price: 0, code: '', description: '' }
  open.value = false
}
</script>
