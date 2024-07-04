<template>
  <teleport to="#header-title">
    <h1>Доска заметок</h1>
  </teleport>

  <teleport to="#header-navigation">
    <VLink :link="`/add`">Добавить заметку</VLink>
  </teleport>

  <div class="wrapper">
    <NotesList :notes="notesStore.notes" />
  </div>
</template>

<script setup lang="ts">
import NotesList from '@/components/notes/NotesList.vue';

import { useNotesStore } from '@/stores/notes';
import VLink from '@/components/ui/VLink.vue';

const notesStore = useNotesStore();
</script>
