<template>
    <div class="loading-animation">
        <img v-if="isInternetError" class="icon" src="../assets/images/no-wifi.svg" alt="No internet connection" />
        <LoadingAnimation v-else />
        <div class="h2">{{ $t('loading.' + loadingType) }}</div>
        <div v-if="isInternetError" class="h3">{{ $t('loading.try_again') }}</div>
        <div v-else class="h3">{{ $t('loading.wait') }}</div>
        <BaseButton v-if="isInternetError" :background="'red'" :color="'white'" :size="'large'"
            :text="$t('loading.retry')" class="mt-5"></BaseButton>
    </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'
import LoadingAnimation from './LoadingAnimation.vue'
// import * as constants from '../constants/common'
// import * as colors from '../constants/colors'
// import * as size from '../constants/sizes'
import { computed } from 'vue'

const props = defineProps({
  /** Тип загрузки*/
    loadingType: { type: String, default: '' }
})

const isInternetError = computed(() => {
    return props.loadingType === 'internet_false'
})
</script>

<style lang="scss">
.loading-animation {
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
</style>
