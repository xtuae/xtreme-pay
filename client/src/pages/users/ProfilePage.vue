<template>
  <Card>
    <CardHeader>
      <CardTitle>Profile Settings</CardTitle>
      <CardDescription>Manage your profile information.</CardDescription>
    </CardHeader>

    <CardContent class="space-y-4">
      <!-- First Name -->
      <div class="grid gap-2">
        <Label for="firstName">First Name</Label>
        <Input id="firstName" v-model="profile.firstName" :disabled="!isEditing" />
      </div>

      <!-- Last Name -->
      <div class="grid gap-2">
        <Label for="lastName">Last Name</Label>
        <Input id="lastName" v-model="profile.lastName" :disabled="!isEditing" />
      </div>

      <!-- Email -->
      <div class="grid gap-2">
        <Label for="email">Email</Label>
        <Input id="email" type="email" v-model="profile.email" :disabled="!isEditing" />
      </div>
    </CardContent>

    <Separator />

    <CardFooter class="flex items-center gap-4">
      <!-- Edit Button -->
      <Button v-if="!isEditing" @click="editProfile" variant="default">
        Edit
      </Button>

      <!-- Save Button -->
      <Button v-if="isEditing" @click="saveProfile" variant="default">
        Save Changes
      </Button>

      <!-- Confirmation Message -->
      <p v-if="savedMessage" class="text-sm text-green-600 font-medium">
        {{ savedMessage }}
      </p>
    </CardFooter>
  </Card>
</template>

<script setup>
import { ref, reactive } from 'vue'

// shadcn-vue components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// State
const isEditing = ref(false)
const savedMessage = ref('')

const profile = reactive({
  firstName: 'Super',
  lastName: 'Admin',
  email: 'hello@hmhlabz.com'
})

// Methods
function editProfile() {
  isEditing.value = true
  savedMessage.value = ''
}

function saveProfile() {
  isEditing.value = false
  savedMessage.value = 'Your changes are saved.'
  // Here you can call API to persist changes if needed
}
</script>
