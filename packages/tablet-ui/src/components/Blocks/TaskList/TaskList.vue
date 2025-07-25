<template>
  <div class="task-list" :class="classList">
    <task-card v-for="task in tasks" :key="task.id" v-bind="tasksWithActiveState[task.id]" @click="onTaskClick(task)" />
  </div>
</template>

<script setup>
import { TaskCard } from '@tablet';
import { computed, ref } from 'vue';

const props = defineProps({
  /** Список задач */
  tasks: {
    type: Array,
    required: true,
  },
  isVertical: {
    type: Boolean,
    default: false,
    required: false,
  },
  alwaysShowBackgrounds: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const emit = defineEmits(['onTaskSelect']);

const activeTaskId = ref(null);

const onTaskClick = (task) => {
  activeTaskId.value = task.id;
  emit('onTaskSelect', task.id);
};

const tasksWithActiveState = computed(() => {
  const map = {};

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
        : ['new', 'labeling'].includes(task.status),
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