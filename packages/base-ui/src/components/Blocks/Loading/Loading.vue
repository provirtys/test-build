<template>
  <div class="loading__animation">
    <img
      v-if="isInternetError"
      class="icon"
      src="../../../assets/images/no-wifi.svg"
      :alt="t('loading.internet_false')"
    />
    <loading-animation v-else />
    <div class="loading__text">{{ t('loading.' + loadingType) }}</div>
    <div v-if="isInternetError" class="loading__error">{{ t('loading.try_again') }}</div>
    <div v-else class="loading__error">{{ t('loading.wait') }}</div>
    <v-button
      v-if="isInternetError"
      color="red"
      size="lg"
      class="mt-5"
    >{{t('loading.retry')}}</v-button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { LoadingAnimation, VButton } from '@';
import type { LoadingProps } from '@/components/Blocks/Loading/Loading.types';

const { t } = useI18n();

const props = withDefaults(defineProps<LoadingProps>(), {
  loadingType: '',
});

const isInternetError = computed(() => {
  return props.loadingType === 'internet_false';
});
</script>

<style lang="scss" scoped>
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
