import MobileInput from '../components/MobileInput.vue';
import scanIconUrl from '../assets/images/scan-icon.svg';

const empty = '';
const icons = { empty, scanIconUrl };

/** Компонент поля ввода, используемый на мобильных устройствах. Можно настраивать его название, введенный текст и
 * текст-подсказку, указывать на наличие ошибки ввода, регулировать, является ли поле обязательным,
 * должно ли содержать иконку. */
export default {
  title: 'Mobile/Input',
  component: MobileInput,
  tags: ['autodocs'],
  args: {
    icon: empty,
  },
  argTypes: {
    modelValue: {
      description: 'Значение поля ввода.',
    },
    isRequired: {
      description: 'Обязательно ли заполнение этого поля ввода?',
    },
    labelText: {
      description: 'Текст над полем ввода.',
    },
    placeholder: {
      description:
        'Пример заполнения, текст-подсказка, отображающийся, когда поле ввода не заполнено.',
    },
    errorText: {
      description: 'Текст сообщения об ошибке.',
    },
    icon: {
      description: 'Нужна ли иконка внутри поля ввода?',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'radio',
        labels: {
          empty: 'Без иконки',
          scanIconUrl: 'Сканер',
        },
      },
    },
    inputName: {
      table: {
        disable: true,
      },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'light', value: '#f4f4f4' },
      ],
    },
  },
};

/** Поле для ввода почтового адреса, обязательное для заполнения. */
export const EmailInput = {
  args: {
    inputName: 'email1',
    isRequired: true,
    labelText: 'Email',
    type: 'email',
    placeholder: 'example@mail.ru',
  },
};

/** Поле для ввода почтового адреса, обязательное для заполнения. Некорректное заполнение */
export const EmailErrorInput = {
  args: {
    modelValue: 'example@mail',
    isRequired: true,
    inputName: 'email2',
    labelText: 'Email',
    type: 'email',
    placeholder: 'example@mail.ru',
    errorText: 'Проверьте корректность введенных данных',
  },
};

/** Поле для ввода пароля, обязательное для заполнения. */
export const PasswordInput = {
  args: {
    inputName: 'password',
    isRequired: true,
    labelText: 'Пароль',
    type: 'password',
    placeholder: '********',
  },
};

/** Поле для привязки компании. Необязательно для заполнения, содержит иконку. */
export const CompanyInput = {
  args: {
    inputName: 'company',
    labelText: 'Компания',
    type: 'text',
    placeholder: 'Интегрити',
    icon: scanIconUrl,
  },
};
