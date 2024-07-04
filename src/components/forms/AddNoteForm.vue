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
          :createdAt="task.createdAt"
          v-model:title="task.title"
          v-model:done="task.done"
          @update:createdAt="updateCreatedAt($event, task)"
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
import { reactive, ref, watch } from 'vue';

import { useNotesStore } from '@/stores/notes';

import Form from '@/components/ui/form/VForm.vue';
import Input from '@/components/ui/inputs/VInput.vue';
import Button from '@/components/ui/VButton.vue';
import Actions from '@/components/ui/VActions.vue';
import TaskEdit from '@/components/TaskEdit.vue';

import { getDate } from '@/utils/date';

const TASKS_COUNT_DEFAULT = 3;

const emit = defineEmits(['add', 'chancel']);

const notesStore = useNotesStore();

const title = ref('');

const getEmptyTask = () => {
  return {
    title: '',
    done: false,
    createdAt: '',
  };
};

const getTasksDefault = () => {
  const tasksDefault = [];

  for (let i = 0; i < TASKS_COUNT_DEFAULT; i++) {
    tasksDefault.push(getEmptyTask());
  }

  return tasksDefault;
};

const tasks = reactive(getTasksDefault());

const getNotEmptyTasks = (tasks: Array<Task>) => {
  return tasks.filter((t) => Boolean(t.title));
};

watch(tasks, () => {
  const allTasksFilled = tasks.every((t) => Boolean(t.title));

  if (allTasksFilled) {
    const emptyTask = getEmptyTask();

    tasks.push(emptyTask);
  }
});

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

const updateCreatedAt = (createdAtNew: string, task: Task) => {
  if (!task.createdAt) {
    task.createdAt = createdAtNew;
  }
};
</script>

<style>
.add-note-form__title {
  margin-bottom: 20px;
}
</style>
