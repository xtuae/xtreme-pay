<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold text-gray-700">Users</h2>
      <div class="flex items-center space-x-4">
        <input type="text" placeholder="Search users..." class="px-3 py-2 border rounded-md" />
        <select class="px-3 py-2 border rounded-md">
          <option>Filter by status</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
          <option>Suspended</option>
        </select>
      </div>
    </div>
    <table class="w-full">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">User</th>
          <th class="py-2 px-4 border-b">Company</th>
          <th class="py-2 px-4 border-b">Registration Date</th>
          <th class="py-2 px-4 border-b">Status</th>
          <th class="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="py-2 px-4 border-b">{{ user.name }}</td>
          <td class="py-2 px-4 border-b">{{ user.company }}</td>
          <td class="py-2 px-4 border-b">{{ user.registrationDate }}</td>
          <td class="py-2 px-4 border-b">
            <span :class="statusClass(user.status)" class="px-2 py-1 text-xs font-semibold rounded-full">
              {{ user.status }}
            </span>
          </td>
          <td class="py-2 px-4 border-b">
            <button class="text-indigo-600 hover:text-indigo-900">Edit</button>
            <button class="ml-4 text-red-600 hover:text-red-900">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'John Doe', company: 'Acme Inc.', registrationDate: '2023-01-15', status: 'Approved' },
  { id: 2, name: 'Jane Doe', company: 'Stark Industries', registrationDate: '2023-02-20', status: 'Pending' },
  { id: 3, name: 'Peter Jones', company: 'Wayne Enterprises', registrationDate: '2023-03-10', status: 'Rejected' },
  { id: 4, name: 'Susan Smith', company: 'Oscorp', registrationDate: '2023-04-05', status: 'Suspended' },
])

const statusClass = (status) => {
  switch (status) {
    case 'Approved':
      return 'bg-green-100 text-green-800'
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'Rejected':
      return 'bg-red-100 text-red-800'
    case 'Suspended':
      return 'bg-gray-100 text-gray-800'
    default:
      return ''
  }
}
</script>
