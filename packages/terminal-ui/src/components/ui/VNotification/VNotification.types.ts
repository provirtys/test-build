import type { VButtonProps } from '@integrity/base-ui';

export type VNotificationColor = 'error' | 'success' | 'warning' | 'info';

export interface VNotificationAction {
  text: string;
  color?: VButtonProps['color'];
}

export interface VNotificationProps {
  type?: VNotificationColor;
  title?: string;
  text?: string;
  actions?: VNotificationAction[];
  timeout?: number;
  seamless?: boolean;
}
