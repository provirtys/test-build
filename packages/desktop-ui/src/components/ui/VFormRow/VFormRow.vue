<template>
  <div class="v-form-row">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import type { VFormRowProps } from './VFormRow.types';

withDefaults(defineProps<VFormRowProps>(), {
  columns: 1,
});
</script>

<style scoped lang="scss">
.v-form-row {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  gap: 12px;
}
</style>