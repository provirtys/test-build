<template>
  <div class="v-breadcrumbs">
    <ul class="v-breadcrumbs__list">
      <li v-for="(item, idx) in items" class="v-breadcrumbs__item">
        <a class="v-breadcrumbs__link" @click="item.handler">
          {{ item.label }}
        </a>
        <span v-if="idx < items.length - 1" class="v-breadcrumbs__separator">/</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { VBreadcrumbsProps } from './VBreadcrumbs.types';

defineProps<VBreadcrumbsProps>();
</script>

<style scoped lang="scss">
.v-breadcrumbs {

  &__list {
    @include font(Golos, $font-size-h6, 1.2, 500);
    display: flex;
    list-style: none;
  }

  &__item:last-child &__link {
    color: $primary-text;
    pointer-events: none;
  }

  &__link {
    color: $primary-text-55;
    cursor: pointer;
  }

  &__separator {
    margin-inline: 4px 10px;
    color: $dark-gray-55;
  }
}
</style>