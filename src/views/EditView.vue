<template>
  <div>Страница редактирования {{ $route.params.id }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const noteId = route.params.id;
</script>

<style scoped></style>
