<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li v-for="(item, index) in breadcrumbs" :key="index" class="inline-flex items-center">
        <router-link :to="item.to" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
          <component :is="item.meta.icon" class="w-4 h-4 mr-2" v-if="item.meta.icon" />
          {{ item.meta.breadcrumb }}
        </router-link>
        <ChevronRight class="w-4 h-4 text-gray-400" v-if="index < breadcrumbs.length - 1" />
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronRight } from 'lucide-vue-next'

const route = useRoute()

const breadcrumbs = computed(() => {
  return route.matched.filter(item => item.meta && item.meta.breadcrumb)
})
</script>
