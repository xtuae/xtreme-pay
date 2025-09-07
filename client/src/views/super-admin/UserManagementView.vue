<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">User Management</h1>
      <CreateUserModal />
    </div>
    <div class="flex items-center justify-between">
      <UserFilters />
      <BulkActions />
    </div>
    <UserTable :users="users" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserTable from '@/components/super-admin/UserTable.vue'
import UserFilters from '@/components/super-admin/UserFilters.vue'
import BulkActions from '@/components/super-admin/BulkActions.vue'
import CreateUserModal from '@/components/super-admin/CreateUserModal.vue'

const users = ref([
  // Mock data
  { id: 1, full_name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active', created_at: new Date(), last_sign_in_at: new Date(), avatar_url: '' },
  { id: 2, full_name: 'Jane Doe', email: 'jane@example.com', role: 'moderator', status: 'pending', created_at: new Date(), last_sign_in_at: new Date(), avatar_url: '' },
  { id: 3, full_name: 'Admin', email: 'admin@example.com', role: 'superadmin', status: 'suspended', created_at: new Date(), last_sign_in_at: new Date(), avatar_url: '' },
])
</script>
