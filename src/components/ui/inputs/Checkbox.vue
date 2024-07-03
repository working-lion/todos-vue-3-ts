<template>
  <input
    :id="id"
    type="checkbox"
    v-model="checked"
  />
  <label :for="id"></label>
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
