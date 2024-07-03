<template>
  <div class="task">
    <Checkbox
      :id="`task-checkbox-${id}`"
      v-model="done"
    />
    <Input
      :id="`task-input-${id}`"
      v-model="title"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import Checkbox from '@/components/ui/inputs/Checkbox.vue';
import Input from '@/components/ui/inputs/Input.vue';

interface Props {
  id: string;
  title: string;
  done: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  title: '',
  done: false,
});

const emit = defineEmits(['update:title', 'update:done']);

const title = ref(props.title);
const done = ref(props.done);

watch(title, (titleNew) => {
  emit('update:title', titleNew);
});

watch(done, (doneNew) => {
  emit('update:done', doneNew);
});
</script>

<style>
.task {
  display: flex;
  flex-direction: row;
}
</style>
