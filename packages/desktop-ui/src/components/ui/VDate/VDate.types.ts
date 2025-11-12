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

export type VDateEmits = {
  (e: 'update:model-value', ...data: Parameters<NonNullable<QDateProps['onUpdate:modelValue']>>): void;
  (e: 'navigation', ...data: Parameters<NonNullable<QDateProps['onNavigation']>>): void;
  (e: 'rangeStart', ...data: Parameters<NonNullable<QDateProps['onRangeStart']>>): void;
  (e: 'rangeEnd', ...data: Parameters<NonNullable<QDateProps['onRangeEnd']>>): void;
};
