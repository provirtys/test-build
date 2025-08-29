<template>
  <div class="main-header">
    <button v-show="showBackButton" @click="emit('back')" class="main-header__back-button">
      <v-icon name="arrow-back-rounded" width="16" height="14"/>
    </button>
    <div class="main-header__content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from '@base';
import type { MainHeaderEmits, MainHeaderProps } from '@/components/Layouts/MainHeader/MainHeader.types';

withDefaults(defineProps<MainHeaderProps>(), {
  showBackButton: false,
});

const emit = defineEmits<MainHeaderEmits>();
</script>

<style scoped lang="scss">
.main-header {
  display: flex;
  align-items: center;

  &__back-button {
    border: none;
    cursor: pointer;
    position: absolute;
    padding: 0;
  }

  &__content {
    color: $dark-gray-70;
    margin-inline: auto;
  }
}
</style>
