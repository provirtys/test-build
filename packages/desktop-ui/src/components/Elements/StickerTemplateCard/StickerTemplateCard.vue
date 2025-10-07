<template>
  <v-card class="sticker-template-card" :title="name">
    <div class="sticker-template-card__image-container">
      <img class="sticker-template-card__image" :src="base64Image" :alt="name">
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { VCard } from '@';
import type { StickerTemplateCardProps } from './StickerTemplateCard.types';

defineProps<StickerTemplateCardProps>();
</script>

<style scoped lang="scss">
.sticker-template-card {
  cursor: pointer;
  overflow: hidden;

  &__image-container {
    max-width: 100%;
    height: 153px;
    text-align: center;
  }

  &__image {
    max-width: 100%;
    height: 100%;
  }

  :deep(.v-card__title) {
    @include font(VelaSans, $font-size-p1, 1, 400);
    color: $dark-gray;
  }
}
</style>