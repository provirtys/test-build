import type { VIconProps } from '@integrity/base-ui/src/components/ui/VIcon/VIcon.types';

export interface InfoMessageText {
  value: string;
}

export interface InfoMessageIcon {
  name: string;
  size?: VIconProps['size'];
}

export interface InfoMessageImage {
  path: string;
  alt?: string;
}

export interface InfoMessageItems {
  text?: InfoMessageText;
  icon?: InfoMessageIcon;
  image?: InfoMessageImage;
}

export interface InfoMessageProps {
  items: InfoMessageItems;
}
