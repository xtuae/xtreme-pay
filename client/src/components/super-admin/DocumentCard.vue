<template>
  <Card class="cursor-pointer hover:shadow-lg transition" @click="$emit('click')">
    <CardHeader>
      <CardTitle>{{ document.name }}</CardTitle>
      <CardDescription>{{ document.user.name }}</CardDescription>
    </CardHeader>
    <CardContent>
      <DocumentStatus :status="document.status" />
    </CardContent>
    <CardFooter>
      <Button>View Document</Button>
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
import DocumentStatus from './DocumentStatus.vue'

defineProps({
  document: Object,
})
</script>
