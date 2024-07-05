<template>
  <input
    :id="id"
    type="checkbox"
    v-model="checked"
    class="checkbox"
  />
  <label
    :for="id"
    v-if="label"
    >{{ label }}</label
  >
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  modelValue?: boolean;
  id: string;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  id: '',
  label: '',
});

const emit = defineEmits(['update:modelValue']);

const checked = ref(props.modelValue);

const onChange = (checked: boolean) => {
  emit('update:modelValue', checked);
};

watch(checked, onChange);
</script>

<style>
.checkbox {
  cursor: pointer;
}

label {
  margin-left: 10px;
  cursor: pointer;
}
</style>
