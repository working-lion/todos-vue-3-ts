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

interface Props {
  isButton?: boolean;
  color?: boolean;
}

defineProps<Props>();
</script>
