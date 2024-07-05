<template>
  <div class="input-wrap">
    <label
      class="input__label"
      :for="id"
      >{{ label }}</label
    >
    <input
      :id="id"
      class="input"
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number;
  id: string;
  label?: string;
  placeholder?: string;
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  id: '',
  label: '',
  placeholder: '',
});

const emit = defineEmits(['update:modelValue']);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;

  emit('update:modelValue', target.value);
};
</script>

<style>
.input-wrap {
  display: flex;
  flex-direction: column;
}

.input {
  border-radius: 8px;
  outline: none;
  padding: 5px 10px;
  font-size: 16px;
  color: gray;
}

.input__label {
  font-size: 14px;
  display: block;
}
</style>
