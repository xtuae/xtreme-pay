<template>
  <div class="space-y-2">
    <h2 class="text-xl font-semibold">Business</h2>
    <p><strong>Business Name:</strong> {{ user.businessName }}</p>
    <p><strong>Business Address:</strong> {{ user.businessAddress }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ user: any }>()
</script>
