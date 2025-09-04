<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Onboarding</h1>
      <p class="text-muted-foreground">Complete the steps to set up your account.</p>
    </div>

    <OnboardingWizard />
  </div>
</template>

<script setup>
import OnboardingWizard from '../../components/users/OnboardingWizard.vue'
</script>
