<template>
  <div class="package-template-cards">
    <package-template-card v-for="card in cards" :key="card.title" v-bind="card"/>
  </div>
</template>

<script setup lang="ts">
import { PackageTemplateCard } from '@';
import type { PackageTemplateCardsProps } from './PackageTemplateCards.types';

defineProps<PackageTemplateCardsProps>();
</script>

<style scoped lang="scss">
.package-template-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
</style>