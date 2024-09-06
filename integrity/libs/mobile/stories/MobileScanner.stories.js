import MobileScanner from '../components/MobileScanner.vue';

/** Компонент сканера, используемый на мобильных устройствах. Может содержать иконку лампочки для управления фонариком.
 * Содержит вспомогательный текст: подсказку или сообщение об ошибке (красного цвета). */
export default {
  title: 'Mobile/Scanner',
  component: MobileScanner,
  tags: ['autodocs'],
  argTypes: {
    lightSwitcher: {
      description: 'Нужна ли возможность управления фонариком?',
    },
    helper: {
      description:
        "Вспомогательный текст. Параметры: type ('red' - красный текст сообщения об ошибке или '' - обычная информация), text - текст сообщения.",
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'light', value: '#f4f4f4' },
      ],
    },
  },
};

/** Базовый вариант сканера: есть возможность управления фонариком, вспомогательный текст. */
export const BaseScanner = {
  args: {
    lightSwitcher: true,
    helper: { type: '', text: 'Отсканируйте код привязки\nк предприятию' },
  },
};

/** Сканер с уведомлением об ошибке и с возможностью управления фонариком. */
export const ErrorScanner = {
  args: {
    lightSwitcher: true,
    helper: { type: 'red', text: 'Не удалось обнаружить код' },
  },
};

/** Сканер без возможностьи управления фонариком. */
export const NoLightScanner = {
  args: {
    lightSwitcher: false,
    helper: { type: '', text: 'Отсканируйте код привязки\nк предприятию' },
  },
};
