<template>
  <div class="status-line">
    <v-button
      height="sm"
      fit-width
      color="secondary"
      :icon="actionOptions.icon"
      icon-position="left"
      :is-rounded="false"
      enable-hold
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
      <div
        class="status-line__settings-button"
        :class="[{ disabled: props.isDisabled }]"
      >
        <v-icon name="settings" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { VButton, VIcon } from '@integrity/base-ui/src/index.js';
import { computed } from 'vue';
import { StatusLabel } from '@';

const props = defineProps({
  status: {
    type: Object,
    default: () => ({
      type: 'error',
      sync: true,
      active: false,
    }),
  },
  title: {
    type: String,
    default: 'Список заданий',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  action: {
    type: String,
    default: 'home',
    required: false,
    validator: (val) => ['home', 'back', 'logout'].includes(val),
  },
});

const emit = defineEmits(['logout']);

const actionOptions = computed(() => {
  switch (props.action) {
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

<style lang="scss">
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
