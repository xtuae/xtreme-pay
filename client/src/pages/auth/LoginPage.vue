<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <Card class="w-full max-w-md">
      <CardHeader class="space-y-1 text-center">
        <CardTitle class="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input v-model="email" id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="#" class="ml-auto inline-block text-sm underline">Forgot your password?</a>
            </div>
            <Input v-model="password" id="password" type="password" required />
          </div>
          <div class="flex items-center">
            <Checkbox id="remember-me" />
            <label for="remember-me" class="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Remember me
            </label>
          </div>
          <Button type="submit" class="w-full" :disabled="authStore.isLoading">
            <Loader2 v-if="authStore.isLoading" class="w-4 h-4 mr-2 animate-spin" />
            Login
          </Button>
        </form>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <router-link to="/signup" class="underline">Sign up</router-link>
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
import { Checkbox } from '@/components/ui/checkbox'
import { Loader2 } from 'lucide-vue-next'

const email = ref('hello@hmhlabz.com')
const password = ref('C@rdlm4283')
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  try {
    const user = await authStore.login({ email: email.value, password: password.value })
    if (user.user_metadata?.role === 'superadmin') {
      router.push('/super-admin')
    } else if (user.user_metadata?.role === 'admin') {
      router.push('/admin')
    } else {
      router.push('/')
    }
  } catch (error) {
    console.error('Login failed:', error)
    // Here you would typically show a toast notification
  }
}
</script>
