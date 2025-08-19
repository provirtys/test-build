export interface LabelingProgressProps {
  total?: number;
  mistakes?: number;
}

export type LabelingProgressEmits = (e: 'onfinishLabeling') => void;
