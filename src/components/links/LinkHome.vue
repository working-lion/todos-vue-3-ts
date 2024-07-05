<template>
  <VLink
    link="/"
    :is-button="isButton"
    :color="color"
    >На главную</VLink
  >
</template>

<script setup lang="ts">
import VLink from '@/components/ui/VLink.vue';

import { BUTTON_COLORS } from '@/types/enums';

interface Props {
  isButton?: boolean;
  color?: BUTTON_COLORS;
}

defineProps<Props>();
</script>
