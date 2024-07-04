<template>
  <teleport to="#header-title">Страница редактирования заметки c id = {{ noteId }}</teleport>

  <teleport to="#header-navigation">
    <LinkHome />
  </teleport>

  <div
    class="edit-view"
    v-if="isNoteFound"
  >
    <EditNoteForm
      :note="note"
      @save="save"
      @chancel="goBack"
    />
  </div>

  <div
    class="edit-view--empty"
    v-else
  >
    <div class="edit-view--empty__title">Заметка с id = {{ noteId }} не найдена</div>
  </div>

  <VActions> </VActions>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import router from '@/router';

import { useNotesStore } from '@/stores/notes';
import VActions from '@/components/ui/VActions.vue';
import LinkHome from '@/components/links/LinkHome.vue';
import EditNoteForm from '@/components/forms/EditNoteForm.vue';

import { isNoteCorrect } from '@/utils/notes';

const route = useRoute();
const notesStore = useNotesStore();

const noteId = Number(route.params.id);
const note: Note | undefined = notesStore.notes.find((n) => n.id === noteId);

const isNoteFound = isNoteCorrect(note);

const save = (note: Note) => {
  notesStore.edit(note);

  goBack();
};

const goBack = () => {
  router.go(-1);
};
</script>

<style scoped></style>
