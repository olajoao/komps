<template>
  <section class="card-area">
    <h2 class="text-base font-semibold text-gray-600 mb-3">Input text</h2>
    <article class="flex items-end gap-x-5">
      <TextInput
        :config="nameInput"
        :show-label="true"
        :show-icon="true"
        size="half"
        bg-color="white"
        ref="nameRef"
      />
      <TextInput
        :config="answerInput"
        :show-icon="false"
        size="half"
        bg-color="white"
        ref="answerRef"
      />
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
import TextInput from "./TextInput.vue";
const nameInput = {
  inputId: "1231",
  placeholder: "Your name",
  label: "name",
  min: 5,
};

const answerInput = {
  inputId: "1231",
  placeholder: "The answer is...",
  label: "answer",
  min: 8,
};

const nameRef = ref<InstanceType<typeof TextInput>>();
const answerRef = ref<InstanceType<typeof TextInput>>();
</script>
