<template>
  <div class="fallback-loader">
    <div v-if="!isLoading" class="column items-center q-gutter-sm">
      <v-icon v-if="fallbackIcon" :name="fallbackIcon" />
      <p v-if="fallbackText">{{ fallbackText }}</p>
      <q-btn class="q-mt-sm" size="md" @click="$emit('onUpdate')">{{ updateBtnText }}</q-btn>
    </div>
    <div v-else class="column q-gutter-md items-center">
      <q-spinner color="primary" size="3em" />
      <p v-if="loadingText" class="text-h6">{{ loadingText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from '@integrity/base-ui';
import type { FallbackLoaderEmits, FallbackLoaderProps } from '@/components/Blocks/FallbackLoader/FallbackLoader.types';

withDefaults(defineProps<FallbackLoaderProps>(), {
  loadingText: 'Обновление...',
  fallbackText: 'Ошибка',
  fallbackIcon: 'status-error',
  updateBtnText: 'Обновить',
  isLoading: false,
});

defineEmits<FallbackLoaderEmits>();
</script>
