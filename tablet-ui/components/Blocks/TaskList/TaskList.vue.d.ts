import { TaskCardProps } from '../TaskCard/TaskCard.types';
import { TaskListProps } from './TaskList.types';
declare const _default: import('vue').DefineComponent<TaskListProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onTaskSelect: (id: string) => any;
}, string, import('vue').PublicProps, Readonly<TaskListProps> & Readonly<{
    onOnTaskSelect?: ((id: string) => any) | undefined;
}>, {
    tasks: TaskCardProps[];
    isVertical: boolean;
    alwaysShowBackgrounds: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=TaskList.vue.d.ts.map