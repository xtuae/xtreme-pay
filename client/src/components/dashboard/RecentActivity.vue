<template>
  <div class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h2>
    <ul>
      <li v-for="item in activity" :key="item.id" class="flex items-center justify-between py-2 border-b">
        <div>
          <p class="font-semibold">{{ item.description }}</p>
          <p class="text-sm text-gray-500">{{ item.user }}</p>
        </div>
        <div class="text-right">
          <p class="font-semibold">{{ item.amount }}</p>
          <p class="text-sm text-gray-500">{{ item.time }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activity = ref([
  { id: 1, description: 'New user registered', user: 'john.doe@example.com', amount: '', time: '2 minutes ago' },
  { id: 2, description: 'Payment received', user: 'jane.doe@example.com', amount: '$1,200.00', time: '5 minutes ago' },
  { id: 3, description: 'New invoice created', user: 'jane.doe@example.com', amount: '$500.00', time: '10 minutes ago' },
  { id: 4, description: 'User approved', user: 'peter.jones@example.com', amount: '', time: '30 minutes ago' },
])
</script>
