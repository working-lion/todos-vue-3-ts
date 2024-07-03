<template>
  <Header title="Доска заметок">
    <nav>
      <!--        <RouterLink to="/">Home</RouterLink>-->
      <RouterLink :to="`/add`">Добавить заметку</RouterLink>
      <!--        <RouterLink to="/view">View</RouterLink>
      <RouterLink to="/edit/123">Edit</RouterLink>-->
    </nav>
  </Header>

  <div class="wrapper">
    <NotesList :notes="notesStore.notes" />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import { RouterLink } from 'vue-router';
import NotesList from '@/components/notes/NotesList.vue';

import { useNotesStore } from '@/stores/notes';

const notesStore = useNotesStore();
</script>
