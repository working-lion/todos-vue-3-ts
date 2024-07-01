<template>
  <AddNote @add="add" />
</template>

<script setup lang="ts">
import AddNote from '@/components/AddNote.vue';

const add = (note) => {
  console.dir(note);
};
</script>
