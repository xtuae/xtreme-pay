<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">User Management</h1>
      <CreateUserModal />
    </div>

    <div class="flex items-center justify-between">
      <UserFilters @update:filters="filters = $event" />
      <BulkActions @bulk-action="handleBulkAction" />
    </div>

    <UserTable
      :users="filteredUsers"
      @update:selected="selectedUsers = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import UserTable from '@/components/super-admin/UserTable.vue'
import UserFilters from '@/components/super-admin/UserFilters.vue'
import BulkActions from '@/components/super-admin/BulkActions.vue'
import CreateUserModal from '@/components/super-admin/CreateUserModal.vue'

// Mock data
const users = ref([
  { id: 1, full_name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active', created_at: new Date(), last_sign_in_at: new Date(), avatar_url: '' },
  { id: 2, full_name: 'Jane Doe', email: 'jane@example.com', role: 'moderator', status: 'pending', created_at: new Date(), last_sign_in_at: new Date(), avatar_url: '' },
  { id: 3, full_name: 'Admin', email: 'admin@example.com', role: 'superadmin', status: 'suspended', created_at: new Date(), last_sign_in_at: new Date(), avatar_url: '' },
])

const filters = ref({ search: '', role: 'all', status: 'all' })
const selectedUsers = ref<number[]>([])

const filteredUsers = computed(() => {
  return users.value.filter(u => {
    return (
      (filters.value.search === '' ||
        u.full_name.toLowerCase().includes(filters.value.search.toLowerCase()) ||
        u.email.toLowerCase().includes(filters.value.search.toLowerCase())) &&
      (filters.value.role === 'all' || u.role === filters.value.role) &&
      (filters.value.status === 'all' || u.status === filters.value.status)
    )
  })
})

const handleBulkAction = (action: string) => {
  if (action === 'delete') {
    users.value = users.value.filter(u => !selectedUsers.value.includes(u.id))
  }
  if (action === 'export') {
    exportCSV()
  }
  if (action === 'activate') {
    users.value.forEach(u => {
      if (selectedUsers.value.includes(u.id)) u.status = 'active'
    })
  }
  if (action === 'suspend') {
    users.value.forEach(u => {
      if (selectedUsers.value.includes(u.id)) u.status = 'suspended'
    })
  }
}

const exportCSV = () => {
  const rows = users.value.map(u => ({
    Name: u.full_name,
    Email: u.email,
    Role: u.role,
    Status: u.status,
    Created: u.created_at.toLocaleDateString(),
    LastSignIn: u.last_sign_in_at.toLocaleDateString(),
  }))
  const csvContent =
    'data:text/csv;charset=utf-8,' +
    [Object.keys(rows[0]).join(','), ...rows.map(r => Object.values(r).join(','))].join('\n')

  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', 'users.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
