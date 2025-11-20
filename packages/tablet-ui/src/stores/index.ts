import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import type { AppSettingsConf } from '@';
import { appSettings } from '@/mocks/appSettings';

export const useMainStore = defineStore('main', () => {
  const isFullscreen = ref(false);
  const isStatusReady = ref<undefined | boolean>(false);
  const appSettingsOptions = reactive<AppSettingsConf>(appSettings);

  return {
    isFullscreen,
    isStatusReady,
    appSettingsOptions,
  };
});
