<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Payment Gateways</h1>
      <p class="text-muted-foreground">Manage your payment gateways.</p>
    </div>

    <div class="flex justify-end mb-4">
      <button class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Add Gateway</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <GatewayCard v-for="gateway in gateways" :key="gateway.id" :gateway="gateway" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GatewayCard from '../../components/payments/GatewayCard.vue'

const gateways = ref([
  { id: 1, name: 'Stripe', type: 'stripe', active: true },
  { id: 2, name: 'PayPal', type: 'paypal', active: false },
  { id: 3, name: 'Razorpay', type: 'razorpay', active: true },
])
</script>
