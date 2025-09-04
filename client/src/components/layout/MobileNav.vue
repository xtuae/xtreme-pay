<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden">
    <div class="flex justify-around">
      <router-link to="/" class="flex flex-col items-center justify-center w-full py-2 text-gray-700 hover:bg-gray-200">
        <span class="text-xs">Dashboard</span>
      </router-link>
      <router-link to="/transactions" class="flex flex-col items-center justify-center w-full py-2 text-gray-700 hover:bg-gray-200">
        <span class="text-xs">Transactions</span>
      </router-link>
      <router-link to="/invoices" class="flex flex-col items-center justify-center w-full py-2 text-gray-700 hover:bg-gray-200">
        <span class="text-xs">Invoices</span>
      </router-link>
      <router-link to="/settings" class="flex flex-col items-center justify-center w-full py-2 text-gray-700 hover:bg-gray-200">
        <span class="text-xs">Settings</span>
      </router-link>
    </div>
  </div>
</template>
