<template>
  <div class="notes-list">
    <NoteItem
      v-for="note in notes"
      :key="note.id"
      :note="note"
    />
  </div>
</template>

<script setup lang="ts">
import NoteItem from '@/components/notes/NoteItem.vue';

defineProps<{
  notes: Array<Note>;
}>();
</script>

<style>
.notes-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
