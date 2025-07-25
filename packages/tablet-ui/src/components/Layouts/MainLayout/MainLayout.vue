<template>
  <div class="main-layout">
    <div class="main-layout__header">
      <status-bar :action="headerAction" :status="headerStatus" :title="title"/>
    </div>
    <div class="main-layout__main" :class="mainClasses">
      <div class="main-layout__content">
        <slot name="main"/>
        <v-button
          v-if="isFullscreen"
          class="main-layout__disable-fullscreen"
          icon="close"
          icon-position="left"
          :icon-size="16"
          height="xs"
          @click="disableFullscreen"
        />
      </div>
      <div class="main-layout__sidebar" :class="sidebarClasses">
        <div class="main-layout__sidebar-top">
          <slot name="sidebar-top"/>
        </div>
        <div class="main-layout__sidebar-bottom">
          <slot name="sidebar-bottom"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { VButton } from '@integrity/base-ui/src/components/ui/VButton/index.js';
import { StatusBar } from '@tablet';
import { computed } from 'vue';

const props = defineProps({
  title: String,
  headerAction: {
    type: Object,
    default: () => ({
      type: 'home',
      fn: () => {},
    }),
    required: true,
  },
  headerStatus: {
    type: Object,
    default: () => ({
      type: 'error',
      sync: false,
      active: false,
    }),
    required: false,
  },
  isFullscreen: {
    type: Boolean,
    default: false,
    required: false,
  },
  sidebarHasError: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const emit = defineEmits(['disable-fullscreen']);

const mainClasses = computed(() => ({
  'main-layout__main--fullscreen': props.isFullscreen,
}));

const sidebarClasses = computed(() => ({
  'main-layout__sidebar--error': props.sidebarHasError,
}));

const disableFullscreen = () => {
  emit('disable-fullscreen');
};
</script>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: $light-gray-55;
  height: 100vh;
  max-height: 100%;

  &.no-padding {
    padding: 0;
  }

  &__main {
    display: grid;
    grid-template-columns: 1fr 380px;
    transition: grid-template-columns 0.3s ease-in-out;
    overflow: hidden;
    flex-grow: 1;

    &--fullscreen {
      grid-template-columns: 1fr 0;
    }
  }

  &__content {
    position: relative;
    padding: 20px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__sidebar {
    width: 380px;
    padding: 20px;
    border-left: 1px solid $light-gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &--error {
      background-color: $primary-85;
    }
  }

  &__sidebar-bottom {
    margin-top: auto;
  }

  .main-layout__disable-fullscreen {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 66px;
    height: 40px;
    border-radius: 8px;
    background: $primary-text;
    color: $secondary;

    :deep(.q-btn__content) {
      justify-content: center;
    }
  }
}
</style>
