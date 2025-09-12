import type { QTableColumn, QTableProps, QTableSlots } from 'quasar';

interface VTableColumnFilterItem {
  id: string;
  label: string;
  value: boolean;
}

export interface VTableColumn extends QTableColumn {
  searchable?: boolean;
  filterable?: boolean;
  filters?: VTableColumnFilterItem[];
}

export interface VTableProps extends QTableProps {
  columns: VTableColumn[];
}

export interface VTableSlots extends QTableSlots {
  [key: string]: any;
}

export type VTableEmits = {
  (e: 'update:pagination', data: QTableProps['pagination']): void;
  (e: 'request', data: Parameters<NonNullable<QTableProps['onRequest']>>[0]): void;
};
