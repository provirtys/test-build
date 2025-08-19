export type StatusType = 'error' | 'success';
export type ActionType = 'home' | 'back' | 'complete' | 'logout';

export interface StatusBarStatusProp {
  type: StatusType;
  sync?: boolean;
  active?: boolean;
}

export interface StatusBarActionProp {
  type: ActionType;
  fn: () => void;
}

export interface StatusBarProps {
  status?: StatusBarStatusProp;
  title?: string;
  isDisabled?: boolean;
  action?: StatusBarActionProp;
}
