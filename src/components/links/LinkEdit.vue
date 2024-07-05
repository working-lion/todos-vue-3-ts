<template>
  <VLink
    :link="link"
    is-button
    :color="BUTTON_COLORS.BEIGE"
    >Редактировать</VLink
  >
</template>

<script setup lang="ts">
import { computed } from 'vue';

import VLink from '@/components/ui/VLink.vue';

import { BUTTON_COLORS } from '@/types/enums';

const props = defineProps<{ noteId: number }>();

const link = computed(() => `/edit/${props.noteId}`);
</script>
