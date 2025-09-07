<template>
  <Card>
    <img :src="product.image" alt="Product image" class="object-cover w-full h-48">
    <CardHeader>
      <CardTitle>{{ product.name }}</CardTitle>
      <CardDescription>{{ product.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{{ product.price }} {{ product.currency }}</p>
      <p>Status: {{ product.status }}</p>
    </CardContent>
    <CardFooter class="space-x-2">
      <Button>Edit</Button>
      <Button variant="destructive">Delete</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

defineProps({
  product: Object,
})
</script>
