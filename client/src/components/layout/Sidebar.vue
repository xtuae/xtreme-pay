<template>
  <aside class="w-64 bg-white shadow-md">
    <div class="p-6">
      <h1 class="text-2xl font-bold">Xtreme Pay</h1>
    </div>
    <nav class="mt-6">
      <router-link to="/" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
        <span class="mx-3">Dashboard</span>
      </router-link>
      <router-link to="/profile" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
        <span class="mx-3">Profile</span>
      </router-link>
      <router-link to="/transactions" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
        <span class="mx-3">Transactions</span>
      </router-link>
      <router-link to="/invoices" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
        <span class="mx-3">Invoices</span>
      </router-link>
      <router-link to="/gateways" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
        <span class="mx-3">Payment Gateways</span>
      </router-link>
      <router-link to="/tax-settings" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
        <span class="mx-3">Tax Settings</span>
      </router-link>
      <router-link to="/settings" class="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-200">
        <span class="mx-3">Settings</span>
      </router-link>
    </nav>
  </aside>
</template>
