import type { CodeEl } from '@/types/entity';

export type GtinCardMode =
  | 'filling'
  | 'viewing'
  | 'package-adding'
  | 'package-removing'
  | 'moving-adding'
  | 'moving-removing';

export interface GtinCardProps {
  id: string;
  title: string;
  codes?: CodeEl[];
  mode: GtinCardMode;
}

export type GtinCardEmits = (e: 'removeCode', id: CodeEl['id']) => void;
