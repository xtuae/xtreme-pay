<template>
  <Dialog>
    <DialogTrigger>
      <Button>Add New Gateway</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add New Gateway</DialogTitle>
      </DialogHeader>
      <div class="space-y-4">
        <!-- Add gateway form will go here -->
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
