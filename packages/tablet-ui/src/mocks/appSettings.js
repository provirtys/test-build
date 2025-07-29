import { sleep } from '@integrity/base-ui/src/utils/sleep.js';

export const appSettings = {
  userSettings: {
    buttons: {
      unlock: {
        label: 'Разблокировать кнопку',
        async fn() {
          await setButtonToLoadingState(this);
        },
        loading: false,
      },
      lock: {
        label: 'Заблокировать кнопку',
        async fn() {
          await setButtonToLoadingState(this);
        },
        loading: false,
      },
      reset: {
        label: 'Сбросить счетчики',
        async fn() {
          await setButtonToLoadingState(this);
        },
        loading: false,
      },
      clear: {
        label: 'Очистить очередь',
        async fn() {
          await setButtonToLoadingState(this);
        },
        loading: false,
      },
    },
  },
  devSettings: {
    inputs: {
      apiUrl: {
        label: 'Адрес для запросов',
        value: 'https://api-url.ru',
        resetFn() {
          this.value = '';
        },
      },
      cameraUrl: {
        label: 'Адрес для камеры',
        value: 'https://camera-url.ru',
        resetFn() {
          this.value = '';
        },
      },
      serviceName: {
        label: 'Имя сервиса',
        value: 'storybook.api.v1.tablet-ui',
        resetFn() {
          this.value = '';
        },
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
};

async function setButtonToLoadingState(button) {
  button.loading = true;
  await sleep(1000);
  button.loading = false;
}
