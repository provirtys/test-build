export interface VPaginationModel {
  page: number;
  elPerPage: number;
  totalEl: number;
}

export type VPaginationEmits = {
  (e: 'first'): void;
  (e: 'last'): void;
  (e: 'prev'): void;
  (e: 'next'): void;
};
