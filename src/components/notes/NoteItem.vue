<template>
  <div class="note-item">
    <div class="note-item__title">{{ note.title }}</div>
    <div class="note-item__tasks">
      <div
        class="note-item__task"
        v-for="task in note.tasks"
        :key="task.createdAt"
      >
        {{ task.title }} - {{ task.createdAt }}
      </div>
    </div>
    <Actions>
      <Button @click="edit">Редактировать</Button>
      <Button @click="remove">Удалить</Button>
    </Actions>
  </div>
</template>

<script setup lang="ts">
import Actions from '@/components/ui/Actions.vue';
import Button from '@/components/ui/Button.vue';

import { useNotesStore } from '@/stores/notes';

interface Props {
  note: Note;
}

const props = defineProps<Props>();

const notesStore = useNotesStore();

const remove = () => {
  notesStore.remove(props.note.id);
};

const edit = () => {
  console.log('editNote');
};
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

.note-item__tasks {
  padding-left: 16px;
}
</style>
