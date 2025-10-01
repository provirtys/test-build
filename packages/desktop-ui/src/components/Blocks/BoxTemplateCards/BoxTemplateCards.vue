<template>
  <div class="box-template-cards">
    <box-template-card v-for="card in cards" :key="card.title" v-bind="card"/>
  </div>
</template>

<script setup lang="ts">
import { BoxTemplateCard } from '@';
import type { BoxTemplateCardsProps } from './BoxTemplateCards.types';

defineProps<BoxTemplateCardsProps>();
</script>

<style scoped lang="scss">
.box-template-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
</style>