<template>
  <RouterLink
    class="v-link"
    :to="link"
    :title="title"
    ><slot
  /></RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface Pros {
  link: string;
  title?: string;
}

defineProps<Pros>();
</script>

<style>
.v-link {
  display: inline-flex;
  border: 1px solid wheat;
  padding: 5px 15px;
}
</style>
