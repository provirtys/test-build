import { Notify } from 'quasar';
import { ref } from 'vue';
import AppSettingsOptions from './AppSettingsOptions.vue';

const options1 = {
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

const options2 = {
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
export default {
  component: AppSettingsOptions,
  argTypes: {
    options: {
      description: 'Настройки компонента',
    },
  },
};

const BaseComponent = (args) => ({
  components: { AppSettings: AppSettingsOptions },
  setup() {
    const appSettingsOptions = ref(args.options);

    const onUpdateOptions = (opt) => {
      appSettingsOptions.value = opt;
    };

    return {
      appSettingsOptions,
      onUpdateOptions,
    };
  },
  template: '<app-settings :options="appSettingsOptions" @update:options="onUpdateOptions" />',
});

export const Options1 = BaseComponent.bind({});

Options1.args = {
  options: options1,
};

export const Options2 = BaseComponent.bind({});

Options2.args = {
  options: options2,
};
