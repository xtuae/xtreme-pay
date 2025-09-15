<template>
  <div class="flex space-x-2">
    <!-- View -->
    <Button variant="ghost" size="icon" @click="openView = true">
      <Eye class="w-4 h-4" />
    </Button>

    <!-- Edit -->
    <Button variant="ghost" size="icon" @click="openEdit = true">
      <Pencil class="w-4 h-4" />
    </Button>

    <!-- Toggle Status -->
    <Button variant="ghost" size="icon" @click="toggleStatus">
      <ShieldCheck class="w-4 h-4 text-green-500" v-if="user.status !== 'active'" />
      <ShieldX class="w-4 h-4 text-red-500" v-else />
    </Button>

    <!-- View Modal -->
    <Dialog v-model:open="openView">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>
        <p><b>Name:</b> {{ user.full_name }}</p>
        <p><b>Email:</b> {{ user.email }}</p>
        <p><b>Role:</b> {{ user.role }}</p>
        <p><b>Status:</b> {{ user.status }}</p>
      </DialogContent>
    </Dialog>

    <!-- Edit Modal -->
    <Dialog v-model:open="openEdit">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        <div class="space-y-4">
          <Input v-model="form.full_name" placeholder="Full Name" />
          <Input v-model="form.email" placeholder="Email" />

          <Select v-model="form.role">
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="moderator">Moderator</SelectItem>
              <SelectItem value="superadmin">Super Admin</SelectItem>
            </SelectContent>
          </Select>

          <Select v-model="form.status">
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="suspended">Suspended</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <DialogFooter>
          <Button @click="saveEdit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Eye, Pencil, ShieldCheck, ShieldX } from 'lucide-vue-next'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const props = defineProps<{ user: any }>()
const emit = defineEmits(['update:user', 'toggle:status'])

const openView = ref(false)
const openEdit = ref(false)

const form = ref({ ...props.user })

const saveEdit = () => {
  emit('update:user', { ...form.value, id: props.user.id })
  openEdit.value = false
}

const toggleStatus = () => {
  emit('toggle:status', props.user.id)
}
</script>
