<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Profile</h1>
      <p class="text-muted-foreground">Manage your profile information.</p>
    </div>

    <ProfileSettings />
  </div>
</template>

<script setup>
import ProfileSettings from '../../components/settings/ProfileSettings.vue'
</script>
