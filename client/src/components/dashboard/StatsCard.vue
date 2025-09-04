<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-lg font-semibold text-gray-700">{{ title }}</h2>
    <p class="text-3xl font-bold mt-2">{{ value }}</p>
    <p class="text-sm text-green-500 mt-1">{{ change }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: String,
  change: String,
})
</script>
