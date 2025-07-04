<template>
  <div class="loading__animation">
    <img
      v-if="isInternetError"
      class="icon"
      src="@base/assets/images/no-wifi.svg"
      :alt="t('loading.internet_false')"
    />
    <loading-animation v-else />
    <div class="loading__text">{{ t('loading.' + loadingType) }}</div>
    <div v-if="isInternetError" class="loading__error">{{ t('loading.try_again') }}</div>
    <div v-else class="loading__error">{{ t('loading.wait') }}</div>
    <v-button
      v-if="isInternetError"
      background="red"
      color="white"
      size="lg"
      class="mt-5"
    >{{t('loading.retry')}}</v-button>
  </div>
</template>

<script setup>
import { LoadingAnimation, VButton } from '@base';
import { setupI18n } from '@base/i18n.js';
import { computed } from 'vue';

const { t } = setupI18n();

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
    font-family: 'Ubuntu', sans-serif;
    font-size: $m-2;
    margin-bottom: 10px;
  }
  &__error {
    font-family: 'Ubuntu', sans-serif;
    font-size: $font-size-h6;
  }
}
</style>
