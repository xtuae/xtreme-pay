<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ gateway.name }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Status: {{ gateway.status }}</p>
      <p v-if="gateway.last_transaction">Last Transaction: {{ new Date(gateway.last_transaction).toLocaleDateString() }}</p>
    </CardContent>
    <CardFooter>
      <Button>Edit</Button>
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

defineProps({
  gateway: Object,
})
</script>
