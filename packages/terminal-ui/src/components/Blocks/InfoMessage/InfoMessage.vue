<template>
  <div class="info-message">
    <template v-for="(_, key) in items" :key>
      <p v-if="key === 'text'" class="info-message__text">{{ items.text!.value }}</p>
      <v-icon v-if="key === 'icon'" :name="items.icon!.name" :size="items.icon!.size"/>
      <img v-if="key === 'image'" :src="items.image!.path" :alt="items.image!.alt"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from '@base';
import type { InfoMessageProps } from '@/components/Blocks/InfoMessage/InfoMessage.types';

const props = withDefaults(defineProps<InfoMessageProps>(), {});
</script>

<style scoped lang="scss">
.info-message {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  &__text {
    margin: 0;
    @include fontAdaptive($font-size-p3, 20px, 500, 0.01em);
    text-align: center;
    color: $dark-gray-70;
    text-wrap: balance;
  }
}
</style>