<template>
  <main class="p-5 flex flex-col gap-y-5 min-h-screen w-full bg-gray-200">
    <section class="card-area">
      <h1 class="text-xl font-semibold text-gray-600 mb-4">Input text</h1>
      <article class="flex gap-x-5">
        <TextInput
          :config="nameInput"
          :show-icon="true"
          size="half"
          bg-color="white"
        />
        <TextInput
          :config="answerInput"
          :show-icon="false"
          size="half"
          bg-color="white"
        />
      </article>
    </section>
  </main>
</template>
<script lang="ts" setup>
import TextInput from "./components/TextInput.vue";

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
</script>
