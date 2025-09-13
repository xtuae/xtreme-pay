<template>
  <div class="p-6 max-w-4xl mx-auto space-y-6">
    <h1 class="text-2xl font-bold">Generating Invoice</h1>

    <!-- Form -->
    <div class="space-y-4">
      <div>
        <Label for="name">Name</Label>
        <Input id="name" v-model="form.name" placeholder="Enter your name" />
      </div>

      <div>
        <Label for="email">Email</Label>
        <Input id="email" v-model="form.email" placeholder="Enter your mail" />
      </div>

      <div>
        <Label for="description">Description</Label>
        <Textarea
          id="description"
          v-model="form.description"
          placeholder="Enter description"
        />
      </div>

      <div>
        <Label for="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          v-model="form.amount"
          placeholder="0.00"
        />
      </div>
    </div>

    <!-- Preview Button -->
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline">Preview Invoice</Button>
      </DialogTrigger>
      <DialogContent class="max-w-xl">
        <DialogHeader>
          <DialogTitle>Invoice Preview</DialogTitle>
        </DialogHeader>

        <!-- Preview Details -->
        <div class="space-y-2">
          <p><strong>Invoice</strong></p>
          <p><strong>Name:</strong> {{ form.name }}</p>
          <p><strong>Email:</strong> {{ form.email }}</p>
          <p><strong>Description:</strong> {{ form.description }}</p>
          <p><strong>Amount:</strong> ${{ form.amount || "0.00" }}</p>
          <hr />
          <p><strong>Total:</strong> ${{ form.amount || "0.00" }}</p>
          <p><strong>Grand Total:</strong> ${{ form.amount || "0.00" }}</p>
          <p class="text-center mt-4 font-semibold">Thank You</p>
        </div>

        <DialogFooter>
          <DialogClose as-child>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <!-- Send Invoice Button -->
    <Button class="w-full">Send Invoice</Button>
  </div>
</template>

<script setup>
import { ref } from "vue"

// form inputs
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// buttons
import { Button } from "@/components/ui/button"

// dialogs
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"

const form = ref({
  name: "",
  email: "",
  description: "",
  amount: "",
})
</script>

<style scoped>
/* no extra CSS needed, handled by shadcn-vue */
</style>
