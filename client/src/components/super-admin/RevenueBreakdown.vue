<template>
  <Card>
    <CardHeader>
      <CardTitle>Revenue Breakdown</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="h-80">
        <canvas id="revenueChart"></canvas>
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
  new Chart(document.getElementById('revenueChart') as HTMLCanvasElement, {
    type: 'doughnut',
    data: {
      labels: ['Stripe', 'PayPal', 'Razorpay'],
      datasets: [
        {
          data: [55, 30, 15],
          backgroundColor: ['#2563eb', '#f97316', '#10b981']
        }
      ]
    }
  })
})
</script>
