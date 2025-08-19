<template>
  <q-badge
      class="v-badge"
      :class="badgeClasses"
      v-bind="bindingAttrs"
  >
    <slot/>
  </q-badge>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { VBadgeProps } from './VBadge.types';

const props = withDefaults(defineProps<VBadgeProps>(), {
  size: 'lg',
  isInverted: false,
});

const badgeClasses = computed(() => [`v-badge--${props.size}`]);

const bindingAttrs = computed(() => {
  if (!props.isInverted) return props;

  const color = props.color ?? 'info';

  return {
    ...props,
    textColor: color,
    color: `${color}-10`,
  };
});
</script>

<style lang="scss" scoped>
.v-badge {
  border-radius: 4px;
  text-transform: uppercase;
  font-family: 'Golos', sans-serif;
  letter-spacing: -0.02em;
  color: $secondary;

  &--lg {
    @include fontAdaptive(16px, 1, 700);
    padding: 8px;
  }

  &--md {
    @include fontAdaptive(14px, 1, 700);
    padding: 6px;
  }

  &--sm {
    @include fontAdaptive(12px, 1, 700);
    padding: 4px;
  }

}
</style>