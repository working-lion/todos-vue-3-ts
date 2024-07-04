<template>
  <form @submit="onSubmit">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(['submit']);

function onSubmit(e: Event) {
  e.preventDefault();

  emit('submit');
}
</script>
