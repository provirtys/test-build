export type StatusBarStatusType = 'error' | 'success';
export type StatusBarActionType = 'home' | 'back' | 'complete' | 'logout';

export interface StatusBarStatusProp {
  type: StatusBarStatusType;
  sync?: boolean;
  active?: boolean;
}

export interface StatusBarActionProp {
  type: StatusBarActionType;
  fn: () => void;
}

export interface StatusBarProps {
  status?: StatusBarStatusProp;
  title?: string;
  isDisabled?: boolean;
  action?: StatusBarActionProp;
}
