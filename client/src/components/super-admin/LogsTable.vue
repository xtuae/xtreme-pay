<template>
  <div class="overflow-x-auto">
    <table class="min-w-full border border-gray-200">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 text-left">
            <input type="checkbox" @change="toggleAll" v-model="allSelected" />
          </th>
          <th class="p-2 text-left">Action</th>
          <th class="p-2 text-left">User</th>
          <th class="p-2 text-left">Status</th>
          <th class="p-2 text-left">Timestamp</th>
          <th class="p-2 text-left">IP Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="log in logs" :key="log.id" class="border-t">
          <td class="p-2">
            <input
              type="checkbox"
              :value="log.id"
              v-model="selected"
              @change="emitSelected"
            />
          </td>
          <td class="p-2">{{ log.action }}</td>
          <td class="p-2">{{ log.user }}</td>
          <td class="p-2">
            <span
              :class="{
                'text-green-600 font-semibold': log.status === 'success',
                'text-red-600 font-semibold': log.status === 'failed',
                'text-yellow-600 font-semibold': log.status === 'pending'
              }"
            >
              {{ log.status }}
            </span>
          </td>
          <td class="p-2">{{ new Date(log.timestamp).toLocaleString() }}</td>
          <td class="p-2">{{ log.ip }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ logs: any[] }>()
const emit = defineEmits(['update:selected'])

const selected = ref<number[]>([])
const allSelected = ref(false)

const toggleAll = () => {
  if (allSelected.value) {
    selected.value = props.logs.map(l => l.id)
  } else {
    selected.value = []
  }
  emitSelected()
}

const emitSelected = () => {
  emit('update:selected', selected.value)
}

watch(
  () => props.logs,
  () => {
    // reset selection if logs list changes
    selected.value = []
    allSelected.value = false
    emitSelected()
  }
)
</script>
