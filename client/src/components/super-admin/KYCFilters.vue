<template>
  <div class="flex items-center space-x-4">
    <Input placeholder="Search by merchant..." class="max-w-sm" />
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Filter by document type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Types</SelectItem>
        <SelectItem value="registration">Business Registration</SelectItem>
        <SelectItem value="tax">Tax Document</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
</script>
