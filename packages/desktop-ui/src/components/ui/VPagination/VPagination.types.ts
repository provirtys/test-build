export interface VPaginationModel {
  page: number;
  elPerPage: number;
  totalEl: number;
}

export type VPaginationNavigationType = 'prev' | 'next' | 'first' | 'last';

export interface VPaginationNavigateData {
  type: VPaginationNavigationType;
  page: number;
}

export type VPaginationEmits = (e: 'navigate', data: VPaginationNavigateData) => void;
