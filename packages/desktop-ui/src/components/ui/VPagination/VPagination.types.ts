export interface VPaginationModel {
  page: number;
  elPerPage: number;
  totalEl: number;
}

export type VPaginationEmits = (e: 'request', page: number) => void;
