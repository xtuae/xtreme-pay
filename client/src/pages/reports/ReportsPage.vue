<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Reports</h1>
      <p class="text-muted-foreground">View and export reports.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold text-gray-700">Transaction Report</h2>
        <p class="text-sm text-gray-500 mt-2">Export a detailed report of all transactions.</p>
        <div class="mt-4">
          <button class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Export CSV</button>
          <button class="ml-4 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Export PDF</button>
        </div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold text-gray-700">Invoice Report</h2>
        <p class="text-sm text-gray-500 mt-2">Export a detailed report of all invoices.</p>
        <div class="mt-4">
          <button class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Export CSV</button>
          <button class="ml-4 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Export PDF</button>
        </div>
      </div>
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-lg font-semibold text-gray-700">User Report</h2>
        <p class="text-sm text-gray-500 mt-2">Export a detailed report of all users.</p>
        <div class="mt-4">
          <button class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Export CSV</button>
          <button class="ml-4 px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Export PDF</button>
        </div>
      </div>
    </div>
  </div>
</template>
