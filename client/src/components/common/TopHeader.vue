<template>
  <header class="flex items-center justify-between p-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <div class="flex items-center">
      <div class="ml-6">
        <Breadcrumb />
      </div>
    </div>
    <div class="flex items-center space-x-4">
      <Input placeholder="Search..." class="hidden md:block" />
      <Button variant="ghost" size="icon">
        <Bell class="w-6 h-6" />
      </Button>
      <UserMenu />
    </div>
  </header>
</template>

<script setup lang="ts">
import { Bell } from 'lucide-vue-next'
import Breadcrumb from './Breadcrumb.vue'
import UserMenu from './UserMenu.vue'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
</script>
