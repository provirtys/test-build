export type CodeItemStatus = 'unchanged' | 'new' | 'deleted';

export interface CodeItemProps {
  id: string;
  label: string;
  status?: CodeItemStatus;
  cancelable?: boolean;
}
