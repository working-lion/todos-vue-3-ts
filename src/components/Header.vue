<template>
  <header :title="title">
    <title>{{ title }}</title>

    <slot />
  </header>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style>
header {
  padding-bottom: 30px;
}
</style>
