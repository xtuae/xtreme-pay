<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between pb-2 space-y-0">
      <CardTitle class="text-sm font-medium">
        {{ title }}
      </CardTitle>
      <component :is="icon" class="w-4 h-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div class="text-2xl font-bold">
        {{ value }}
      </div>
      <p class="text-xs text-muted-foreground">
        {{ change }}
      </p>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

defineProps({
  title: String,
  value: String,
  change: String,
  icon: Object,
})
</script>
