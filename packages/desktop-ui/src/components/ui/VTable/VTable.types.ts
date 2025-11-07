import type { QTableColumn, QTableProps, QTableSlots } from 'quasar';

interface VTableColumnFilterItem {
  id: string;
  label: string;
  value: boolean;
}

export interface VTableColumnFilter {
  active?: boolean;
  list: VTableColumnFilterItem[];
}

export interface VTableColumnDateFilter {
  active?: boolean;
  multiple?: boolean;
}

export interface VTableColumn extends QTableColumn {
  searchable?: boolean;
  filter?: VTableColumnFilter;
  dateFilter?: VTableColumnDateFilter;
}

export interface VTablePagination extends NonNullable<QTableProps['pagination']> {
  searchBy?: Record<string, string>;
  filterBy?: Record<string, string[]>;
  dateFilter?: { from: string; to: string };
}

export interface VTableProps extends QTableProps {
  columns: VTableColumn[];
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
  (e: 'rowClick', evt: Event, row: any, index: number): void;
};
