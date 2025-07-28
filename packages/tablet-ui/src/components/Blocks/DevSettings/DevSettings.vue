<template>
  <q-item class="q-px-none" v-for="(input, key) in options.inputs" :key="key">
    <q-input
      class="q-mr-md debug-input full-width"
      v-model="input.value"
      :label="input.label"
      outlined
      debounce="500"
    >
      <template #append>
        <q-icon name="refresh" class="cursor-pointer" @click="input.resetFn"/>
      </template>
    </q-input>
  </q-item>
  <q-btn
    v-for="btn in options.buttons"
    class="q-ml-sm full-width q-mb-sm"
    @click="btn.fn"
    size="12px"
  >
    {{ btn.label }}
  </q-btn>
  <q-checkbox v-for="flag in options.flags" v-model="flag.value" :label="flag.label"/>
</template>
<script setup>
const props = defineProps({
  options: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>
