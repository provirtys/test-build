import type { CodeItemProps } from '@/components/Elements/CodeItem/CodeItem.types';

export interface CodeListProps {
  items: CodeItemProps[];
}

export type CodeListEmits = (e: 'onItemCancel', id: string) => void;
