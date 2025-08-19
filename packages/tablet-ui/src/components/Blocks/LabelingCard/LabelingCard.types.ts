export interface LabelingCardCodeInfo {
  labeled: number;
  total: number;
  time: number;
  code: string;
  position: 10;
}

export interface LabelingCardProps {
  showProgressBadge?: boolean;
  showProgressPie?: boolean;
  showRepeat?: boolean;
  codeInfo: LabelingCardCodeInfo;
}
