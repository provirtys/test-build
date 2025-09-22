<template>
  <div class="info-grid" :class="classList">
    <div v-for="(_, idx) in Array.from({length: rowsCount * columnsCount})" :key="idx" class="info-grid__item"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { InfoGridProps } from './InfoGrid.types';

const { rowsCount, columnsCount, height, isLight } = defineProps<InfoGridProps>();

const classList = computed(() => ({
  'info-grid--light': isLight,
}));
</script>

<style scoped lang="scss">
.info-grid {
  display: grid;
  grid-template-rows: repeat(v-bind(rowsCount), 1fr);
  grid-template-columns: repeat(v-bind(columnsCount), 1fr);
  gap: 4px;
  height: v-bind(height);


  &--light {
    .info-grid__item {
      background-color: $info-25;
    }
  }

  &__item {
    background-color: $info-40;
    border-radius: 4px;
  }
}
</style>