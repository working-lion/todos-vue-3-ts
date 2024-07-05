<template>
  <RouterLink
    class="v-link"
    :class="addClasses"
    :to="link"
    :title="title"
    ><slot
  /></RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

import { BUTTON_COLORS } from '@/types/enums';

interface Pros {
  link: string;
  title?: string;
  isButton?: boolean;
  color?: BUTTON_COLORS;
}

const props = withDefaults(defineProps<Pros>(), {
  isButton: false,
  title: '',
  link: '',
});

const addClasses = computed(() => {
  const classes = [];

  if (props.isButton) {
    classes.push('v-link--button');
  }

  if (props.isButton && props.color) {
    classes.push(`v-link--${props.color}`);
  }

  return classes;
});
</script>

<style>
.v-link--button {
  display: inline-flex;
  border: 1px solid var(--color-white);
  padding: 7px 21px;
  background-color: var(--color-indigo);
  border-radius: 3px;
  text-decoration: none;
  line-height: 1;
}

.v-link--red {
  background: var(--color-red);
  border-color: var(--color-red);
}

.v-link--green {
  background: var(--color-green);
  border-color: var(--color-green);
}

.v-link--beige {
  background: var(--color-beige);
  border-color: var(--color-beige);
}
</style>
