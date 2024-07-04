<template>
  <form
    action=""
    @submit.prevent="void 0"
  >
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
// TODO: накрутить валидацию
const MESSAGES_DEFAULT = {
  required: 'Обязательное поле',
  minLength: 'Минимальная длина поля {n}',
};
</script>
