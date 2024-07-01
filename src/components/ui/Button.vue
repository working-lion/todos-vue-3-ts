<template>
  <button
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);

const onClick = ($event) => {
  if (!props.disabled) {
    emit('click', $event);
  }
};
</script>
