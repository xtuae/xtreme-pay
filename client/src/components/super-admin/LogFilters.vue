<template>
  <div class="flex space-x-2">
    <input
      type="text"
      placeholder="Search logs..."
      v-model="localFilters.search"
      class="border rounded px-2 py-1"
      @input="update"
    />
    <select v-model="localFilters.status" class="border rounded px-2 py-1" @change="update">
      <option value="all">All Status</option>
      <option value="success">Success</option>
      <option value="failed">Failed</option>
      <option value="pending">Pending</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const emit = defineEmits(['update:filters'])

const localFilters = reactive({
  search: '',
  status: 'all'
})

const update = () => {
  emit('update:filters', { ...localFilters })
}
</script>
