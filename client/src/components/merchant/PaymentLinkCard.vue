<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ link.title }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Amount: {{ link.amount }} {{ link.currency }}</p>
      <p>Status: {{ link.status }}</p>
      <p>Clicks: {{ link.clicks }}</p>
      <p>Conversions: {{ link.conversions }}</p>
    </CardContent>
    <CardFooter class="space-x-2">
      <Button>Copy</Button>
      <Button>Edit</Button>
      <Button>Analytics</Button>
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
  link: Object,
})
</script>
