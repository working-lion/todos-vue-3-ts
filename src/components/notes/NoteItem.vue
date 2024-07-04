<template>
  <div class="note-item">
    <RouterLink
      class="note-item__title"
      :to="`/note/${noteId}`"
      >{{ note.title }}</RouterLink
    >
    <ul class="note-item__tasks">
      <li
        class="note-item__task"
        v-for="task in tasks"
        :key="task.createdAt"
      >
        {{ task.title }} - {{ task.createdAt }}
      </li>
      <li v-if="isMore">...</li>
    </ul>
    <Actions>
      <VLink :link="`/edit/${noteId}`">Редактировать</VLink>
      <Button @click="remove">Удалить</Button>
    </Actions>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

import { useNotesStore } from '@/stores/notes';

import Actions from '@/components/ui/VActions.vue';
import Button from '@/components/ui/VButton.vue';
import VLink from '@/components/ui/VLink.vue';

import { sortByDate } from '@/utils/notes';

interface Props {
  note: Note;
}

const TASKS_COUNT_SHOWN = 3;

const props = defineProps<Props>();

const notesStore = useNotesStore();

const remove = () => {
  notesStore.remove(props.note.id);
};

const noteId = computed(() => props.note.id);

const tasks = computed(() => {
  return props.note.tasks
    ?.filter((t) => !t.done)
    .sort(sortByDate)
    .slice(0, TASKS_COUNT_SHOWN);
});

const isMore = computed(() => {
  if (!props.note.tasks) {
    return false;
  }

  return props.note.tasks.filter((t) => !t.done)?.length > TASKS_COUNT_SHOWN;
});
</script>

<style>
.note-item {
  padding: 10px;
  border: 1px solid wheat;
  border-radius: 5px;
}

.note-item__title {
  margin-bottom: 16px;
}
</style>
