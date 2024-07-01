<template>
  <label :for="id">{{ label }}</label>
  <input
    :id="id"
    type="text"
    :value="props.modelValue"
    :required="required"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },

  // TODO: уникальный id
  id: {
    type: String,
    default: '',
  },

  type: {
    type: String,
    default: 'text',
  },

  name: {
    type: String,
    default: '',
  },

  label: {
    type: String,
    default: '',
  },

  required: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);
</script>
