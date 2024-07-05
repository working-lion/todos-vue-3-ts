<template>
  <div class="task-edit-wrap">
    <Checkbox
      :id="`task-checkbox-${id}`"
      v-model="done"
    />
    <Input
      class="task-edit__input"
      :id="`task-input-${id}`"
      v-model="title"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import Checkbox from '@/components/ui/inputs/VCheckbox.vue';
import Input from '@/components/ui/inputs/VInput.vue';
import { getDate } from '@/utils/date';

interface Props {
  id: string;
  title: string;
  done: boolean;
  createdAt: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  title: '',
  done: false,
  createdAt: '',
});

const emit = defineEmits(['update:title', 'update:done', 'update:createdAt']);

const title = ref(props.title);
const done = ref(props.done);

watch(title, (titleNew) => {
  emit('update:title', titleNew);
  emit('update:createdAt', getDate());
});

watch(done, (doneNew) => {
  emit('update:done', doneNew);
  emit('update:createdAt', getDate());
});
</script>

<style>
.task-edit-wrap {
  display: flex;
}

.task-edit__input {
  margin-left: 10px;
  width: 500px;
}
</style>
