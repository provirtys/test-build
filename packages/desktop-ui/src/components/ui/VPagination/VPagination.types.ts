export interface VPaginationModel {
  page: number;
  elPerPage: number;
  totalEl: number;
}

export type VPaginationNavigationType = 'prev' | 'next' | 'first' | 'last' | 'target';

export interface VPaginationNavigateData {
  type: VPaginationNavigationType;
  page: number;
}

export type VPaginationEmits = (e: 'navigate', data: VPaginationNavigateData) => void;
