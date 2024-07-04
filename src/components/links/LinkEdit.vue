<template>
  <VLink :link>Редактировать</VLink>
</template>

<script setup lang="ts">
import VLink from '@/components/ui/VLink.vue';
import { computed } from 'vue';

const props = defineProps<{ noteId: number }>();

const link = computed(() => `/note/${props.noteId}`);
</script>
