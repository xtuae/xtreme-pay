<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Dashboard</h1>
      <p class="text-muted-foreground">Welcome back!</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Total Revenue -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold text-gray-700">Total Revenue</h2>
        <p class="text-3xl font-bold mt-2">$45,231.89</p>
        <p class="text-sm text-green-500 mt-1">+20.1% from last month</p>
      </div>

      <!-- Subscriptions -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold text-gray-700">Subscriptions</h2>
        <p class="text-3xl font-bold mt-2">+2350</p>
        <p class="text-sm text-green-500 mt-1">+180.1% from last month</p>
      </div>

      <!-- Sales -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold text-gray-700">Sales</h2>
        <p class="text-3xl font-bold mt-2">+12,234</p>
        <p class="text-sm text-green-500 mt-1">+19% from last month</p>
      </div>

      <!-- Active Now -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold text-gray-700">Active Now</h2>
        <p class="text-3xl font-bold mt-2">+573</p>
        <p class="text-sm text-gray-500 mt-1">Online</p>
      </div>
    </div>
  </div>
</template>
