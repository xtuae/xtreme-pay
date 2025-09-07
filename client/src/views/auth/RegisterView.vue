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
        <div v-if="currentStep === 0">
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
        </div>

        <div v-if="currentStep === 1">
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
        </div>

        <div v-if="currentStep === 2">
          <FormField v-slot="{ componentField }" name="address">
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>

        <div v-if="currentStep === 3">
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
          <Button v-if="currentStep > 0" @click="prevStep">Back</Button>
          <Button v-if="currentStep < steps.length - 1" @click="nextStep">Next</Button>
          <Button v-if="currentStep === steps.length - 1" type="submit" :disabled="auth.isLoading">
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

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit(async (values) => {
  await auth.register(values)
  if (auth.isAuthenticated) {
    router.push('/')
  }
})

function nextStep() {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
</script>
