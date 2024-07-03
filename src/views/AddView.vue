<template>
  <Header title="Добавление новой заметки">
    <RouterLink to="/" />
  </Header>

  <AddNoteForm
    @add="addNote"
    @chancel="toHome"
  />
</template>

<script setup lang="ts">
import router from '@/router';
import { RouterLink } from 'vue-router';

import Header from '@/components/Header.vue';
import AddNoteForm from '@/components/AddNoteForm.vue';

import { useNotesStore } from '@/stores/notes';

const toHome = () => {
  router.push({ name: 'home' });
};

const addNote = (note: Note) => {
  const notesStore = useNotesStore();

  notesStore.add(note);

  toHome();
};
</script>
