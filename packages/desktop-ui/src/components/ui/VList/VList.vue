<template>
  <ul class="v-list">
    <li v-for="item in items" :key="item.label" class="v-list__item" @click="item.handler">
      <v-icon v-if="item.icon" :name="item.icon" size="14"/>
      {{ item.label }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { VIcon } from '@base';
import type { VListProps } from './VList.types';

defineProps<VListProps>();
</script>

<style scoped lang="scss">
.v-list {
  list-style: none;
  background-color: $secondary;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;

  &__item {
    @include font(Golos, $font-size-p4, 1, 500);
    color: $primary-text;
    padding: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: $primary-text-15;
    }
  }
}
</style>