export interface TaskItem {
  id: string;
  name: string;
  gtin: string;
  dateStart: string;
  timeStart: string;
  quantity: number;
  line: string;
  comment: string;
  privateComment: string;
  labelTemplate: string;
  packageTemplate: string;
  packageCount: number;
}
