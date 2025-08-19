<template>
  <div class="task-list" :class="classList">
    <task-card v-for="task in tasks" :key="task.id" v-bind="tasksWithActiveState[task.id]" @click="onTaskClick(task)" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { TaskCard } from '@';
import { TaskCardProps } from '@/components/Blocks/TaskCard/TaskCard.types';
import { TaskListEmits, TaskListProps } from '@/components/Blocks/TaskList/TaskList.types';

const props = withDefaults(defineProps<TaskListProps>(), {
  tasks: () => [],
  isVertical: false,
  alwaysShowBackgrounds: true,
});

const emit = defineEmits<TaskListEmits>();

const activeTaskId = ref('');

const onTaskClick = (task: TaskListProps['tasks'][number]) => {
  activeTaskId.value = task.id;
  emit('onTaskSelect', task.id);
};

const tasksWithActiveState = computed(() => {
  const map: Record<string, TaskCardProps> = {};

  for (const task of props.tasks) {
    map[task.id] = {
      id: task.id,
      title: task.title,
      properties: task.properties,
      status: task.status,
      priority: task.priority,
      isActive: task.id === activeTaskId.value,
      hasBackground: props.alwaysShowBackgrounds
        ? props.alwaysShowBackgrounds
        : task.status && ['new', 'labeling'].includes(task.status),
    };
  }
  return map;
});

const classList = computed(() => [
  {
    'task-list--vertical': props.isVertical,
  },
]);
</script>

<style lang="scss" scoped>
.task-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  &--vertical {
    grid-template-columns: 1fr;
  }
}
</style>