<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div class="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="text-center">
        <img class="w-auto h-12 mx-auto" src="@/assets/logo.svg" alt="XtremePay">
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
          <slot name="header"></slot>
        </h2>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
