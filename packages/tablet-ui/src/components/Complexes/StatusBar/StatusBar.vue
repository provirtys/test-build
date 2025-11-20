<template>
  <div class="status-line">
    <v-button
      size="sm"
      fit-width
      color="secondary"
      :icon="actionOptions.icon"
      border-radius="0"
      enable-hold
      @action="action.fn"
    >
      {{actionOptions.label}}
    </v-button>
    <p class="status-line__task">{{ title }}</p>
    <div class="row">
      <status-label
        :label="statusOptions.label"
        :color="statusOptions.type"
        :is-animate="statusOptions.sync"
        :show-background="statusOptions.active"
      />
      <slot name="append"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VButton } from '@integrity/base-ui';
import { computed } from 'vue';
import { StatusLabel } from '@';
import type { StatusBarProps } from './index';

const props = withDefaults(defineProps<StatusBarProps>(), {
  status: () => ({
    type: 'error',
    sync: true,
    active: false,
  }),
  isDisabled: false,
  action: () => ({
    type: 'home',
    fn: () => {},
  }),
});

const actionOptions = computed(() => {
  switch (props.action.type) {
    case 'home':
      return {
        label: 'Домой',
        icon: 'home',
      };
    case 'back':
      return {
        label: 'Назад',
        icon: 'arrow-back',
      };
    case 'complete':
      return {
        label: 'Завершить',
        icon: 'arrow-back',
      };
    case 'logout':
      return {
        label: 'Выход',
        icon: 'logout-dark',
      };
  }
});

const statusOptions = computed(() => ({
  type: props.status.type ?? 'error',
  sync: props.status.sync,
  active: props.status.active,
  label: props.status.type === 'success' ? 'Готово' : 'Не готово',
}));
</script>

<style lang="scss" scoped>
.status-line {
  width: 100%;
  height: $l-4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  z-index: 10001;
  position: relative;
  visibility: visible;
  border-bottom: 1px solid $light-gray;
  letter-spacing: -0.02em;
  font-size: $font-size-p2;
  font-weight: 500;
  line-height: 21.6px;

  text-align: left;

  &__settings-button {
    background: $primary-text-20;
    color: $primary-text;
    font-family: 'Golos';
    font-size: $font-size-p1;
    height: 100%;
    padding: 14px $s-3;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    position: relative;
    gap: 16px;

    &.disabled {
      opacity: 0.1 !important;
    }
  }

  &__task {
    @include font('Golos', $font-size-p2, 1, 500, -0.02em);
    color: $dark-gray-70;
    margin: 0 $s-3;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .row {
    display: flex;
    align-items: center;
  }
}
</style>
