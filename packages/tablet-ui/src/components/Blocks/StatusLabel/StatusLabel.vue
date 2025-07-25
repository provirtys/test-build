<template>
  <div class="status-label" :class="classList">
    {{ label }}
    <status-indicator
        :color="props.color"
        :is-animate="isAnimate"
    ></status-indicator>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { StatusIndicator } from '@';

const props = defineProps({
  /** Цвет точки */
  color: {
    type: String,
    default: 'info',
  },
  /** Текст надписи */
  label: {
    type: String,
    default: '',
  },
  /** Включить анимацию у точки */
  isAnimate: {
    type: Boolean,
    default: false,
  },
  /** Показывать задний фон */
  showBackground: {
    type: Boolean,
    default: false,
  },
});

const classList = computed(() => ({
  'status-label--animating': props.isAnimate,
  [`bg-${props.color}-25`]: props.showBackground,
}));
</script>

<style lang="scss" scoped>
.status-label {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  padding: $s-2;
  background: none;
  color: $dark-gray-85;
  @include font('Golos', $font-size-p2, 24px, 500, -0.24px);
}
</style>
