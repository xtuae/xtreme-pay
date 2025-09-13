<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <!-- Header Row -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold text-gray-700">Invoices</h2>

      <!-- Create Invoice Button -->
      <router-link
        to="/invoices/create"
        class="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
      >
        Create Invoice
      </router-link>
    </div>

    <!-- Search + Filter -->
    <div class="flex justify-between items-center mb-4">
      <div class="flex items-center space-x-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search invoices..."
          class="px-3 py-2 border rounded-md"
        />

        <select v-model="statusFilter" class="px-3 py-2 border rounded-md">
          <option value="">All statuses</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Overdue">Overdue</option>
          <option value="Draft">Draft</option>
        </select>
      </div>
    </div>

    <!-- Table -->
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
        <tr v-for="invoice in filteredInvoices" :key="invoice.id">
          <td class="py-2 px-4 border-b">{{ invoice.id }}</td>
          <td class="py-2 px-4 border-b">{{ invoice.customer }}</td>
          <td class="py-2 px-4 border-b">{{ invoice.amount }}</td>
          <td class="py-2 px-4 border-b">{{ invoice.dueDate }}</td>
          <td class="py-2 px-4 border-b">
            <span
              :class="statusClass(invoice.status)"
              class="px-2 py-1 text-xs font-semibold rounded-full"
            >
              {{ invoice.status }}
            </span>
          </td>
          <td class="py-2 px-4 border-b">
            <button class="text-indigo-600 hover:text-indigo-900">View</button>
            <button class="ml-4 text-blue-600 hover:text-blue-900">Send</button>
          </td>
        </tr>

        <tr v-if="filteredInvoices.length === 0">
          <td colspan="6" class="py-8 text-center text-muted-foreground">
            No invoices match your search / filter.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const invoices = ref([
  { id: 'INV-001', customer: 'Acme Inc.', amount: '$1,000.00', dueDate: '2023-05-15', status: 'Paid' },
  { id: 'INV-002', customer: 'Stark Industries', amount: '$2,500.00', dueDate: '2023-06-01', status: 'Pending' },
  { id: 'INV-003', customer: 'Wayne Enterprises', amount: '$500.00', dueDate: '2023-04-20', status: 'Overdue' },
  { id: 'INV-004', customer: 'Oscorp', amount: '$3,000.00', dueDate: '2023-05-10', status: 'Draft' },
])

const searchQuery = ref('')
const statusFilter = ref('')

const normalize = (s) => (s ?? '').toString().trim().toLowerCase()

const filteredInvoices = computed(() => {
  let list = invoices.value || []
  if (statusFilter.value && normalize(statusFilter.value) !== '') {
    const sf = normalize(statusFilter.value)
    list = list.filter(inv => normalize(inv.status) === sf)
  }
  if (searchQuery.value && searchQuery.value.trim() !== '') {
    const q = searchQuery.value.trim().toLowerCase()
    list = list.filter(inv => (inv.customer ?? '').toLowerCase().includes(q))
  }
  return list
})

const statusClass = (status) => {
  switch ((status ?? '').toString().trim().toLowerCase()) {
    case 'paid':
      return 'bg-green-100 text-green-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'overdue':
      return 'bg-red-100 text-red-800'
    case 'draft':
      return 'bg-gray-100 text-gray-800'
    default:
      return ''
  }
}
</script>
