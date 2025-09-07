<template>
  <Dialog>
    <DialogTrigger>
      <Button>Create Payment Link</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create New Payment Link</DialogTitle>
      </DialogHeader>
      <div class="space-y-4">
        <!-- Multi-step form will go here -->
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
