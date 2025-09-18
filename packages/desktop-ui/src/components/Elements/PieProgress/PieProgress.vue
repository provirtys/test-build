<template>
  <div class="pie-progress">
    <div class="pie-progress__progress-bar"></div>
  </div>
</template>

<script setup lang="ts">
import { colors } from 'quasar';
import { computed, withDefaults } from 'vue';
import type { PieProgressProps } from '@/components/Elements/PieProgress/PieProgress.types';

const props = withDefaults(defineProps<PieProgressProps>(), {
  value: 10,
  size: 14,
  borderWidth: 2,
  color: 'warning',
});

const bindSize = computed(() => `${props.size}px`);
const bindProgress = computed(() => `${props.value}%`);
const bindColor = computed(() => colors.getPaletteColor(props.color));
const bindBorderWidth = computed(() => `${props.borderWidth}px`);
</script>

<style scoped lang="scss">
.pie-progress {
  position: relative;
  width: v-bind(bindSize);
  height: v-bind(bindSize);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border: v-bind(bindBorderWidth) solid v-bind(bindColor);

  &__progress-bar {
    position: absolute;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    border-radius: 50%;
    background: conic-gradient(v-bind(bindColor) v-bind(bindProgress), transparent 0);
  }
}
</style>