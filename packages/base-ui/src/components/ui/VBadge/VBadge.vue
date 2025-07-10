<template>
  <q-badge
      class="v-badge"
      :class="badgeClasses"
      v-bind="bindingAttrs"
  >
    <slot/>
  </q-badge>
</template>

<script setup>
import { computed, useAttrs } from 'vue';

const props = defineProps({
    size: {
        type: String,
        required: false,
        default: 'lg',
        validator: (val) => ['lg', 'md', 'sm'].includes(val),
    },
    isInverted: {
        type: Boolean,
        required: false,
    },
});

defineOptions({
    inheritAttrs: false,
});

const attrs = useAttrs();

const badgeClasses = computed(() => [`v-badge--${props.size}`]);

const bindingAttrs = computed(() => {
    if (!props.isInverted) return attrs;

    const color = attrs.color ?? 'info';

    return {
        ...attrs,
        textColor: color,
        color: `${color}-10`,
    };
});
</script>

<style lang="scss">
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