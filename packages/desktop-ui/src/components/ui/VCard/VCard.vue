<template>
  <div class="v-card" :class="classList">
    <h3 v-if="title" class="v-card__title">{{ title }}</h3>
    <div v-if="$slots.default" class="v-card__content">
      <slot/>
    </div>
    <v-button-menu v-if="menuItems && menuItems.length" class="v-card__menu-btn" :items="menuItems" position-absolute/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { VButtonMenu } from '@/components/ui/VButtonMenu';
import type { VCardProps } from '@/components/ui/VCard/VCard.types';

const props = withDefaults(defineProps<VCardProps>(), {
  stretch: true,
  paddingX: '20px',
  paddingY: '20px',
  borderRadius: '8px',
});

const classList = computed(() => ({
  'v-card--stretch': props.stretch,
  [props.color === 'gray' ? 'bg-light-gray-70' : `bg-${props.color}-10`]: true,
  'v-card--flex': props.isFlex,
}));
</script>

<style scoped lang="scss">
.v-card {
  padding-inline: v-bind(paddingX);
  padding-block: v-bind(paddingY);
  background-color: $light-gray-40;
  border-radius: v-bind(borderRadius);
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  &--stretch {
    width: 100%;
  }

  &--flex {
    .v-card__content {
      display: flex;
      align-items: center;
    }
  }

  &__title {
    @include font(Golos, $font-size-p1, 1, 500);
    color: $dark-gray-70;
  }

  &__menu-btn {
    position: absolute;
    top: 4px;
    right: 4px;
  }
}
</style>