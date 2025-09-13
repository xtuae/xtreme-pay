<template>
  <Card>
    <CardHeader>
      <CardTitle>Gateway Performance</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="h-80">
        <canvas id="performanceChart"></canvas>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

Chart.register(...registerables)

onMounted(() => {
  new Chart(document.getElementById('performanceChart') as HTMLCanvasElement, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Success Rate (%)',
          data: [90, 92, 85, 95, 93, 97],
          borderColor: 'green',
          fill: false,
        }
      ]
    }
  })
})
</script>
