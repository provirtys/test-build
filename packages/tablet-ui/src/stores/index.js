import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('main', () => {
  const headerTitle = ref('');
  const sidebarHasError = ref(false);
  const isFullscreen = ref(false);
  const isStatusReady = ref(false);
  const currentPage = ref('main');

  return {
    headerTitle,
    sidebarHasError,
    isFullscreen,
    isStatusReady,
    currentPage,
  };
});
