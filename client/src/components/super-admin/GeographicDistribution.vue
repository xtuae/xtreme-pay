<template>
  <Card>
    <CardHeader>
      <CardTitle>Geographic Distribution</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="h-80">
        <ul class="space-y-2">
          <li>India: 45%</li>
          <li>USA: 30%</li>
          <li>Europe: 15%</li>
          <li>Others: 10%</li>
        </ul>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
</script>
