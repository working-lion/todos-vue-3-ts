<template>
  <button
    class="button"
    :class="addClasses"
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { BUTTON_COLORS } from '@/types/enums';

interface Props {
  disabled?: boolean;
  color?: BUTTON_COLORS;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

const emit = defineEmits(['click']);

const onClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};

const addClasses = computed(() => {
  const classes = [];

  if (props.color) {
    classes.push(`button--${props.color}`);
  }

  if (props.disabled) {
    classes.push('button--gray');
  }

  return classes;
});
</script>

<style>
.button {
  color: var(--color-white);
  font-size: 14px;
  outline: none;
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
  padding: 7px 21px;
  background-color: var(--color-indigo);
  border-color: var(--color-white);
  line-height: 1;
}

.button--disabled {
  background-color: var(--color-gray);
  cursor: default;
}

.button--red {
  background: var(--color-red);
  border-color: var(--color-red);
}

.button--green {
  background: var(--color-green);
  border-color: var(--color-green);
}

.button--beige {
  background: var(--color-beige);
  border-color: var(--color-beige);
}
</style>
