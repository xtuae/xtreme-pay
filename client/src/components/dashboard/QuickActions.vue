<template>
  <Card>
    <CardHeader>
      <CardTitle>Quick Actions</CardTitle>
    </CardHeader>
    <CardContent class="grid grid-cols-2 gap-4">
      <Button>
        <Users class="w-4 h-4 mr-2" />
        Manage Users
      </Button>
      <Button>
        <ShieldCheck class="w-4 h-4 mr-2" />
        Approve Documents
      </Button>
      <Button>
        <Settings class="w-4 h-4 mr-2" />
        System Settings
      </Button>
      <Button>
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
</script>
