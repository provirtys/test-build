import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import type { AppSettings } from '@/components/Blocks/AppSettings/AppSettings.types';
import { appSettings } from '@/mocks/appSettings';

export const useMainStore = defineStore('main', () => {
  const isFullscreen = ref(false);
  const isStatusReady = ref<undefined | boolean>(false);
  const appSettingsOptions = reactive<AppSettings>(appSettings);

  return {
    isFullscreen,
    isStatusReady,
    appSettingsOptions,
  };
});
