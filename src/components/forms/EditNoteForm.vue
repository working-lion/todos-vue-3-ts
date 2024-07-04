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
        <Button @click="save">Сохранить</Button>
        <Button @click="chancel">Отменить</Button>
      </Actions>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { cloneDeep } from 'lodash';

import { reactive, ref, watch } from 'vue';

import Form from '@/components/ui/form/VForm.vue';
import Input from '@/components/ui/inputs/VInput.vue';
import Button from '@/components/ui/VButton.vue';
import Actions from '@/components/ui/VActions.vue';
import TaskEdit from '@/components/TaskEdit.vue';

import { getDate } from '@/utils/date';
import { getEmptyNote, getEmptyTask, getNotEmptyTasks, getTasksDefault } from './utils';

interface Props {
  note?: Note | NoteNew;
}

const props = withDefaults(defineProps<Props>(), {
  note: getEmptyNote(),
});

const emit = defineEmits(['save', 'chancel']);

const title = ref(props.note.title);

const initialTasks = props.note.tasks?.length ? cloneDeep(props.note.tasks) : getTasksDefault();
const tasks = reactive(initialTasks);

watch(
  tasks,
  () => {
    const allTasksFilled = tasks.every((t) => Boolean(t.title));

    if (allTasksFilled) {
      const emptyTask = getEmptyTask();

      tasks.push(emptyTask);
    }
  },
  { immediate: true },
);

const save = () => {
  const titleNew = title.value;

  if (!titleNew) {
    alert('Заполните заголовок заметки');
  } else {
    const noteNew: NoteNew | Note = {
      title: title.value,
      tasks: getNotEmptyTasks(tasks),
      createdAt: props.note.createdAt || getDate(),
    };

    if (props.note.id) {
      noteNew.id = props.note.id;
    }

    emit('save', noteNew);
  }
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
