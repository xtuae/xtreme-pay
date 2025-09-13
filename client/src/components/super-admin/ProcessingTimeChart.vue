<template>
  <Card>
    <CardHeader>
      <CardTitle>Processing Time</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="h-80">
        <canvas id="timeChart"></canvas>
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
  new Chart(document.getElementById('timeChart') as HTMLCanvasElement, {
    type: 'line',
    data: {
      labels: ['Stripe', 'PayPal', 'Razorpay'],
      datasets: [
        {
          label: 'Avg Time (seconds)',
          data: [2.5, 3.0, 1.8],
          borderColor: '#f59e0b',
          fill: false,
        }
      ]
    }
  })
})
</script>
