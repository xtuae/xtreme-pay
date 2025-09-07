<template>
  <Dialog>
    <DialogTrigger>
      <Button variant="outline">Refund</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Refund Transaction</DialogTitle>
      </DialogHeader>
      <div class="space-y-4">
        <!-- Refund form will go here -->
      </div>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
</script>
