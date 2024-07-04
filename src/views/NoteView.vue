<template>
  <teleport to="#header-title">Страница просмотра заметки</teleport>

  <teleport to="#header-navigation">
    <LinkHome />
  </teleport>

  <div
    class="note-view"
    v-if="isFound"
  >
    Страница просмотра заметки #{{ noteId }}

    <div class="note-view__note-title">title {{ note?.title }}</div>

    <ul>
      <li
        v-for="(task, i) in tasks"
        :key="task.createdAt"
        class="note-view__task"
        :class="{ 'note-view__task--done': task.done }"
      >
        <VCheckbox
          v-model="task.done"
          :label="task.title"
          :id="`task-${i}`"
        />
      </li>
    </ul>
  </div>

  <div
    class="note-view--empty"
    v-else
  >
    <div class="note-view--empty__title">Заметка с id = {{ noteId }} не найдена</div>
  </div>

  <VActions>
    <LinkHome />
  </VActions>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useNotesStore } from '@/stores/notes';

import VActions from '@/components/ui/VActions.vue';
import LinkHome from '@/components/links/LinkHome.vue';
import VCheckbox from '@/components/ui/inputs/VCheckbox.vue';

import { isNoteCorrect, sortTasksByDone } from '@/utils/notes';

const route = useRoute();

const noteId = Number(route.params.id);

const notesStore = useNotesStore();

// Копируем заметку
const note: Note | undefined = notesStore.notes.find((n) => n.id === noteId);

const isFound = isNoteCorrect(note);

const tasks = computed(() => {
  return note?.tasks?.sort(sortTasksByDone);
});

// TODO: завершённые задачи должны быть ниже незавершённых
watch(tasks, () => {
  if (note) {
    // notesStore.edit(note);
  }
});
</script>

<style>
.note-view__task--done label {
  text-decoration: line-through;
}
</style>
