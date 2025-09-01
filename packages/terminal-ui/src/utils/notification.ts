import { Dialog } from 'quasar';
import { VNotification, type VNotificationProps } from '@';

export const createNotification = (options: VNotificationProps) => {
  return Dialog.create({
    component: VNotification,
    componentProps: {
      seamless: true,
      ...options,
    },
  });
};

export const createConfirmNotification = () => {
  return Dialog.create({
    component: VNotification,
    componentProps: {
      type: 'warning',
      text: 'Если вы вернётесь назад, все несохранённые данные и отсканированные коды будут утеряны.',
      seamless: false,
      actions: [
        {
          text: 'Остаться',
          color: 'secondary',
        },
        {
          text: 'Выйти',
        },
      ],
    },
  });
};
