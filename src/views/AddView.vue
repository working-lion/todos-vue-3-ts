<template>
  <teleport to="#header-title">Добавление новой заметки</teleport>
  <teleport to="#header-navigation">
    <LinkHome />
  </teleport>

  <AddNoteForm
    @add="addNote"
    @chancel="toHome"
  />
</template>

<script setup lang="ts">
import router from '@/router';

import AddNoteForm from '@/components/forms/AddNoteForm.vue';

import { useNotesStore } from '@/stores/notes';
import LinkHome from '@/components/links/LinkHome.vue';

const toHome = () => {
  router.push('/');
};

const addNote = (note: Note) => {
  const notesStore = useNotesStore();

  // TODO: валидация

  notesStore.add(note);

  toHome();
};
</script>
