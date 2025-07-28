import { sleep } from '@integrity/base-ui/src/utils/sleep.js';
import { appSettings } from '@mocks/appSettings.js';
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useMainStore = defineStore('main', () => {
  const sidebarHasError = ref(false);
  const isFullscreen = ref(false);
  const isStatusReady = ref(false);
  const appSettingsOptions = reactive({
    userSettings: {
      buttons: {
        unlock: {
          label: 'Разблокировать кнопку',
          fn: setButtonToLoadingState.bind(null, 'unlock'),
          loading: false,
        },
        lock: {
          label: 'Заблокировать кнопку',
          fn: setButtonToLoadingState.bind(null, 'lock'),
          loading: false,
        },
        reset: {
          label: 'Сбросить счетчики',
          fn: setButtonToLoadingState.bind(null, 'reset'),
          loading: false,
        },
        clear: {
          label: 'Очистить очередь',
          fn: setButtonToLoadingState.bind(null, 'clear'),
          loading: false,
        },
      },
    },
    devSettings: {
      inputs: {
        apiUrl: {
          label: 'Адрес для запросов',
          value: 'https://api-url.ru',
          resetFn: resetInputValue.bind(null, 'apiUrl'),
        },
        cameraUrl: {
          label: 'Адрес для камеры',
          value: 'https://camera-url.ru',
          resetFn: resetInputValue.bind(null, 'cameraUrl'),
        },
        serviceName: {
          label: 'Имя сервиса',
          value: 'storybook.api.v1.tablet-ui',
          resetFn: resetInputValue.bind(null, 'serviceName'),
        },
      },
      buttons: {
        streamPage: {
          label: 'Stream page',
          fn: () => console.log('navigateToCameraPageFn'),
        },
        errorsPage: {
          label: 'Errors page',
          fn: () => console.log('navigateToErrorsPageFn'),
        },
      },
      flags: {
        mockData: {
          label: 'Использовать моковые данные',
          value: false,
        },
      },
    },
    devMode: false,
  });

  async function setButtonToLoadingState(id) {
    appSettingsOptions.value.userSettings.buttons[id].loading = true;
    await sleep(1000);
    appSettingsOptions.value.userSettings.buttons[id].loading = false;
  }

  function resetInputValue(id) {
    appSettingsOptions.value.devSettings.inputs[id].value = '';
  }

  return {
    sidebarHasError,
    isFullscreen,
    isStatusReady,
    appSettingsOptions,
  };
});
