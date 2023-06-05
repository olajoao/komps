<template>
  <div class="w-full relative" ref="dropdown">
    <button
      @click="toggleDropdownList"
      class="flex items-center bg-white py-2 px-4 bg-inherit border border-gray-300 w-full text-left mb-0.5"
    >
      <span v-if="listNotExist(selectedList)"> Selecione </span>
      <div v-else>
        <span v-for="(option, index) in selectedList" :key="option.id">
          {{ option.name }}
          <span v-if="lastElement(selectedList, index)"> ,&nbsp; </span>
        </span>
      </div>
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
import type { PropType } from "vue";
import { onClickOutside } from "@vueuse/core";
import type { IOption } from "./Select.vue";

const props = defineProps({
  options: {
    type: [] as PropType<IOption[]>,
    required: true,
  },
  bgDropdown: {
    type: String,
    default: "bg-gray-50",
  },
});

const dropdown = ref(null);

const currentSelected = computed(() =>
  props.options.find((option) => option.isSelected)
);

const selectedList = ref<IOption[]>([currentSelected.value]);

const showDropdown = ref(false);

function toggleDropdownList() {
  showDropdown.value = !showDropdown.value;
}

function setCurrentSelected(id: number) {
  const finded = props.options.find((option) => option.id === id);
  const alreadyExists = selectedList.value.findIndex(
    (option) => option.id === id
  );

  if (alreadyExists >= 0) {
    finded.isSelected = false;
    selectedList.value.splice(alreadyExists, 1);
    return;
  }

  if (finded) {
    finded.isSelected = true;
    selectedList.value.push(finded);
  }
}

function setValue(newValue: IOption) {
  setCurrentSelected(newValue.id);
}

function lastElement(currentList: IOption[], listCurrentIndex: number) {
  if (
    currentList &&
    currentList.length > 1 &&
    currentList.length - 1 !== listCurrentIndex
  )
    return true;

  return false;
}

function listNotExist(currentList: IOption[]) {
  if (!currentList || currentList.length <= 0) return true;

  return false;
}

onClickOutside(dropdown, () => (showDropdown.value = false));

defineExpose({
  selectedList
});
</script>
