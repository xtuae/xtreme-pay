<template>
  <AuthLayout>
    <template #header>Create your account</template>
    <div class="space-y-6">
      <div class="flex justify-between">
        <div v-for="(step, index) in steps" :key="index" class="text-center">
          <div :class="['mx-auto h-10 w-10 rounded-full flex items-center justify-center', { 'bg-blue-600 text-white': currentStep >= index, 'bg-gray-200 text-gray-600': currentStep < index }]">
            {{ index + 1 }}
          </div>
          <p class="mt-2 text-sm font-medium">{{ step.title }}</p>
        </div>
      </div>

      <form @submit.prevent="onSubmit">
        <div>
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
          <FormField v-slot="{ componentField }" name="confirmPassword">
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="businessName">
            <FormItem>
              <FormLabel>Business Name</FormLabel>
              <FormControl>
                <Input v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="businessType">
            <FormItem>
              <FormLabel>Business Type</FormLabel>
              <FormControl>
                <Input v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="businessPhone">
            <FormItem>
              <FormLabel>Business Phone</FormLabel>
              <FormControl>
                <Input v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="address">
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField name="documents">
            <FormItem>
              <FormLabel>Documents</FormLabel>
              <FormControl>
                <Input type="file" multiple />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <div class="flex justify-between mt-6">
          <Button type="submit" :disabled="auth.isLoading">
            <span v-if="auth.isLoading">Submitting...</span>
            <span v-else>Submit for Approval</span>
          </Button>
        </div>
      </form>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useAuthStore } from '@/stores/auth'
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
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()
const currentStep = ref(0)

const steps = [
  { title: 'Basic Information' },
  { title: 'Business Information' },
  { title: 'Address' },
  { title: 'Documents' },
]

const formSchema = toTypedSchema(z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
  businessName: z.string(),
  businessType: z.string(),
  businessPhone: z.string(),
  address: z.string(),
  documents: z.any(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
}))

const { handleSubmit, validate } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  console.log('onSubmit called with values:', values);
  await auth.register(values)
  console.log('waiting for approval from admin')
  // Optionally, redirect to a "pending approval" page or show a message on the current page
  // if (auth.isAuthenticated) {
  //   router.push('/')
  // }
})

// Removed nextStep and prevStep as multi-step is removed
</script>
