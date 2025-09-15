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

export interface VTablePagination extends NonNullable<QTableProps['pagination']> {
  searchBy: Record<string, string>;
  filterBy: Record<string, string[]>;
}

export interface VTableProps extends QTableProps {
  columns: VTableColumn[];
  pagination: VTablePagination;
}

export interface VTableSlots extends QTableSlots {
  [key: string]: any;
}

export type VTableEmitsRequest = Parameters<NonNullable<QTableProps['onRequest']>>[0] & {
  pagination: VTablePagination;
};

export type VTableEmits = {
  (e: 'update:pagination', data: VTablePagination): void;
  (e: 'request', data: VTableEmitsRequest): void;
};
