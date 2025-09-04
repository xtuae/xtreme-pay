<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-center">Onboarding</h1>
      <div class="flex justify-between mb-4">
        <button @click="prevStep" :disabled="step === 1" class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50">Previous</button>
        <button @click="nextStep" :disabled="step === 4" class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:opacity-50">Next</button>
      </div>
      <div>
        <div v-if="step === 1">
          <h2 class="text-lg font-semibold">Step 1: Company Information</h2>
          <!-- Add company information form fields here -->
        </div>
        <div v-if="step === 2">
          <h2 class="text-lg font-semibold">Step 2: Document Upload</h2>
          <!-- Add document upload form fields here -->
        </div>
        <div v-if="step === 3">
          <h2 class="text-lg font-semibold">Step 3: Setup Fee Payment</h2>
          <!-- Add payment form fields here -->
        </div>
        <div v-if="step === 4">
          <h2 class="text-lg font-semibold">Step 4: Review & Submit</h2>
          <!-- Add review and submit fields here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const step = ref(1)

const nextStep = () => {
  if (step.value < 4) {
    step.value++
  }
}

const prevStep = () => {
  if (step.value > 1) {
    step.value--
  }
}
</script>
