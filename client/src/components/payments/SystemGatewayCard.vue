<template>
  <Card class="p-6">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center space-x-3">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <CreditCard class="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 class="font-semibold">{{ gateway.display_name }}</h3>
          <p class="text-sm text-gray-500">{{ gateway.gateway_name }}</p>
        </div>
      </div>
      <Switch 
        :checked="gateway.is_enabled" 
        @update:checked="toggleGateway"
      />
    </div>
    
    <div class="grid grid-cols-3 gap-4 mb-4">
      <div class="text-center">
        <p class="text-2xl font-bold text-green-600">{{ stats.active_users }}</p>
        <p class="text-sm text-gray-500">Active Users</p>
      </div>
      <div class="text-center">
        <p class="text-2xl font-bold text-blue-600">{{ stats.total_transactions }}</p>
        <p class="text-sm text-gray-500">Transactions</p>
      </div>
      <div class="text-center">
        <p class="text-2xl font-bold text-purple-600">${{ stats.total_volume }}</p>
        <p class="text-sm text-gray-500">Volume</p>
      </div>
    </div>
    
    <div class="flex space-x-2">
      <Button variant="outline" size="sm" @click="configureGateway">
        <Settings class="w-4 h-4 mr-2" />
        Configure
      </Button>
      <Button variant="outline" size="sm" @click="viewUsers">
        <Users class="w-4 h-4 mr-2" />
        View Users
      </Button>
      <Button variant="outline" size="sm" @click="viewAnalytics">
        <BarChart class="w-4 h-4 mr-2" />
        Analytics
      </Button>
    </div>
  </Card>
</template>

<script setup>
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { CreditCard, Settings, Users, BarChart } from 'lucide-vue-next'

defineProps({
  gateway: Object,
  stats: Object,
})

const toggleGateway = () => {
  // Handle gateway toggle
}

const configureGateway = () => {
  // Handle gateway configuration
}

const viewUsers = () => {
  // Handle view users
}

const viewAnalytics = () => {
  // Handle view analytics
}
</script>
