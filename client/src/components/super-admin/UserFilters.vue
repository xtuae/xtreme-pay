<template>
  <div class="flex items-center space-x-4">
    <Input v-model="search" placeholder="Search users..." class="max-w-sm" />

    <Select v-model="role">
      <SelectTrigger>
        <SelectValue placeholder="Filter by role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Roles</SelectItem>
        <SelectItem value="superadmin">Super Admin</SelectItem>
        <SelectItem value="moderator">Moderator</SelectItem>
        <SelectItem value="user">User</SelectItem>
      </SelectContent>
    </Select>

    <Select v-model="status">
      <SelectTrigger>
        <SelectValue placeholder="Filter by status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Statuses</SelectItem>
        <SelectItem value="pending">Pending</SelectItem>
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="suspended">Suspended</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const search = ref('')
const role = ref('all')
const status = ref('all')

const emit = defineEmits(['update:filters'])

watch([search, role, status], () => {
  emit('update:filters', { search: search.value, role: role.value, status: status.value })
})
</script>
