<template>
  <div
    v-if="isEmpty"
    class="notes-list-empty"
  >
    <div class="notes-list-empty__title">Создайте свою первую заметку</div>
    <p><RouterLink to="/add">Создать заметку</RouterLink></p>
  </div>

  <div
    class="notes-list"
    v-else
  >
    <NoteItem
      v-for="note in notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import NoteItem from '@/components/notes/NoteItem.vue';

import { sortByDate } from '@/utils/notes';

const props = defineProps<{
  notes: Array<Note>;
}>();

const isEmpty = computed(() => {
  return !props.notes.length;
});

const notes = computed(() => {
  console.log(props.notes);
  // Сортировка значения свойства создаёт сайдэффект
  const notesClone = [...props.notes];

  return notesClone.sort(sortByDate);
});
</script>

<style>
.notes-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
</style>
