<template>
  <div :class="['h-screen bg-gray-800 text-white transition-all duration-300', { 'w-64': !isCollapsed, 'w-20': isCollapsed }]">
    <div class="flex items-center justify-between p-4">
      <span v-if="!isCollapsed">XtremePay</span>
      <button @click="isCollapsed = !isCollapsed">
        <Menu class="w-6 h-6" />
      </button>
    </div>
    <nav class="mt-10">
      <router-link v-for="item in navigation" :key="item.name" :to="item.href" class="flex items-center px-4 py-2 mt-2 text-gray-300 hover:bg-gray-700 hover:text-white">
        <component :is="item.icon" class="w-6 h-6" />
        <span v-if="!isCollapsed" class="ml-3">{{ item.name }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu } from 'lucide-vue-next'

const props = defineProps({
  navigation: {
    type: Array as () => Array<{ name: string; href: string; icon: any }>,
    required: true,
  },
})

const isCollapsed = ref(false)
</script>
