<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex items-center justify-between">
        <span>{{ gateway.name }}</span>
        <!-- keep the Switch look; we also handle click to ensure toggle works -->
        <div class="flex items-center gap-2">
          <span class="text-sm text-muted-foreground">{{ gateway.status }}</span>
          <Switch
            :checked="gateway.status === 'active'"
            @click="onToggle"
            aria-label="Toggle gateway status"
          />
        </div>
      </CardTitle>
    </CardHeader>

    <CardContent>
      <p>Users: {{ gateway.users }}</p>
      <p>Transactions: {{ gateway.transactions }}</p>
    </CardContent>

    <CardFooter class="space-x-2">
      <Button @click="configure">Configure</Button>
      <Button variant="destructive" @click="confirmDelete">Delete</Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { useGatewayStore } from '@/stores/gateway'
import { defineProps } from 'vue'

const props = defineProps<{ gateway: any }>()
const gatewayStore = useGatewayStore()

function configure() {
  gatewayStore.selectGateway(props.gateway)
  // The parent shows GatewayConfiguration already (reads selectedGateway)
}

function confirmDelete() {
  // simple browser confirm to avoid extra UI components (keeps design unchanged)
  if (window.confirm(`Delete gateway "${props.gateway.name}"?`)) {
    gatewayStore.deleteGateway(props.gateway.id)
  }
}

function onToggle() {
  gatewayStore.toggleStatus(props.gateway.id)
}
</script>
