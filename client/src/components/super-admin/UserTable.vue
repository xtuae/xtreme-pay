<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>
          <input type="checkbox" @change="toggleAll" v-model="allSelected" />
        </TableHead>
        <TableHead>User</TableHead>
        <TableHead>Role</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Registration Date</TableHead>
        <TableHead>Last Activity</TableHead>
        <TableHead>Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="user in users" :key="user.id">
        <TableCell>
          <input type="checkbox" v-model="selected" :value="user.id" />
        </TableCell>
        <TableCell>
          <div class="flex items-center">
            <Avatar>
              <AvatarImage :src="user.avatar_url" />
              <AvatarFallback>{{ user.email.charAt(0).toUpperCase() }}</AvatarFallback>
            </Avatar>
            <div class="ml-4">
              <div class="font-medium">{{ user.full_name }}</div>
              <div class="text-sm text-muted-foreground">{{ user.email }}</div>
            </div>
          </div>
        </TableCell>
        <TableCell><RoleBadge :role="user.role" /></TableCell>
        <TableCell><UserStatusBadge :status="user.status" /></TableCell>
        <TableCell>{{ new Date(user.created_at).toLocaleDateString() }}</TableCell>
        <TableCell>{{ new Date(user.last_sign_in_at).toLocaleDateString() }}</TableCell>
        <TableCell>
          <!-- 🔹 Forward UserActions events -->
          <UserActions 
            :user="user"
            @view="$emit('view', user)"
            @edit="$emit('edit', user)"
            @delete="$emit('delete', user.id)"
            @status-change="$emit('status-change', user.id)"
          />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import RoleBadge from './RoleBadge.vue'
import UserStatusBadge from './UserStatusBadge.vue'
import UserActions from './UserActions.vue'
import { ref, watch } from 'vue'

const props = defineProps<{ users: any[] }>()
const emit = defineEmits(['update:selected', 'view', 'edit', 'delete', 'status-change'])

const selected = ref<number[]>([])
const allSelected = ref(false)

const toggleAll = () => {
  if (allSelected.value) {
    selected.value = props.users.map(u => u.id)
  } else {
    selected.value = []
  }
}

watch(selected, () => emit('update:selected', selected.value))
</script>
