import { defineStore } from 'pinia';
import { Dialog } from 'quasar';
import { VNotification } from '@/components/ui/VNotification';
import type { VNotificationProps } from '@/components/ui/VNotification/VNotification.types';

export const useNotificationStore = defineStore('notification', () => {
  const createNotification = (options: VNotificationProps) => {
    Dialog.create({
      component: VNotification,
      componentProps: options,
    });
  };

  const createConfirmNotification = () => {
    Dialog.create({
      component: VNotification,
      componentProps: {
        type: 'warning',
        text: 'Если вы вернётесь назад, все несохранённые данные и отсканированные коды будут утеряны.',
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
    })
      .onOk(() => {
        console.log('on OK');
      })
      .onCancel(() => {
        console.log('on Cancel');
      })
      .onDismiss(() => {
        console.log('on Dismiss');
      });
  };

  return {
    createNotification,
    createConfirmNotification,
  };
});
