<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Process Payment</h1>
      <p class="text-muted-foreground">Process a new payment.</p>
    </div>

    <PaymentForm />
  </div>
</template>

<script setup>
import PaymentForm from '../../components/payments/PaymentForm.vue'
</script>
