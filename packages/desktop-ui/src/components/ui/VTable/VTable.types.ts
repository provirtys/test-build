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

export type VTableEmits = (e: 'onSearchUpdate', data: Record<string, string>) => void;
