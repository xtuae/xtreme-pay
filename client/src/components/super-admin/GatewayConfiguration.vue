<template>
  <Card v-if="gateway">
    <CardHeader>
      <CardTitle>Gateway Configuration</CardTitle>
    </CardHeader>

    <CardContent class="space-y-3">
      <div>
        <label class="text-sm">Name</label>
        <input v-model="local.name" class="w-full border rounded px-3 py-2" />
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <label class="text-sm">Users</label>
          <input v-model.number="local.users" type="number" class="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label class="text-sm">Transactions</label>
          <input v-model.number="local.transactions" type="number" class="w-full border rounded px-3 py-2" />
        </div>
      </div>

      <div>
        <label class="text-sm">Status</label>
        <select v-model="local.status" class="w-full border rounded px-3 py-2">
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
    </CardContent>

    <CardFooter class="flex justify-end gap-2">
      <Button variant="ghost" @click="cancel">Cancel</Button>
      <Button @click="save">Save Changes</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { reactive, computed, toRefs, watch } from 'vue'
import { useGatewayStore } from '@/stores/gateway'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const gatewayStore = useGatewayStore()

// 'gateway' is a reactive reference to selectedGateway in store
const gateway = computed(() => gatewayStore.selectedGateway)

// create a local reactive copy so user edits don't immediately mutate the array
const local = reactive({
  id: null as number | null,
  name: '',
  users: 0,
  transactions: 0,
  status: 'inactive',
})

// whenever selectedGateway changes, copy values into local
watch(gateway, (g) => {
  if (g) {
    local.id = g.id ?? null
    local.name = g.name ?? ''
    local.users = Number(g.users ?? 0)
    local.transactions = Number(g.transactions ?? 0)
    local.status = g.status ?? 'inactive'
  } else {
    local.id = null
    local.name = ''
    local.users = 0
    local.transactions = 0
    local.status = 'inactive'
  }
}, { immediate: true })

function save() {
  if (!local.id) return
  gatewayStore.updateGateway({
    id: local.id,
    name: local.name,
    users: Number(local.users),
    transactions: Number(local.transactions),
    status: local.status,
  })
}

function cancel() {
  gatewayStore.selectGateway(null)
}
</script>
