<template>
  <div class="status-code" :class="classList">
    <div class="status-code__code">
    <v-icon :name="iconName" size="27" />
    </div>
    <div v-if="showPoint" class="status-code__status">
      <status-indicator :is-animate="status === 'processing'" :color="color"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from '@base';
import { computed } from 'vue';
import { StatusIndicator } from '@';
import type { StatusCodeProps } from '@/components/Blocks/StatusCode/StatusCode.types';

const props = withDefaults(defineProps<StatusCodeProps>(), {
  type: 'dataMatrix',
  color: 'success',
  status: 'hidden',
});

const classList = computed(() => ({
  [`status-code--${props.color}`]: props.color,
  [`bg-${props.color}-25`]: props.color,
}));

const iconName = computed(() => (props.type === 'dataMatrix' ? 'data-matrix' : 'barcode'));

const showPoint = computed(() => props.status !== 'hidden' && props.color);
</script>

<style lang="scss" scoped>
.status-code {
  width: $xl-2;
  height: $xl-2;
  border-radius: $d-0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 2px solid transparent;

  &--success{
    border-color: $success-25;
  }

  &--error{
    border-color: $error-25;
  }

  &--info{
    border-color: $info-25;
  }

  &--warning{
    border-color: $warning-25;
  }

  &__code {
    width: $l-2;
    height: $l-2;
    border-radius: $d-0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $light-gray-40;
    color: $dark-gray;
    position: relative;
    z-index: -1;
  }

  &__status {
    width: $s-1;
    height: $s-1;
    background: $warning;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 90%;
    transform: translate(-30%, -30%);
  }
}
</style>
