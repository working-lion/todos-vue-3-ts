<template>
  <div class="note-item">
    <div class="note-item-content">
      <RouterLink
        class="note-item__title"
        :to="`/note/${noteId}`"
        title="Подробнее"
        >{{ note.title }}</RouterLink
      >
      <ul
        class="note-item__tasks"
        v-if="tasks?.length"
      >
        <li
          class="note-item__task"
          v-for="task in tasks"
          :key="task.createdAt"
        >
          {{ task.title }}
        </li>
        <li v-if="isMore">...</li>
      </ul>
    </div>
    <Actions class="note-item-actions">
      <LinkEdit :note-id="noteId" />
      <ButtonDelete :note-id="noteId" />
    </Actions>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

import Actions from '@/components/ui/VActions.vue';

import { sortByDate } from '@/utils/notes';
import ButtonDelete from '@/components/buttons/ButtonDelete.vue';
import LinkEdit from '@/components/links/LinkEdit.vue';

interface Props {
  note: Note;
}

const TASKS_COUNT_SHOWN = 3;

const props = defineProps<Props>();

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
  display: flex;
  flex-direction: column;
}

.note-item-content {
  flex: 1 1;
}

.note-item__title {
  font-size: 18px;
  margin-bottom: 16px;
  text-decoration: none;
}

.note-item__title:hover {
  text-decoration: underline;
}

.note-item-actions {
  margin-bottom: 0;
}
</style>
