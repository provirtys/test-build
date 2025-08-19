<template>
  <div class="v-card" :class="classList">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { VCardProps } from '@/components/ui/VCard/VCard.types';

const props = withDefaults(defineProps<VCardProps>(), {
  bgColor: 'white',
});

const classList = computed(() => [`v-card--${props.bgColor}`]);
</script>

<style scoped lang="scss">
.v-card {
  padding: 16px;
  border-radius: 12px;

  &--white {
    background-color: $light-gray-40;
  }

  &--gray {
    background-color: $primary-text-10;
  }
}
</style>