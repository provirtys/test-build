import type { ExtendedArgs, ExtendedMeta, ExtendedStory } from '@integrity/shared/types/story';
import { expect } from 'storybook/test';
import { computed, ref } from 'vue';
import type { AppSettingsConf } from '@';
import { appSettings } from '@/mocks/appSettings';
import type { StatusBarActionType } from './index';
import { StatusBar } from './index';

type AdditionalArgs = {
  statusIsReady?: boolean;
  statusIsAnimated?: boolean;
  statusShowBackground?: boolean;
};

type Story = ExtendedStory<typeof StatusBar, AdditionalArgs>;
type Meta = ExtendedMeta<typeof StatusBar, AdditionalArgs>;
type Args = ExtendedArgs<typeof StatusBar, AdditionalArgs>;

const actions: Record<StatusBarActionType, string> = {
  home: 'Домой',
  back: 'Назад',
  logout: 'Выйти',
  complete: 'Завершить',
};

const testElements = (
  iconName: string,
  buttonText: string,
  statusText: string,
  isStatusSuccess: boolean,
  isLabelBackgroundShown: boolean,
  settingsDisabled: boolean,
) => {
  const buttonIconEl = document.querySelector('.status-line .v-button__icon-container use');
  const buttonTextEl = document.querySelector('.status-line .v-button__text');
  const statusLabelEl = document.querySelector('.status-line .status-label');
  const statusIndicatorEl = statusLabelEl?.querySelector('.status-indicator__dot');
  const settingsIconEl = document.querySelector('.status-line__settings-button');

  const colorSettings: Record<'true' | 'false', { label: string; dot: string }> = {
    true: {
      label: isLabelBackgroundShown ? 'rgba(116, 200, 32, 0.25)' : 'rgba(0, 0, 0, 0)',
      dot: 'rgb(116, 200, 32)',
    },
    false: {
      label: isLabelBackgroundShown ? 'rgba(200, 52, 32, 0.25)' : 'rgba(0, 0, 0, 0)',
      dot: 'rgb(200, 52, 32)',
    },
  };

  if (buttonIconEl && buttonTextEl && statusLabelEl && statusIndicatorEl && settingsIconEl) {
    expect(buttonIconEl.getAttribute('xlink:href')).toBe(iconName);
    expect(buttonTextEl.textContent).toBe(buttonText);
    expect(statusLabelEl.textContent?.trim()).toBe(statusText);
    expect(window.getComputedStyle(statusLabelEl).backgroundColor).toBe(
      colorSettings[isStatusSuccess ? 'true' : 'false'].label,
    );
    expect(window.getComputedStyle(statusIndicatorEl).backgroundColor).toBe(
      colorSettings[isStatusSuccess ? 'true' : 'false'].dot,
    );
    expect(settingsIconEl.classList.contains('disabled')).toBe(settingsDisabled);
  }
};

/** Компонент верхней части приложения. <br>
 * Содержит:
 *  - Одну из кнопок действия - `Домой`, `Назад`, `Выход`
 *  - Заголовок текущего контекста приложения
 *  - Статус бэкенда
 *  - Кнопку для настроек приложения (через слот `append`)
 * */
const meta: Meta = {
  component: StatusBar,
  argTypes: {
    action: {
      description: 'Тип кнопки перехода',
      options: Object.keys(actions),
      control: {
        type: 'select',
        labels: actions,
      },
    },
    statusIsReady: {
      description: 'Статус - `Готово`/`Не готово`',
      control: {
        type: 'boolean',
      },
    },
    statusIsAnimated: {
      description: 'Статус - анимация',
      control: {
        type: 'boolean',
      },
    },
    statusShowBackground: {
      description: 'Статус - показывать задний фон',
      control: {
        type: 'boolean',
      },
    },
    title: {
      description: 'Наименование задачи',
    },
    isDisabled: {
      description: 'Неактивное состояние.',
    },
    status: {
      description:
        'Статус подключения. Меняется через аргументы `statusIsReady`, `statusIsAnimated` и `statusShowBackground`',
      table: {
        readonly: true,
      },
    },
  },
  args: {
    title: 'Список заданий',
    action: {
      type: 'home',
      fn: () => {},
    },
    statusIsReady: false,
    statusIsAnimated: false,
    statusShowBackground: false,
    isDisabled: false,
  },
  render: (args: Args) => ({
    components: { StatusBar },
    setup() {
      const appSettingsOptions = ref(appSettings);

      const status = computed(() => ({
        type: args.statusIsReady ? 'success' : 'error',
        sync: args.statusIsAnimated,
        active: args.statusShowBackground,
      }));

      const action = computed(() => ({
        type: args.action?.type,
        to: '/',
      }));

      const onUpdateOptions = (opt: AppSettingsConf) => {
        appSettingsOptions.value = opt;
      };

      return {
        args,
        status,
        action,
        appSettingsOptions,
        onUpdateOptions,
      };
    },
    template: `
    <StatusBar :action="action" :title="args.title" :status="status" :is-disabled="args.isDisabled">
      <template #append>
        <app-settings :options="appSettingsOptions" :is-disabled="args.isDisabled" @update:options="onUpdateOptions"/>
      </template>
    </StatusBar>`,
  }),
};
export default meta;

export const HomeNotReady: Story = {
  play: () => {
    testElements('#icon-home', 'Домой', 'Не готово', false, false, false);
  },
};

export const BackReadySettingsDisabled: Story = {
  args: {
    statusIsReady: true,
    action: {
      type: 'back',
      fn: () => {},
    },
    isDisabled: true,
  },
  play: () => {
    testElements('#icon-arrow-back', 'Назад', 'Готово', true, false, true);
  },
};

export const LogoutReadyWithBackgroundAndAnimation: Story = {
  args: {
    statusIsReady: true,
    statusIsAnimated: true,
    statusShowBackground: true,
    action: {
      type: 'logout',
      fn: () => {},
    },
  },
  play: () => {
    testElements('#icon-logout-dark', 'Выход', 'Готово', true, true, false);
  },
};
