import type { VButtonProps } from '@base/components/ui/VButton/VButton.types';

export type VNotificationColor = 'error' | 'success' | 'warning' | 'info';

export interface VNotificationAction {
  handler: () => void;
  text: string;
  color?: VButtonProps['color'];
}

export interface VNotificationProps {
  type?: VNotificationColor;
  title?: string;
  text?: string;
  actions?: VNotificationAction[];
  timeout?: number;
}
