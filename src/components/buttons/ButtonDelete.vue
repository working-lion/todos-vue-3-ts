<template>
  <VButton @click="remove">Удалить</VButton>
</template>

<script setup lang="ts">
import router from '@/router';
import { useNotesStore } from '@/stores/notes';

import VButton from '@/components/ui/VButton.vue';

interface Props {
  noteId: number;
  toHome?: boolean;
}

const notesStore = useNotesStore();

const props = withDefaults(defineProps<Props>(), {
  toHome: true,
});

const remove = () => {
  notesStore.remove(props.noteId);

  if (props.toHome) {
    router.push({ name: 'home' });
  }
};
</script>
