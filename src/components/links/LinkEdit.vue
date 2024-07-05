<template>
  <VLink
    :link="link"
    is-button
    :color="'beige'"
    >Редактировать</VLink
  >
</template>

<script setup lang="ts">
import VLink from '@/components/ui/VLink.vue';
import { computed } from 'vue';

const props = defineProps<{ noteId: number }>();

const link = computed(() => `/edit/${props.noteId}`);
</script>
