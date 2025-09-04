<template>
  <Dialog :open="isOpen" @update:open="$emit('update:open', $event)">
    <DialogContent class="max-w-2xl">
      <DialogHeader>
        <DialogTitle>Add Payment Gateway</DialogTitle>
        <DialogDescription>
          Add a new payment gateway type to the system
        </DialogDescription>
      </DialogHeader>
      
      <form @submit.prevent="submitGateway" class="space-y-6">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Label for="gateway_name">Gateway Identifier</Label>
            <Input 
              id="gateway_name" 
              v-model="form.gateway_name"
              placeholder="e.g., stripe, paypal"
            />
          </div>
          <div>
            <Label for="display_name">Display Name</Label>
            <Input 
              id="display_name" 
              v-model="form.display_name"
              placeholder="e.g., Stripe, PayPal"
            />
          </div>
        </div>
        
        <div>
          <Label>Required API Fields</Label>
          <div class="space-y-2 mt-2">
            <div v-for="(field, index) in form.required_fields" :key="index" class="flex gap-2">
              <Input 
                v-model="field.name" 
                placeholder="Field name (e.g., api_key)"
                class="flex-1"
              />
              <Input 
                v-model="field.label" 
                placeholder="Display label"
                class="flex-1"
              />
              <Button variant="outline" size="sm" @click="removeField(index)">
                <X class="w-4 h-4" />
              </Button>
            </div>
            <Button variant="outline" @click="addField">
              <Plus class="w-4 h-4 mr-2" />
              Add Field
            </Button>
          </div>
        </div>
        
        <div class="flex justify-end space-x-2">
          <Button variant="outline" @click="$emit('update:open', false)">
            Cancel
          </Button>
          <Button type="submit" :disabled="isLoading">
            <Loader2 v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" />
            Add Gateway
          </Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X, Plus, Loader2 } from 'lucide-vue-next'

const isOpen = ref(true)
const isLoading = ref(false)
const form = ref({
  gateway_name: '',
  display_name: '',
  required_fields: [{ name: '', label: '' }],
})

const addField = () => {
  form.value.required_fields.push({ name: '', label: '' })
}

const removeField = (index) => {
  form.value.required_fields.splice(index, 1)
}

const submitGateway = () => {
  // Handle form submission
}
</script>
