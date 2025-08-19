import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Notify } from 'quasar';
import { ref } from 'vue';
import type { AppSettingsOptionsItems } from '@/components/Blocks/AppSettings/AppSettingsOptions/AppSettingsOptions.types';
import AppSettingsOptions from './AppSettingsOptions.vue';

type Story = StoryObj<typeof AppSettingsOptions>;

const options1: AppSettingsOptionsItems = {
  inputs: {
    input1: {
      label: 'Поле ввода 1',
      value: '',
      resetFn() {
        this.value = '';
      },
    },
    input2: {
      label: 'Поле ввода 2',
      value: '',
      resetFn() {
        this.value = '';
      },
    },
  },
  buttons: {
    button1: {
      label: 'Кнопка 1',
      fn() {
        Notify.create({
          message: 'Сообщение',
        });
      },
    },
    button2: {
      label: 'Кнопка 2',
      fn() {
        Notify.create({
          message: 'Сообщение 2',
        });
      },
    },
  },
};

const options2: AppSettingsOptionsItems = {
  flags: {
    flag1: {
      label: 'Флажок 1',
      value: false,
    },
    flag2: {
      label: 'Флажок 2',
      value: true,
    },
  },
  buttons: {
    button1: {
      label: 'Кнопка 1',
      fn() {
        Notify.create({
          message: 'Сообщение',
        });
      },
    },
  },
};

/**
 * Компонент для непосредственного отображения настроек приложения<br>
 * Поддерживает три типа элементов, сгруппированных по типам:<br>
 *<br>
 * **inputs** - поля ввода<br>
 * `label` - отображаемая подпись для поля ввода<br>
 * `value` - значение поля (модель)<br>
 * `resetFn` - функция, вызываемая при сбросе значения<br>
 * <br>
 * **buttons** - кнопки<br>
 * `label` - текст внутри кнопки<br>
 * `fn` - функция-обработчик кнопки<br>
 * <br>
 * **flags** - чекбоксы<br>
 * `label` - подпись элемента<br>
 * `value` - значение флага (true/false)<br>
 * <br>
 * Порядок отображения групп соответствует порядку следования ключей в объекте настроек<br>
 */
const meta: Meta<typeof AppSettingsOptions> = {
  component: AppSettingsOptions,
  argTypes: {
    options: {
      description: 'Настройки компонента',
    },
  },
  render: (args) => ({
    components: { AppSettingsOptions },
    setup() {
      const appSettingsOptions = ref<AppSettingsOptionsItems>(args.options);

      return {
        appSettingsOptions,
      };
    },
    template: '<app-settings-options :options="appSettingsOptions" />',
  }),
};
export default meta;

export const Options1: Story = {
  args: {
    options: options1,
  },
};

export const Options2: Story = {
  args: {
    options: options2,
  },
};
