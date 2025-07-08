<template>
  <div class="task-list">
    <task-card v-for="task in tasks" :key="task.id" v-bind="tasksWithActiveState[task.id]" @click="onTaskClick(task)" />
  </div>
</template>

<script setup>
import TaskCard from '@components/TaskCard.vue';
import { computed, ref } from 'vue';

const props = defineProps({
    /** Список задач */
    tasks: {
        type: Array,
        required: true,
    },
});

const activeTaskId = ref(null);

const onTaskClick = (task) => {
    activeTaskId.value = task.id;
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
        };
    }
    return map;
});
</script>

<style lang="scss">
.task-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>