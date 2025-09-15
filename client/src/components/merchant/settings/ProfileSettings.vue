<template>
  <div class="space-y-2">
    <h2 class="text-xl font-semibold">Profile</h2>
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Phone:</strong> {{ user.phone }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ user: any }>()
</script>
