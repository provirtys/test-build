<template>
  <q-btn-toggle
    class="v-switcher"
    :class="classes"
    @update:modelValue="updateValue"
    v-bind="bindingProps"
  >
    <template v-for="option in computedOptions" v-slot:[option.slot]>
      <div v-if="option.iconName" class="v-switcher__item-icon">
        <v-icon :name="option.iconName"/>
      </div>
    </template>
  </q-btn-toggle>
</template>

<script setup lang="ts">
import { VIcon } from '@integrity/base-ui';
import { computed, onMounted } from 'vue';
import type { VSwitcherEmits, VSwitcherProps } from './index';

const props = withDefaults(defineProps<VSwitcherProps>(), {
  textColor: 'dark-1',
  toggleColor: 'dark-1',
  toggleTextColor: 'white',
  ripple: false,
  rounded: true,
  unelevated: true,
  noCaps: true,
  align: 'center',
  options: () => [],
});

const emit = defineEmits<VSwitcherEmits>();

const classes = computed(() => [
  {
    [`v-switcher--text-${props.align}`]: props.align,
  },
]);

const computedOptions = computed(() => {
  return props.options.map((option, idx) => ({
    ...option,
    slot: `slot-${idx + 1}`,
  }));
});

const bindingProps = computed(() => {
  const { options, ...otherProps } = props;
  return {
    ...otherProps,
    options: computedOptions.value,
  };
});

const updateValue = (val: string) => {
  emit('update:modelValue', val);
};

onMounted(() => {
  if (!props.modelValue) {
    emit('update:modelValue', props.options[0].value);
  }
});
</script>

<style lang="scss" scoped>
.v-switcher {
  background: $primary-text-20;
  color: $primary-text;
  border-radius: 12px;
  padding: 4px;
  height: 52px;
  font-family: Golos, sans-serif;

  &.row.inline {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
  }

  &--text-left :deep(.q-btn__content) {
    margin-right: auto;
  }

  &--text-right :deep(.q-btn__content) {
    margin-left: auto;
  }

  .v-switcher__item-icon {
    order: -1;
  }

  &.q-btn-group--spread {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  :deep(.q-btn.q-btn-item) {
    display: flex;
    gap: 12px;
    flex: 1;
    border-radius: 8px;
    padding: 8px 16px;
    align-items: center;
    font-family: Golos, sans-serif;
  }

  :deep(.q-btn__content) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.24px;
    gap: 12px;
  }

  :deep(.q-focus-helper) {
    display: none;
  }
}
</style>
