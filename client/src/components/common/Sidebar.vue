<template>
  <div :class="['h-screen bg-gray-800 text-white transition-all duration-300', { 'w-64': !isCollapsed, 'w-20': isCollapsed }]">
    <div :class="['flex items-center p-4', { 'justify-between': !isCollapsed, 'justify-center': isCollapsed }]">
      <div v-if="!isCollapsed" class="flex items-center">
        <img class="w-auto h-8" src="@/assets/icon.png" alt="XtremePay">
        <h2 class="ml-2 text-2xl font-bold">
          <span class="dark:text-white">Xtreme</span><span class="text-yellow-500">Pay</span>
        </h2>
      </div>
      <button @click="isCollapsed = !isCollapsed">
        <Menu class="w-6 h-6" />
      </button>
    </div>
    <nav class="mt-2">
      <router-link v-for="item in navigation" :key="item.name" :to="item.href" :class="['flex items-center py-2 text-gray-300 hover:bg-gray-700 hover:text-white', { 'px-4': !isCollapsed, 'justify-center': isCollapsed }]">
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
