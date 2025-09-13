<template>
  <Dialog>
    <DialogTrigger>
      <Button>Create User</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create New User</DialogTitle>
      </DialogHeader>

      <form class="space-y-4" @submit.prevent="handleSubmit">
        <Input v-model="form.full_name" placeholder="Full Name" required />
        <Input v-model="form.email" placeholder="Email" type="email" required />

        <Select v-model="form.role">
          <SelectTrigger>
            <SelectValue placeholder="Select Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user">User</SelectItem>
            <SelectItem value="moderator">Moderator</SelectItem>
            <SelectItem value="superadmin">Super Admin</SelectItem>
          </SelectContent>
        </Select>

        <Select v-model="form.status">
          <SelectTrigger>
            <SelectValue placeholder="Select Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" class="w-full">Save</Button>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const emit = defineEmits(["create"])

const form = ref({
  full_name: "",
  email: "",
  role: "user",
  status: "pending",
})

const handleSubmit = () => {
  const newUser = {
    id: Date.now(),
    ...form.value,
    created_at: new Date(),
    last_sign_in_at: new Date(),
    avatar_url: "",
  }
  emit("create", newUser)

  // reset form
  form.value = {
    full_name: "",
    email: "",
    role: "user",
    status: "pending",
  }
}
</script>
