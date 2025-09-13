<template>
  <Card>
    <CardHeader>
      <CardTitle>Quick Actions</CardTitle>
    </CardHeader>
    <CardContent class="grid grid-cols-2 gap-4">
      <Button @click="goTo('/super-admin/users')">
        <Users class="w-4 h-4 mr-2" />
        Manage Users
      </Button>
      <Button @click="goTo('/super-admin/kyc')">
        <ShieldCheck class="w-4 h-4 mr-2" />
        Approve Documents
      </Button>
      <Button @click="goTo('/super-admin/settings')">
        <Settings class="w-4 h-4 mr-2" />
        System Settings
      </Button>
      <Button @click="goTo('/super-admin/logs')">
        <FileText class="w-4 h-4 mr-2" />
        View Audit Logs
      </Button>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, ShieldCheck, Settings, FileText } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

function goTo(path: string) {
  router.push(path)
}
</script>
