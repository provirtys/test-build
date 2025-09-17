<template>
  <div class="striped-card" :class="classList">
    <h4 v-if="title" class="striped-card__title">{{ title }}</h4>
    <p v-if="text" class="striped-card__text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { StripedCardProps } from '@/components/Elements/StripedCard';

const props = defineProps<StripedCardProps>();

const classList = computed(() => ({
  [`striped-card--${props.color}`]: props.color,
}));
</script>

<style scoped lang="scss">
.striped-card {
  min-height: 80px;
  padding: 15px 12px;
  border-radius: 4px;
  background-color: $light-gray-55;
  border-left: 4px solid $light-gray;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &--success {
    background-color: $success-10;
    border-left-color: $success;
  }

  &--error {
    background-color: $error-10;
    border-left-color: $error;
  }

  &--info {
    background-color: $info-10;
    border-left-color: $info;
  }

  &--warning {
    background-color: $warning-10;
    border-left-color: $warning;
  }

  &__title {
    @include font(VelaSans, $font-size-p4, 1, 400);
    color: $dark-gray-70;
  }

  &__text {
    @include font(VelaSans, $font-size-p3, 1.5, 400);
    color: $dark-gray;
    margin-bottom: 0;
  }
}
</style>