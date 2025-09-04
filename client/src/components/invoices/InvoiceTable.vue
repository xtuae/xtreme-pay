<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold text-gray-700">Invoices</h2>
      <div class="flex items-center space-x-4">
        <input type="text" placeholder="Search invoices..." class="px-3 py-2 border rounded-md" />
        <select class="px-3 py-2 border rounded-md">
          <option>Filter by status</option>
          <option>Paid</option>
          <option>Pending</option>
          <option>Overdue</option>
          <option>Draft</option>
        </select>
      </div>
    </div>
    <table class="w-full">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Invoice #</th>
          <th class="py-2 px-4 border-b">Customer</th>
          <th class="py-2 px-4 border-b">Amount</th>
          <th class="py-2 px-4 border-b">Due Date</th>
          <th class="py-2 px-4 border-b">Status</th>
          <th class="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices" :key="invoice.id">
          <td class="py-2 px-4 border-b">{{ invoice.id }}</td>
          <td class="py-2 px-4 border-b">{{ invoice.customer }}</td>
          <td class="py-2 px-4 border-b">{{ invoice.amount }}</td>
          <td class="py-2 px-4 border-b">{{ invoice.dueDate }}</td>
          <td class="py-2 px-4 border-b">
            <span :class="statusClass(invoice.status)" class="px-2 py-1 text-xs font-semibold rounded-full">
              {{ invoice.status }}
            </span>
          </td>
          <td class="py-2 px-4 border-b">
            <button class="text-indigo-600 hover:text-indigo-900">View</button>
            <button class="ml-4 text-blue-600 hover:text-blue-900">Send</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const invoices = ref([
  { id: 'INV-001', customer: 'Acme Inc.', amount: '$1,000.00', dueDate: '2023-05-15', status: 'Paid' },
  { id: 'INV-002', customer: 'Stark Industries', amount: '$2,500.00', dueDate: '2023-06-01', status: 'Pending' },
  { id: 'INV-003', customer: 'Wayne Enterprises', amount: '$500.00', dueDate: '2023-04-20', status: 'Overdue' },
  { id: 'INV-004', customer: 'Oscorp', amount: '$3,000.00', dueDate: '2023-05-10', status: 'Draft' },
])

const statusClass = (status) => {
  switch (status) {
    case 'Paid':
      return 'bg-green-100 text-green-800'
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'Overdue':
      return 'bg-red-100 text-red-800'
    case 'Draft':
      return 'bg-gray-100 text-gray-800'
    default:
      return ''
  }
}
</script>
