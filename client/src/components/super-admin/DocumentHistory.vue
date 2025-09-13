<template>
  <Card>
    <CardHeader>
      <CardTitle>Document History</CardTitle>
    </CardHeader>
    <CardContent>
      <div v-if="history.length > 0" class="space-y-2">
        <div
          v-for="(item, index) in history"
          :key="index"
          class="p-2 rounded-md border dark:border-gray-700"
        >
          <p class="text-sm">
            <span class="font-bold">{{ item.action }}</span>
            <span v-if="item.reason"> - {{ item.reason }}</span>
          </p>
          <p class="text-xs text-gray-500">on {{ item.date }}</p>
        </div>
      </div>
      <p v-else class="text-gray-500 text-sm">No history available</p>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useKycStore } from '@/stores/kyc'

const props = defineProps({
  document: Object,
})

const kyc = useKycStore()

// Each document will have its own history stored dynamically
const history = computed(() => {
  return props.document?.history || []
})
</script>
