<template>
  <VButton
    :color="BUTTON_COLORS.RED"
    @click="remove"
    >Удалить</VButton
  >
</template>

<script setup lang="ts">
import router from '@/router';
import { useNotesStore } from '@/stores/notes';

import VButton from '@/components/ui/button/VButton.vue';

import { BUTTON_COLORS } from '@/types/enums';

interface Props {
  noteId: number;
  toHome?: boolean;
}

const notesStore = useNotesStore();

const props = withDefaults(defineProps<Props>(), {
  toHome: true,
});

const remove = () => {
  const confirmed = confirm('Заметка будет удалена. Продолжить?');

  if (!confirmed) {
    return;
  }

  notesStore.remove(props.noteId);

  if (props.toHome) {
    router.push({ name: 'home' });
  }
};
</script>
