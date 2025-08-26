import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { VNotificationProps } from '@/components/ui/VNotification/VNotification.types';

export interface NotificationItem extends VNotificationProps {
  id: string;
}

export const useMainStore = defineStore('main', () => {
  const notifications = ref<NotificationItem[]>([]);

  const createNotification = (options: VNotificationProps) => {
    notifications.value.push({
      id: `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...options,
    });
  };

  const removeNotification = (notification: NotificationItem) => {
    notification.modelValue = false;

    setTimeout(() => {
      notifications.value = notifications.value.filter((n) => n.id !== notification.id);
    }, 400);
  };

  return {
    notifications,
    createNotification,
    removeNotification,
  };
});
