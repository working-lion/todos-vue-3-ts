<template>
  <teleport to="#header-title">Добавление новой заметки</teleport>
  <teleport to="#header-navigation">
    <LinkHome />
  </teleport>

  <EditNoteForm
    @save="addNote"
    @chancel="toHome"
  />
</template>

<script setup lang="ts">
import router from '@/router';

import EditNoteForm from '@/components/forms/EditNoteForm.vue';

import { useNotesStore } from '@/stores/notes';
import LinkHome from '@/components/links/LinkHome.vue';

const toHome = () => {
  router.go(-1);
};

const addNote = (note: NoteNew) => {
  const notesStore = useNotesStore();

  notesStore.add(note);

  toHome();
};
</script>
