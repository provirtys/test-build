import type { CodeEl } from '@/types/entity';

export type GTINCardMode =
  | 'filling'
  | 'viewing'
  | 'package-adding'
  | 'package-removing'
  | 'moving-adding'
  | 'moving-removing';

export interface GTINCardProps {
  id: string;
  title: string;
  codes?: CodeEl[];
  mode: GTINCardMode;
}

export type GTINCardEmits = (e: 'removeCode', id: CodeEl['id']) => void;
