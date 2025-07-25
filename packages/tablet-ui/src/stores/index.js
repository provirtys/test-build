import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('main', () => {
  const sidebarHasError = ref(false);
  const isFullscreen = ref(false);
  const isStatusReady = ref(false);

  return {
    sidebarHasError,
    isFullscreen,
    isStatusReady,
  };
});
