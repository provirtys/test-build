import type { VCardBgColor } from '../../ui/VCard/VCard.types';

export interface CardSelectorItem {
  id: string;
  title?: string;
  image?: string;
}

export type ColsCount = 1 | 2;

export interface CardSelectorProps {
  items: CardSelectorItem[];
  bigFont?: boolean;
  colsCount?: ColsCount;
  itemPaddingY?: string;
  itemPaddingX?: string;
  bgColor?: VCardBgColor;
}

export type CardSelectorEmits = (e: 'select', val: CardSelectorItem['id']) => void;
