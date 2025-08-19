export type TaskStatus = 'new' | 'labeling' | 'ready' | 'canceled';

export interface TaskProperty {
  name: string;
  value: string;
}

export interface TaskCardProps {
  id: string;
  title: string;
  properties?: TaskProperty[];
  status?: TaskStatus;
  priority?: number;
  isActive?: boolean;
  hasBackground?: boolean;
}
