<template>
  <div class="relative" :class="setWidth(size)">
    <input
      @input="validate('')"
      class="text-xs text-gray-500 sm:text-sm border-2 rounded-sm md:rounded-md py-2 outline-none pr-2 w-full"
      :class="[
        {
          'border-gray-400': !hasError && !valid,
          'border-red-500': hasError,
          'border-emerald-500': valid,
        },
        showIcon ? 'pl-9' : 'pl-3',
        bgColor ? `bg-[${bgColor}]` : 'bg-transparent',
      ]"
      :id="config?.inputId"
      type="text"
      :placeholder="config?.placeholder"
      v-model="currentValue"
    />
    <UserIcon
      v-if="showIcon"
      class="absolute left-2.5 w-5 h-5 inset-y-0 my-auto flex items-center justify-center"
    />
    <label class="sr-only" :for="config?.inputId">{{ config?.label }}</label>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from "vue";
import { UserIcon } from "@heroicons/vue/24/outline";

import { validateTextInput } from "../utils";

type IWidth = "full" | "half" | "auto";

function setWidth(width: IWidth): string {
  switch (width) {
    case "full":
      return "w-full";
    case "half":
      return "w-1/2";
    case "auto":
      return "w-auto";
    default:
      return "w-full";
  }
}

interface ITextInput {
  inputId: string;
  placeholder?: string;
  label?: string;
  min: number;
}

const props = defineProps({
  config: {
    type: Object as PropType<ITextInput>,
    required: true,
    default: {
      inputId: "1",
      placeholder: "Search",
      label: "Search",
      min: 3,
    },
  },
  size: {
    type: String as PropType<IWidth>,
    default: "w-full",
  },
  bgColor: String,
  showIcon: {
    type: Boolean,
    default: false,
  },
});

const currentValue = ref<string>("");

const hasError = ref(false);
const valid = ref(false);

function validate(text: string = "") {
  console.log(text);
  if (validateTextInput(currentValue.value, props.config.min)) {
    hasError.value = false;
    valid.value = true;
    return;
  } else {
    hasError.value = true;
    valid.value = false;
  }
}

defineExpose({
  validate,
});
</script>
