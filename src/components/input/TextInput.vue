<template>
  <div class="relative" :class="setWidth(size)">
    <div class="flex items-center justify-between mb-1">
      <label
        v-if="showLabel"
        :for="config.inputId"
        class="capitalize text-xs text-gray-400"
      >
        {{ config.label }}
      </label>
      <p
        v-if="errorMessage.length > 0"
        class="text-xs text-red-600 absolute top-0 right-0"
      >
        {{ errorMessage }}
      </p>
    </div>
    <div class="relative w-full">
      <input
        @input="validate()"
        class="text-xs text-gray-500 sm:text-sm border py-2 outline-none pr-2 w-full"
        :class="[
          {
            'border-gray-200': !hasError && !valid,
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from "vue";
import { UserIcon } from "@heroicons/vue/24/outline";

import { validateTextInput } from "../../utils";

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
  showLabel: {
    type: Boolean,
    default: false,
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
});

const currentValue = ref<string>("");

const hasError = ref(false);
const valid = ref(false);

const errorMessage = ref<string>("");

function validate() {
  if (validateTextInput(currentValue.value, props.config.min)) {
    hasError.value = false;
    valid.value = true;
    errorMessage.value = "";
    return true;
  } else {
    hasError.value = true;
    valid.value = false;
    errorMessage.value = "Campo obrigatório";
    return false;
  }
}

defineExpose({
  validate,
  currentValue,
});
</script>
