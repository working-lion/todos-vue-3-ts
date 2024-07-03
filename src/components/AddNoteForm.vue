<template>
  <div class="add-note-form">
    <Form>
      <Input
        v-model="title"
        id="add-note-form-title"
        class="add-note-form__title"
        required
        label="Заголовок заметки"
      />

      <div class="add-note-form__tasks">
        <TaskEdit
          v-for="(task, i) in tasks"
          :key="i"
          :id="`task-${i}`"
          v-model:title="task.title"
          v-model:done="task.done"
        >
        </TaskEdit>
      </div>

      <Actions>
        <Button @click="add">Сохранить</Button>
        <Button @click="chancel">Отменить</Button>
      </Actions>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

import { useNotesStore } from '@/stores/notes';

import Form from '@/components/ui/Form.vue';
import Input from '@/components/ui/inputs/Input.vue';
import Button from '@/components/ui/Button.vue';
import Actions from '@/components/ui/Actions.vue';
import TaskEdit from '@/components/TaskEdit.vue';

import { getDate } from '@/utils/date';

const TASKS_COUNT_DEFAULT = 3;

const emit = defineEmits(['add', 'chancel']);

const notesStore = useNotesStore();

const title = ref('');

const getTasksDefault = () => {
  const tasksDefault = [];

  for (let i = 0; i < TASKS_COUNT_DEFAULT; i++) {
    tasksDefault.push({
      title: '',
      done: false,
      createdAt: getDate(),
    });
  }

  return tasksDefault;
};

const tasks = reactive(getTasksDefault());

const getNotEmptyTasks = (tasks: Array<Task>) => {
  return tasks.filter((t) => Boolean(t.title));
};

const add = () => {
  const noteNew: Note = {
    id: notesStore.getNewNoteId(),
    title: title.value,
    tasks: getNotEmptyTasks(tasks),
    createdAt: getDate(),
  };

  emit('add', noteNew);
};

const chancel = () => {
  emit('chancel');
};
</script>

<style>
.add-note-form__title {
  margin-bottom: 20px;
}
</style>
