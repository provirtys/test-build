export type Size = 'lg' | 'md' | 'sm';

export interface VKeyButtonProps {
  value: string;
  size: Size;
}

export type VKeyButtonEmits = (e: 'pressed', value: string) => void;
