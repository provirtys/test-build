import { ref } from 'vue';
import { appSettings } from '@/mocks/appSettings.js';
import type { AppSettings as TAppSettings } from './AppSettings.types';
import AppSettings from './AppSettings.vue';

/**
 * Компонент с настройками приложения как для пользователя, так и для разработчика.<br>
 * Более подробно на странице [AppSettingsOptions](?path=/docs/blocks-appsettingsoptions--docs)
 */
export default {
  component: AppSettings,
  argTypes: {
    options: {
      description: 'Все настройки компонента, включающая настройки для пользователя и разработчика',
    },
  },
};

const BaseComponent = () => ({
  components: { AppSettings },
  setup() {
    const appSettingsOptions = ref(appSettings);

    const onUpdateOptions = (opt: TAppSettings) => {
      appSettingsOptions.value = opt;
    };

    return {
      appSettingsOptions,
      onUpdateOptions,
    };
  },
  template: '<app-settings :options="appSettingsOptions" @update:options="onUpdateOptions" />',
});

export const Standard = BaseComponent.bind({});
