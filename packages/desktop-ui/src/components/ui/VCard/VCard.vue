<template>
  <div class="v-card" :class="classList">
    <h3 v-if="title" class="v-card__title">{{ title }}</h3>
    <div v-if="$slots.default" class="v-card__content">
      <slot/>
    </div>
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
  display: flex;
  flex-direction: column;
  gap: 20px;

  &--stretch {
    width: auto;
  }

  &__title {
    @include font(Golos, $font-size-p1, 1, 500);
    color: $dark-gray-70;
  }
}
</style>