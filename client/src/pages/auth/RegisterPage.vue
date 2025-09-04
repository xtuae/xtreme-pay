<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <Card class="w-full max-w-md">
      <CardHeader class="space-y-1 text-center">
        <CardTitle class="text-2xl">Create an Account</CardTitle>
        <CardDescription>Enter your information to create an account.</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <form @submit.prevent="register" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-2">
              <Label for="firstName">First Name</Label>
              <Input v-model="firstName" id="firstName" required />
            </div>
            <div class="grid gap-2">
              <Label for="lastName">Last Name</Label>
              <Input v-model="lastName" id="lastName" required />
            </div>
          </div>
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input v-model="email" id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <Label for="password">Password</Label>
            <Input v-model="password" id="password" type="password" required />
          </div>
          <Button type="submit" class="w-full" :disabled="authStore.isLoading">
            <Loader2 v-if="authStore.isLoading" class="w-4 h-4 mr-2 animate-spin" />
            Create Account
          </Button>
        </form>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <router-link to="/login" class="underline">Log in</router-link>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-vue-next'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const register = async () => {
  try {
    await authStore.register({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value,
    })
    router.push('/')
  } catch (error) {
    console.error('Registration failed:', error)
    // Here you would typically show a toast notification
  }
}
</script>
