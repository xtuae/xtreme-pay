<template>
  <!-- Trigger button keeps the same look -->
  <div>
    <Button @click="open = true">Add New Gateway</Button>

    <!-- Basic modal overlay — minimal markup so it will always work.
         Styling uses tailwind utility classes to match your project look. -->
    <div v-if="open" class="fixed inset-0 z-50 flex items-start justify-center p-6">
      <div class="absolute inset-0 bg-black/40" @click="close"></div>

      <div class="relative w-full max-w-lg rounded-lg bg-white shadow-lg z-10">
        <div class="p-4 border-b">
          <h3 class="text-lg font-medium">Add New Gateway</h3>
        </div>

        <div class="p-4 space-y-3">
          <input v-model="form.name" placeholder="Gateway name" class="w-full border rounded px-3 py-2" />
          <div class="grid grid-cols-2 gap-2">
            <input v-model.number="form.users" type="number" placeholder="Users" class="w-full border rounded px-3 py-2" />
            <input v-model.number="form.transactions" type="number" placeholder="Transactions" class="w-full border rounded px-3 py-2" />
          </div>
          <select v-model="form.status" class="w-full border rounded px-3 py-2">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div class="p-4 flex justify-end gap-2 border-t">
          <Button variant="ghost" @click="close">Cancel</Button>
          <Button @click="save">Save</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { useGatewayStore } from '@/stores/gateway'

const open = ref(false)
const gatewayStore = useGatewayStore()

const form = ref({
  name: '',
  users: 0,
  transactions: 0,
  status: 'inactive',
})

function close() {
  open.value = false
  resetForm()
}

function resetForm() {
  form.value = { name: '', users: 0, transactions: 0, status: 'inactive' }
}

function save() {
  if (!form.value.name.trim()) {
    // simple UX guard
    alert('Please enter a gateway name.')
    return
  }
  gatewayStore.addGateway({ ...form.value })
  close()
}
</script>
