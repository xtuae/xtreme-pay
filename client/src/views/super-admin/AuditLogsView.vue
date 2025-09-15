<template>
  <div class="space-y-4">
    <!-- Title -->
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold">Audit Logs</h1>
    </div>

    <!-- Filters -->
    <div class="flex items-center justify-between">
      <LogFilters @update:filters="filters = $event" />
      <ExportLogs @export="exportCSV" />
    </div>

    <!-- Table -->
    <LogsTable
      :logs="filteredLogs"
      @update:selected="selectedLogs = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import LogsTable from '@/components/super-admin/LogsTable.vue'
import LogFilters from '@/components/super-admin/LogFilters.vue'
import ExportLogs from '@/components/super-admin/ExportLogs.vue'

// Mock audit log data
const logs = ref([
  { id: 1, action: 'Transaction Approved', user: 'John Doe', status: 'success', timestamp: new Date(), ip: '192.168.1.10' },
  { id: 2, action: 'KYC Rejected', user: 'Jane Smith', status: 'failed', timestamp: new Date(), ip: '192.168.1.11' },
  { id: 3, action: 'Gateway Config Updated', user: 'Admin', status: 'success', timestamp: new Date(), ip: '192.168.1.12' },
])

const filters = ref({ search: '', status: 'all' })
const selectedLogs = ref<number[]>([])

const filteredLogs = computed(() => {
  return logs.value.filter(l => {
    return (
      (filters.value.search === '' ||
        l.action.toLowerCase().includes(filters.value.search.toLowerCase()) ||
        l.user.toLowerCase().includes(filters.value.search.toLowerCase())) &&
      (filters.value.status === 'all' || l.status === filters.value.status)
    )
  })
})

const exportCSV = () => {
  const rows = logs.value.map(l => ({
    Action: l.action,
    User: l.user,
    Status: l.status,
    Timestamp: l.timestamp.toLocaleString(),
    IP: l.ip,
  }))
  const csvContent =
    'data:text/csv;charset=utf-8,' +
    [Object.keys(rows[0]).join(','), ...rows.map(r => Object.values(r).join(','))].join('\n')

  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', 'audit-logs.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>
