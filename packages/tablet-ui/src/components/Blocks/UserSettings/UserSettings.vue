<template>
  <div>
    <q-btn
      v-for="(button, key) in options.buttons"
      :key="key"
      class="q-my-sm full-width"
      :loading="button.loading"
      size="12px"
      @click="button.fn"
    >
      {{ button.label }}
    </q-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Object,
    required: false,
    default: () => ({}),
  },
});
</script>