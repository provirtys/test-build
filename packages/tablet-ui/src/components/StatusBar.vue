<template>
  <div class="status-line">
    <v-button
      height="sm"
      fit-width
      color="secondary"
      :icon="btnIcon"
      location-icon="left"
      :is-rounded="false"
      enable-hold
    >
      {{btnText}}
    </v-button>
    <p class="status-line__task">{{ title }}</p>
    <div class="row">
      <status-label
        :color="systemStatus.status"
        :statusType="systemStatus.text"
        :isSync="systemStatus.sync"
        :is-active="systemStatus.active"
      ></status-label>
      <div
        class="status-line__button status-line__settings"
        :class="[{ disabled: props.isDisabled }]"
      >
        <v-icon name="settings" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { VIcon } from '@integrity/base-ui/src/index.js';
import { VButton } from '@integrity/base-ui/src/index.js';
import StatusLabel from './StatusLabel.vue';

const props = defineProps({
    systemStatus: {
        type: Object,
        default: () => ({
            status: 'error',
            text: 'NOT_READY',
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
    btnText: {
        type: String,
        default: 'Назад',
    },
    btnIcon: {
        type: String,
        default: 'arrow-back',
    },
});

const emit = defineEmits(['logout']);
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

  &__button {
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

    &.in-progress {
      &::before {
        content: '';
        position: absolute;
        background: rgba($primary-text, 0.25);
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        animation: filling 1s linear 0s 1 normal backwards;
      }
    }
  }

  &__task {
    color: $dark-gray-70;
    font-size: $font-size-p2;
    margin: 0 $s-3;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Golos';
  }

  &__settings {
    background: $primary-text-20;

    &.disabled {
      opacity: 0.1 !important;
    }
  }

  .row {
    display: flex;
    align-items: center;
  }
}

.pointer-icon {
  pointer-events: none;
}

@keyframes filling {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
