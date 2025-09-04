<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <div class="flex justify-between items-center">
      <h2 class="text-lg font-semibold text-gray-700">{{ gateway.name }}</h2>
      <span :class="gateway.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'" class="px-2 py-1 text-xs font-semibold rounded-full">
        {{ gateway.active ? 'Active' : 'Inactive' }}
      </span>
    </div>
    <p class="text-sm text-gray-500 mt-2">{{ gateway.type }}</p>
    <div class="mt-4 flex justify-end space-x-4">
      <button class="text-indigo-600 hover:text-indigo-900">Configure</button>
      <button class="text-red-600 hover:text-red-900">Delete</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  gateway: Object,
})
</script>
