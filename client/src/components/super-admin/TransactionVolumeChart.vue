<template>
  <Card>
    <CardHeader>
      <CardTitle>Transaction Volume</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="h-80">
        <canvas id="volumeChart"></canvas>
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
  new Chart(document.getElementById('volumeChart') as HTMLCanvasElement, {
    type: 'bar',
    data: {
      labels: ['Stripe', 'PayPal', 'Razorpay', 'Paytm'],
      datasets: [
        {
          label: 'Volume (in thousands)',
          data: [120, 95, 80, 60],
          backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
        }
      ]
    }
  })
})
</script>
