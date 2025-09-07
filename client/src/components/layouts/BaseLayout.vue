<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900">
    <Sidebar :navigation="navigation" />
    <div class="flex flex-col flex-1">
      <TopHeader />
      <main class="flex-1 p-4 overflow-y-auto">
        <slot></slot>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TopHeader from '../common/TopHeader.vue'
import Sidebar from '../common/Sidebar.vue'
import Footer from './Footer.vue'

const props = defineProps({
  navigation: {
    type: Array,
    required: true,
  },
})
</script>
