<template>
  <teleport to="#header-title">Страница редактирования заметки</teleport>

  <teleport to="#header-navigation">
    <LinkHome />
  </teleport>

  <div
    class="edit-view"
    v-if="isNoteFound"
  >
    Страница редактирования заметки id = {{ noteId }}
  </div>

  <div class="edit-view--empty">
    <div class="edit-view--empty__title">Заметка с id = {{ noteId }} не найдена</div>
  </div>

  <VActions> </VActions>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

import { useNotesStore } from '@/stores/notes';
import VActions from '@/components/ui/VActions.vue';
import LinkHome from '@/components/links/LinkHome.vue';

import { isNoteCorrect } from '@/utils/notes';

const route = useRoute();

const noteId = Number(route.params.id);

const notesStore = useNotesStore();

const note: Note | undefined = notesStore.notes.find((n) => n.id === noteId);

const isNoteFound = isNoteCorrect(note);
</script>

<style scoped></style>
