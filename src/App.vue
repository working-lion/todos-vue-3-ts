<template>
  <header>
    <div class="wrapper">
      <nav>
        <!--        <RouterLink to="/">Home</RouterLink>-->
        <RouterLink :to="`/add/:${newNoteId}`">Add</RouterLink>
        <!--        <RouterLink to="/view">View</RouterLink>
        <RouterLink to="/edit/123">Edit</RouterLink>-->
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

import { useNotesStore } from '@/stores/notes';

const notesStore = useNotesStore();

const newNoteId = notesStore.getCount();
</script>

<style scoped></style>
