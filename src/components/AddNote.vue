<template>
  <div class="add-note">
    <div>Страница добавления заметки</div>

    <Form>
      <Input
        v-model="title"
        required
        label="Заголовок"
      />

      <div
        v-for="(task, i) in tasks"
        :key="i"
      >
        <Input
          v-model="tasks[i]"
          :label="`Задача ${i + 1}`"
        />
      </div>

      <div><Button @click="add">Добавить</Button></div>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { watch, reactive } from 'vue';

import { useCounterStore } from '@/stores/counter';

import Form from '@/components/ui/Form.vue';
import Input from '@/components/ui/Input.vue';
import Button from '@/components/ui/Button.vue';

const TASKS_COUNT_DEFAULT = 3;
const TASKS_TITLE_DEFAULT = '';

const emit = defineEmits(['add']);

const counter = useCounterStore();
const newIndex = counter.getCount();

const title = defineModel('title');
const tasks = reactive(Array(TASKS_COUNT_DEFAULT).fill(TASKS_TITLE_DEFAULT));

watch(tasks, (newTasks) => {
  // TODO:
  // прописать createdAt
  // прописать done
  if (newTasks.every((t) => !!t)) {
    tasks.push(TASKS_TITLE_DEFAULT);
  }
});

const add = () => {
  // TODO: валидация

  emit('add', { title, tasks: tasks.filter((t) => Boolean(t)) });
};
</script>
