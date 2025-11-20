<template>
  <ul class="v-list">
    <template v-for="item in items" :key="item.label">
      <q-separator v-if="item.topDivider"/>
      <li class="v-list__item" @click="item.handler">
        <v-icon
          v-if="item.icon"
          :name="item.icon"
          size="14"
          :style="{color: getIconColor(item.iconColor || 'primary-text')}"
        />
        {{ item.label }}
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { VIcon } from '@integrity/base-ui';
import { colors } from 'quasar';
import type { VListProps } from './VList.types';

defineProps<VListProps>();

const getIconColor = (color: string) => {
  return colors.getPaletteColor(color);
};
</script>

<style scoped lang="scss">
.v-list {
  list-style: none;
  background-color: $secondary;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

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

  &__divider {
    margin-block: 4px;
    height: 1px;
    width: 100%;
    color: $light-gray;
  }
}
</style>