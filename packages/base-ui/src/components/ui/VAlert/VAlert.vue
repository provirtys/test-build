<template>
  <div class="v-alert" :class="classList">
    <div class="v-alert__content" :class="contentClasses">
      <v-icon name="alert" size="21"/>
      <span class="v-alert__label" v-html="text" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { VIcon } from '@';
import type { VAlertProps } from './VAlert.types';

const props = withDefaults(defineProps<VAlertProps>(), {
  color: 'info',
  text: 'Info',
  isBackgroundWhite: false,
});

const classList = computed(() => [
  {
    [`bg-${props.color}-10`]: !props.isBackgroundWhite,
  },
]);

const contentClasses = computed(() => [`text-${props.color}`]);
</script>

<style lang="scss" scoped>
.v-alert {
  width: 100%;
  background-color: $secondary;
  border-radius: $d-1;

  &__content {
    border-radius: 8px;
    min-height: 44px;
    padding: 11.5px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 11.5px;
    font-family: 'VelaSans';
  }

  &__label {
    font-family: 'Golos';
    color: $dark-gray;
    font-size: 18px;
    line-height: 24px;
  }
}
</style>
