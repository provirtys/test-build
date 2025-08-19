import type { TaskCardProps } from '@/components/Blocks/TaskCard/TaskCard.types';

export interface TaskListProps {
  tasks: TaskCardProps[];
  isVertical?: boolean;
  alwaysShowBackgrounds?: boolean;
}

export type TaskListEmits = (e: 'onTaskSelect', id: string) => void;
