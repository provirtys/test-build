import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { VNotificationProps } from '@/components/ui/VNotification/VNotification.types';
import type { NotificationItem } from './types';

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref<NotificationItem[]>([]);

  const createNotification = (options: VNotificationProps) => {
    const newNotification: NotificationItem = {
      id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      modelValue: true,
      ...options,
    };
    notifications.value.push(newNotification);

    if (options.timeout) {
      setTimeout(() => {
        removeNotification(newNotification.id);
      }, options.timeout);
    }
  };

  const createConfirmationNotification = () => {
    createNotification({
      type: 'warning',
      text: 'Если вы вернётесь назад, все несохранённые данные и отсканированные коды будут утеряны.',
      actions: [
        {
          handler() {
            createNotification({
              type: 'info',
              text: 'Нажата кнопка Остаться',
              timeout: 1000,
            });
          },
          text: 'Остаться',
          color: 'secondary',
        },
        {
          handler() {
            createNotification({
              type: 'info',
              text: 'Нажата кнопка Выйти',
              timeout: 1000,
            });
          },
          text: 'Выйти',
        },
      ],
    });
  };

  const removeNotification = (id: NotificationItem['id']) => {
    const notification = notifications.value.find((n) => n.id === id);

    if (!notification) return;

    notification.modelValue = false;

    setTimeout(() => {
      notifications.value = notifications.value.filter((n) => n.id !== id);
    }, 300);
  };

  return {
    notifications,
    createNotification,
    createConfirmationNotification,
    removeNotification,
  };
});
