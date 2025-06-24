<template>
  <div class="fallback-loader">
    <div v-if="!isLoading" class="column items-center q-gutter-sm">
      <CommonIcon v-if="fallbackIcon" :name="fallbackIcon" />
      <p v-if="fallbackText">{{ fallbackText }}</p>
      <q-btn class="q-mt-sm" size="md" @click="$emit('onUpdate')">{{ updateBtnText }}</q-btn>
    </div>
    <div v-else class="column q-gutter-md items-center">
      <q-spinner color="primary" size="3em" />
      <p v-if="loadingText" class="text-h6">{{ loadingText }}</p>
    </div>
  </div>
</template>

<script setup>
import { CommonIcon } from "@base";

defineProps({
    loadingText: {
        type: String,
        default: "Обновление...",
    },
    fallbackText: {
        type: String,
        default: "Ошибка",
    },
    fallbackIcon: {
        type: String,
        default: "status-error",
    },
    updateBtnText: {
        type: String,
        default: "Обновить",
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
});

defineEmits(["onUpdate"]);
</script>
