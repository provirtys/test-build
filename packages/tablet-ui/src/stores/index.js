import { appSettings } from '@mocks/appSettings.js';
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useMainStore = defineStore('main', () => {
  const isFullscreen = ref(false);
  const isStatusReady = ref(false);
  const appSettingsOptions = reactive(appSettings);

  return {
    isFullscreen,
    isStatusReady,
    appSettingsOptions,
  };
});
