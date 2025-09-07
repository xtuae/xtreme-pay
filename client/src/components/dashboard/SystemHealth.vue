<template>
  <Card>
    <CardHeader>
      <CardTitle>System Health</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span>API Status</span>
          <span class="text-green-500">Operational</span>
        </div>
        <div class="flex items-center justify-between">
          <span>Database</span>
          <span class="text-green-500">Connected</span>
        </div>
        <div class="flex items-center justify-between">
          <span>Payment Gateways</span>
          <span class="text-green-500">All Active</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
</script>
