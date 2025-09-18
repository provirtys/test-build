<template>
  <div class="v-card" :class="classList">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { VCardProps } from '@/components/ui/VCard/VCard.types';

const props = withDefaults(defineProps<VCardProps>(), {
  stretch: true,
});

const classList = computed(() => ({
  'v-card--stretch': props.stretch,
}));
</script>

<style scoped lang="scss">
.v-card {
  padding: 20px;
  background-color: $light-gray-40;
  border-radius: 8px;
  width: fit-content;

  &--stretch {
    width: auto;
  }
}
</style>