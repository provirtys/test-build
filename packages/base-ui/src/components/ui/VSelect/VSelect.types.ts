import type { QSelectProps, QSelectSlots } from 'quasar';

export interface VSelectProps extends QSelectProps {
  outsideLabel?: string;
  useSearch?: boolean;
  required?: boolean;
  staticLabel?: boolean;
}

export interface VSelectSlots extends QSelectSlots {
  [key: string]: any;
}
