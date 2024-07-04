<template>
  <VHeader />

  <main>
    <RouterView />
  </main>

  <VFooter class="v-footer" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import { useNotesStore } from '@/stores/notes';

import VFooter from '@/components/pageBlocks/VFooter.vue';
import VHeader from '@/components/pageBlocks/VHeader.vue';

import { getFromStorage } from '@/localStorage/localStorage';

const initialNotes = getFromStorage();
const notesStore = useNotesStore();

notesStore.init(initialNotes);
</script>
