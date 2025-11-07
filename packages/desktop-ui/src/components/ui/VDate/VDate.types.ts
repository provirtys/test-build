import type { QDateProps, QDateSlots } from 'quasar';

export interface VDateProps extends QDateProps {}

export interface VDateSlots extends QDateSlots {
  [key: string]: any;
}

export type QDateLocale = Partial<{
  days: string[];
  daysShort: string[];
  months: string[];
  monthsShort: string[];
}>;
