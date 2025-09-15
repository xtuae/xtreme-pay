<template>
  <div class="p-4 bg-gray-100 dark:bg-gray-900">
    <h2 class="font-bold mb-2">Viewing: {{ document.name }}</h2>
    <iframe v-if="document?.fileUrl" :src="document.fileUrl" class="w-full h-64 border" />
    <p v-else>No document selected</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  document: Object,
})
</script>
