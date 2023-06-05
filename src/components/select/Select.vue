<template>
  <div class="max-w-sm w-full relative">
    <button
      @click="showDropdownList"
      class="bg-white py-2 px-4 bg-inherit border border-gray-300 w-full text-left mb-0.5"
    >
      {{ selected.name }}
    </button>
    <div
      v-if="showDropdown"
      class="w-full absolute top-11 left-0 shadow shadow-gray-300"
      :class="bgDropdown"
    >
      <button
        v-for="option in options"
        :key="option.id"
        @click="setValue(option)"
        class="hover:bg-gray-200 text-left w-full bg-inherit py-2 px-4 flex items-center justify-between"
      >
        <span>{{ option.name }}</span>
        <CheckIcon v-if="option.isSelected" class="w-5 h-5 text-emerald-500" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { CheckIcon } from "@heroicons/vue/24/outline";
import { ref, computed } from "vue";

export interface IOption {
  id: number;
  name: string;
  isSelected: boolean;
}

defineProps({
  bgDropdown: {
    type: String,
    default: 'bg-gray-50'
  },
});

const options = ref([
  { id: 1, name: "Option one", isSelected: true },
  { id: 2, name: "Option two", isSelected: false },
  { id: 3, name: "Option three", isSelected: false },
]);

const computedOptions = computed(() => options.value);
const selected = ref(computedOptions.value[0]);

const showDropdown = ref(false);

function showDropdownList() {
  showDropdown.value = !showDropdown.value;
}

function clearSelected() {
  options.value.forEach((option) => (option.isSelected = false));
}
function setCurrentSelected(id: number) {
  const finded = options.value.find((option) => option.id === id);
  if (finded) {
    clearSelected();
    finded.isSelected = true;
  }
}

function setValue(newValue: IOption) {
  setCurrentSelected(newValue.id);
  selected.value = newValue;
  showDropdown.value = false;
}
</script>
