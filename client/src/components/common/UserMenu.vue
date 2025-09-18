<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Avatar>
        <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="goToProfile">Profile</DropdownMenuItem>
      <DropdownMenuItem>Settings</DropdownMenuItem>
      <DropdownMenuItem v-if="auth.isSuperAdmin">Switch Account</DropdownMenuItem>
      <DropdownMenuItem @click="toggleTheme">Toggle Theme</DropdownMenuItem>
      <DropdownMenuItem>Help/Support</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="auth.logout">Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const auth = useAuthStore()
const router = useRouter()

function toggleTheme() {
  document.documentElement.classList.toggle('dark')
}

function goToProfile() {
  router.push('/merchant/profile')
}
</script>
