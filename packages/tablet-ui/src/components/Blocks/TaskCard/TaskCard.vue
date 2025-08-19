<template>
  <div class="task-card" :class="classList">
    <div v-if="status" class="task-card__tags">
      <v-badge :color="BADGE_STATUSES[status].color">{{ BADGE_STATUSES[status].label }}</v-badge>
      <v-badge v-if="priority !== undefined" is-inverted>P{{ priority }}</v-badge>
    </div>
    <div class="task-card__content">
      <p v-if="title" class="task-card__title">{{ title }}</p>
      <div class="task-card__info">
        <dl v-for="item in properties" :key="item.name">
          <dt>{{ item.name }}:</dt>
          <dd>{{ item.value }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VBadge } from '@base';
import { computed } from 'vue';
import type { TaskCardProps } from '@/components/Blocks/TaskCard/TaskCard.types';

const props = defineProps<TaskCardProps>();

const classList = computed(() => ({
  'task-card--bordered': props.isActive,
  'task-card--filled': props.hasBackground,
}));

const BADGE_STATUSES = {
  new: {
    label: 'Новое',
    color: 'info',
  },
  labeling: {
    label: 'Маркировка',
    color: 'warning',
  },
  ready: {
    label: 'Завершено',
    color: 'success',
  },
  canceled: {
    label: 'Отменено',
    color: 'error',
  },
};
</script>

<style lang="scss" scoped>
.task-card {
  display: flex;
  flex-direction: column;
  padding: $s-2 ;
  border-radius: $d-1;
  border: 1px solid transparent;
  gap: $s-3;

  &--bordered {
    border: 1px solid $dark-gray;
  }

  &--filled {
    background-color: $secondary;
  }

  &__tags {
    display: flex;
    gap: 4px;
  }

  &__title {
    color: $dark-gray;
    margin-bottom: 0;
    @include font('Golos', $font-size-p1, $s-3, 400, -0.24px);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $s-3;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  dl {
    display: flex;
    align-items: center;
    font-family: 'Golos', sans-serif;

    dt {
      @include fontAdaptive($font-size-p2, 18px, 400, -0.24px);
      padding-right: $d-1;
      color: $dark-gray-55;
    }

    dd {
      @include fontAdaptive($font-size-p2, 18px, 400, -0.24px);
      color: $dark-gray;
    }
  }
}
</style>
