<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex items-center justify-between">
        <span>{{ gateway.name }}</span>
        <Switch :checked="gateway.status === 'active'" />
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>Users: {{ gateway.users }}</p>
      <p>Transactions: {{ gateway.transactions }}</p>
    </CardContent>
    <CardFooter class="space-x-2">
      <Button>Configure</Button>
      <Button variant="destructive">Delete</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

defineProps({
  gateway: Object,
})
</script>
