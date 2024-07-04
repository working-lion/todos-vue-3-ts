<template>
  <teleport to="#header-title">Страница просмотра заметки</teleport>

  <teleport to="#header-navigation">
    <LinkHome />
  </teleport>

  <div
    class="note-view"
    v-if="isFound"
  >
    <div class="note-view__note-title">{{ note?.title }}</div>

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
    <template v-if="isFound">
      <LinkEdit :note-id="noteId" />
      <ButtonDelete :note-id="noteId"></ButtonDelete>
    </template>
  </VActions>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useNotesStore } from '@/stores/notes';

import VActions from '@/components/ui/VActions.vue';
import LinkHome from '@/components/links/LinkHome.vue';
import VCheckbox from '@/components/ui/inputs/VCheckbox.vue';

import { isNoteCorrect, sortByDate, sortTasksByDone } from '@/utils/notes';
import LinkEdit from '@/components/links/LinkEdit.vue';
import ButtonDelete from '@/components/buttons/ButtonDelete.vue';

import { cloneDeep } from 'lodash';

const route = useRoute();

const noteId = Number(route.params.id);

const notesStore = useNotesStore();

// Копируем заметку
const note: Note | undefined = cloneDeep(notesStore.notes.find((n) => n.id === noteId));
const isFound = isNoteCorrect(note);
const initialTasks = note?.tasks?.filter((t) => !t.done).sort(sortTasksByDone) || [];

// Доп. переменная нужна, чтобы не аффектить стор
const tasks = reactive(initialTasks);

watch(tasks, () => {
  if (isFound && note?.id) {
    tasks.sort(sortTasksByDone);

    const noteEdited: Note = {
      ...note,
      tasks: cloneDeep(tasks).sort(sortByDate),
    };

    notesStore.edit(noteEdited);
  }
});
</script>

<style>
.note-view__task--done label {
  text-decoration: line-through;
}
</style>
