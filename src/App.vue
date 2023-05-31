<template>
  <main class="p-5 flex flex-col gap-y-5 min-h-screen w-full">
    <h1 class="text-xl font-medium text-gray-800">Demo</h1>
    <InputPage />
    <SelectPage  />
  </main>
</template>
<script lang="ts" setup>
import InputPage from "./components/input/Page.vue";
import SelectPage from "./components/select/Page.vue";
</script>
