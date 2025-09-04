<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold text-gray-700">Transactions</h2>
      <div class="flex items-center space-x-4">
        <input type="text" placeholder="Search transactions..." class="px-3 py-2 border rounded-md" />
        <select class="px-3 py-2 border rounded-md">
          <option>Filter by status</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Failed</option>
          <option>Refunded</option>
        </select>
      </div>
    </div>
    <table class="w-full">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Transaction ID</th>
          <th class="py-2 px-4 border-b">Amount</th>
          <th class="py-2 px-4 border-b">Date</th>
          <th class="py-2 px-4 border-b">Status</th>
          <th class="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td class="py-2 px-4 border-b">{{ transaction.id }}</td>
          <td class="py-2 px-4 border-b">{{ transaction.amount }}</td>
          <td class="py-2 px-4 border-b">{{ transaction.date }}</td>
          <td class="py-2 px-4 border-b">
            <span :class="statusClass(transaction.status)" class="px-2 py-1 text-xs font-semibold rounded-full">
              {{ transaction.status }}
            </span>
          </td>
          <td class="py-2 px-4 border-b">
            <button class="text-indigo-600 hover:text-indigo-900">Details</button>
            <button class="ml-4 text-blue-600 hover:text-blue-900">Refund</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const transactions = ref([
  { id: 'txn_123', amount: '$100.00', date: '2023-05-01', status: 'Completed' },
  { id: 'txn_124', amount: '$250.00', date: '2023-05-02', status: 'Pending' },
  { id: 'txn_125', amount: '$50.00', date: '2023-05-03', status: 'Failed' },
  { id: 'txn_126', amount: '$300.00', date: '2023-05-04', status: 'Refunded' },
])

const statusClass = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-100 text-green-800'
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'Failed':
      return 'bg-red-100 text-red-800'
    case 'Refunded':
      return 'bg-blue-100 text-blue-800'
    default:
      return ''
  }
}
</script>
