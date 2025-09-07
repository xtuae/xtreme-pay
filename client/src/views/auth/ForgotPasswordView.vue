<template>
  <AuthLayout>
    <template #header>Forgot your password?</template>
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
        <Button type="submit" class="w-full" :disabled="auth.isLoading">
          <span v-if="auth.isLoading">Sending...</span>
          <span v-else>Send password reset email</span>
        </Button>
        <div v-if="successMessage" class="text-sm text-green-600">
          {{ successMessage }}
        </div>
        <div class="text-sm text-center">
          <router-link to="/login" class="font-medium text-blue-600 hover:text-blue-500">Back to login</router-link>
        </div>
      </div>
    </form>
  </AuthLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useAuthStore } from '@/stores/auth'
import { authService } from '@/services/auth.service'
import AuthLayout from '@/components/layouts/AuthLayout.vue'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const auth = useAuthStore()
const successMessage = ref('')

const formSchema = toTypedSchema(z.object({
  email: z.string().email(),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  await authService.resetPassword(values.email)
  successMessage.value = 'Password reset email sent. Please check your inbox.'
})
</script>
