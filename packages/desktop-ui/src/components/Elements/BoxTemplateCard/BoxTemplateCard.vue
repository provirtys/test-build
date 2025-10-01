<template>
  <v-card class="box-template-card">
    <div class="box-template-card__header">
        <span class="box-template-card__size">
          {{ x }}x{{ y }}
        </span>
      <h3 v-if="name" class="box-template-card__title">{{ name }}</h3>
      <div v-if="layers && layers > 1" class="box-template-card__layers">
        <v-icon name="layers" size="20" class="layers-icon"/>
        {{ layers }}
      </div>
    </div>
    <info-grid class="box-template-card__grid" :x :y height="160px" is-light/>
  </v-card>
</template>

<script setup lang="ts">
import { VIcon } from '@base';
import { InfoGrid, VCard } from '@';
import type { BoxTemplateCardProps } from './BoxTemplateCard.types';

defineProps<BoxTemplateCardProps>();
</script>

<style scoped lang="scss">
.box-template-card {

  &__header {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    @include font(VelaSans, $font-size-p1, 1, 400);
  }

  &__size, &__layers {
    color: $dark-gray-70;
  }

  &__layers {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .layers-icon {
    margin-right: 4px;
  }

  &__title {
    color: $dark-gray;
    @include font(VelaSans, $font-size-p1, 1, 400);
  }
}
</style>