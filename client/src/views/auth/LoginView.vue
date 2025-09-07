<template>
  <AuthLayout>
    <template #header>Sign in to your account</template>
    <form @submit.prevent="onSubmit">
      <div class="space-y-6">
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="m@example.com" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <Checkbox id="remember-me" />
            <label for="remember-me" class="block ml-2 text-sm text-gray-900 dark:text-gray-300">Remember me</label>
          </div>
          <div class="text-sm">
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
          </div>
        </div>
        <Button type="submit" class="w-full" :disabled="auth.isLoading">
          <span v-if="auth.isLoading">Signing in...</span>
          <span v-else>Sign in</span>
        </Button>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useAuthStore } from '@/stores/auth'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const formSchema = toTypedSchema(z.object({
  email: z.string().email(),
  password: z.string().min(6),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  await auth.login(values)
  if (auth.isAuthenticated) {
    router.push('/')
  }
})
</script>
