import type { CodeEl } from '@/types/entity';

export type CodeItemStatus = 'unchanged' | 'new' | 'deleted';

export interface CodeItemProps extends CodeEl {
  status?: CodeItemStatus;
  cancelable?: boolean;
}
