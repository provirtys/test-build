<template>
  <div class="status-label" :class="classList">
    {{ label }}
    <status-indicator
        class="pointer-icon"
        :color="props.color"
        :is-animate="isAnimate"
    ></status-indicator>
  </div>
</template>

<script setup>
import StatusIndicator from '@components/redesign/StatusIndicator.vue';
import { computed } from 'vue';

const props = defineProps({
    /** Цвет индикатора статуса принтера */
    color: {
        type: String,
        default: '',
    },
    /** Текст статуса принтера */
    label: {
        type: String,
        default: '',
    },
    /** Текст статуса принтера */
    isAnimate: {
        type: Boolean,
        default: false,
    },
    /** Режим отладки */
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

<style lang="scss">
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
