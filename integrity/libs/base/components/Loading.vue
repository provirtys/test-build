<template>
  <div class="loading__animation">
    <img
      v-if="isInternetError"
      class="icon"
      src="../assets/images/no-wifi.svg"
      alt="No internet connection"
    />
    <LoadingAnimation v-else />
    <div class="loading__text">{{ t('loading.' + loadingType) }}</div>
    <div v-if="isInternetError" class="loading__error">
      {{ t('loading.try_again') }}
    </div>
    <div v-else class="loading__error">{{ t('loading.wait') }}</div>
    <BaseButton
      v-if="isInternetError"
      :background="'red'"
      :color="'white'"
      :size="'large'"
      :text="t('loading.retry')"
      class="mt-5"
    ></BaseButton>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import LoadingAnimation from './LoadingAnimation.vue';
import { computed } from 'vue';

const props = defineProps({
  /** Тип загрузки*/
  loadingType: { type: String, default: '' },
});

const isInternetError = computed(() => {
  return props.loadingType === 'internet_false';
});
</script>

<style lang="scss">
.loading {
  &__animation {
    padding: $s-3;
    min-height: 270px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: $light-gray-70;
    z-index: 9999;
  }
  &__text {
    font-family: Ubuntu-regular, serif;
    font-size: $m-2;
    margin-bottom: 10px;
  }
  &__error {
    font-family: Ubuntu-regular, serif;
    font-size: $font-size-h6;
  }
}
</style>
