<template>
  <Dialog>
    <DialogTrigger>
      <Button variant="destructive">Reject</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Rejection Reason</DialogTitle>
      </DialogHeader>
      <div class="space-y-4">
        <Textarea placeholder="Enter rejection reason..." />
        <Button>Submit</Button>
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
import { Textarea } from '@/components/ui/textarea'
</script>
