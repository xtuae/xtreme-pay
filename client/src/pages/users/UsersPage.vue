<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">User Management</h1>
      <p class="text-muted-foreground">Manage all users in the system.</p>
    </div>

    <div class="flex justify-end mb-4">
      <button class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Create User</button>
    </div>

    <UserTable />
  </div>
</template>

<script setup>
import UserTable from '../../components/users/UserTable.vue'
</script>
