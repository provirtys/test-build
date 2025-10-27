<template>
  <div class="status-card" :class="classList">
    <div class="status-card__background"></div>
    <div class="status-card__container">
      <div class="status-card__title">{{ title }}</div>
      <div class="status-card__content">
        <div class="status-card__text">{{ text }}</div>
        <div class="status-card__label">{{ label }}</div>
      </div>
    </div>
    <button v-if="togglerStatus !== null" class="status-card__btn" @click="togglerStatus = !togglerStatus">
      <v-icon name="arrow-down" size="12"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from '@base';
import { colors } from 'quasar';
import { computed } from 'vue';
import type { StatusCardProps, TogglerStatus } from '@/components/Elements/StatusCard/StatusCard.types';

const props = withDefaults(defineProps<StatusCardProps>(), {
  startColor: 'light-gray-55',
  behindColor: 'light-gray-55',
});

const togglerStatus = defineModel<TogglerStatus>('togglerStatus', {
  default: null,
});

const classList = computed(() => ({
  [`status-card--${props.color}`]: props.color,
  'status-card--active': togglerStatus.value,
}));
const backgroundWidth = computed(() => {
  if (!props.progress || props.progress < 0) {
    return '0%';
  } else if (props.progress > 100) {
    return '100%';
  }

  return `${props.progress}%`;
});
const startBackgroundColor = computed(() => colors.getPaletteColor(props.startColor));
const endBackgroundColor = computed(() => {
  if (props.endColor) {
    return colors.getPaletteColor(props.endColor);
  }

  if (props.color) {
    return colors.getPaletteColor(`${props.color}-25`);
  }

  return null;
});
const behindBackgroundColor = computed(() => colors.getPaletteColor(props.behindColor));
</script>

<style scoped lang="scss">
.status-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: v-bind(behindBackgroundColor);

  &--active {
    .status-card__btn {
      background-color: $primary-text;
      color: $light-gray-40;
    }
  }

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: v-bind(backgroundWidth);
    background: linear-gradient(to right, v-bind(startBackgroundColor), v-bind(endBackgroundColor));
  }

  &__container {
    position: relative;
    padding: 20px;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    @include font(VelaSans, $font-size-p3, 1, 500);
    color: $dark-gray-70;
    text-align: left;
  }

  &__content {
    display: flex;
    gap: 8px;
    align-items: flex-end;
  }

  &__text {
    @include font(VelaSans, $font-size-h6, 1, 400);
    color: $dark-gray;
    display: inline-block;
  }

  &__label {
    @include font(VelaSans, $font-size-p3, 1, 400);
    color: $dark-gray-70;
    display: inline-block;
  }

  &__btn {
    position: absolute;
    border: none;
    right: 4px;
    bottom: 4px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: $primary-text-15;
    color: $primary-text;
    cursor: pointer;
  }
}
</style>