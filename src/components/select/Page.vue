<template>
  <section class="card-area">
    <h2 class="text-base font-semibold text-gray-600 mb-3">
      Select / Multi Select
    </h2>
    <article class="flex items-end gap-x-5">
      <Select bg-dropdown="bg-white" />
      <MultiSelect :options="customOptions" />
    </article>
    <div class="py-3">
      <h3 class="text-gray-400 text-xs uppercase my-3">Properties</h3>
      <p class="my-2">
        <span class="font-semibold text-gray-600">config:</span>
        <span class="text-sm text-gray-500 ml-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          et.
        </span>
      </p>
      <p class="my-2">
        <span class="font-semibold text-gray-600">showLabel:</span>
        <span class="text-sm text-gray-500 ml-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          et.
        </span>
      </p>
      <p class="my-2">
        <span class="font-semibold text-gray-600">showIcon:</span>
        <span class="text-sm text-gray-500 ml-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          et.
        </span>
      </p>
      <p class="my-2">
        <span class="font-semibold text-gray-600">size:</span>
        <span class="text-sm text-gray-500 ml-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          et.
        </span>
      </p>
      <p class="my-2">
        <span class="font-semibold text-gray-600">bgColor:</span>
        <span class="text-sm text-gray-500 ml-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          et.
        </span>
      </p>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import MultiSelect from "./MultiSelect.vue";
import Select from "./Select.vue";

const customOptions = ref([
  { id: 12, name: "João Küster", isSelected: false },
  { id: 54, name: "Fulano", isSelected: true },
  { id: 69, name: "Ciclano", isSelected: false },
  { id: 79, name: "Beltrano", isSelected: false },
]);
</script>
