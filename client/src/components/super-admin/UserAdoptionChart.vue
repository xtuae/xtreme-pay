<template>
  <Card>
    <CardHeader>
      <CardTitle>User Adoption</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="h-80">
        <canvas id="adoptionChart"></canvas>
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
  new Chart(document.getElementById('adoptionChart') as HTMLCanvasElement, {
    type: 'bar',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'New Users (in thousands)',
          data: [20, 35, 50, 70],
          backgroundColor: '#3b82f6'
        }
      ]
    }
  })
})
</script>
