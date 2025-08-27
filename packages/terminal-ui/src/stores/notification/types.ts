import type { VNotificationProps } from '@/components/ui/VNotification/VNotification.types';

export interface NotificationItem extends VNotificationProps {
  id: string;
  modelValue: boolean;
}
