import type { QTableColumn, QTableProps, QTableSlots } from 'quasar';

interface QTableColumnFilterItem {
  id: string;
  name: string;
  value: boolean;
}

export interface VTableColumn extends QTableColumn {
  searchable?: boolean;
  filterable?: boolean;
  filters?: QTableColumnFilterItem[];
}

export interface VTableProps extends QTableProps {}

export interface VTableSlots extends QTableSlots {
  [key: string]: any;
}
