<template>
  <label class="v-checkbox-button" :class="classList">
    <input
      type="checkbox"
      class="v-checkbox-button__input"
      :checked="modelValue"
      :disabled="isDisabled"
      @change="() => $emit('update:modelValue', !modelValue)"
    />
    <v-icon :name="checkboxIconName" :size="iconSizes[height]['checkbox']" />
    <span class="v-checkbox-button__title">{{ label }}</span>
    <v-icon v-if="iconName" :name="iconName" :size="iconSizes[height]['icon']" />
  </label>
</template>

<script setup lang="ts">
import { colors } from 'quasar';
import { computed } from 'vue';
import { VIcon } from '@';
import type {
  Height,
  VCheckboxButtonEmits,
  VCheckboxButtonProps,
} from '@/components/ui/VCheckboxButton/VCheckboxButton.types';

const props = withDefaults(defineProps<VCheckboxButtonProps>(), {
  modelValue: false,
  iconName: '',
  isPlain: false,
  height: 'lg',
  label: 'Checkbox',
  isDisabled: false,
  border: '8px',
  borderColor: 'dark-gray',
});

defineEmits<VCheckboxButtonEmits>();

const classList = computed(() => [
  [`v-checkbox-button--${props.height}`],
  {
    'v-checkbox-button--active': props.modelValue || props.bgAlwaysFilled,
    'v-checkbox-button--plain': props.isPlain,
    'v-checkbox-button--disabled': props.isDisabled,
    'v-checkbox-button--fit-width': props.fitWidth,
  },
]);

const checkboxIconName = computed(() =>
  props.modelValue ? 'checkbox-transparent-select' : 'checkbox-transparent-empty',
);

const bindingBorderColor = computed(() => colors.getPaletteColor(props.borderColor));

const iconSizes: Record<Height, { icon: number; checkbox: number }> = {
  lg: {
    icon: 60,
    checkbox: 44,
  },
  md: {
    icon: 52,
    checkbox: 36,
  },
  sm: {
    icon: 44,
    checkbox: 28,
  },
  xs: {
    icon: 36,
    checkbox: 16,
  },
  xxs: {
    icon: 30,
    checkbox: 14,
  },
};
</script>

<style lang="scss" scoped>
.v-checkbox-button {
  width: 100%;
  border-radius: v-bind(border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $s-3;
  box-shadow: none;
  border: 1px solid v-bind(bindingBorderColor);
  animation: none;
  background: none;
  cursor: pointer;

  &--active {
    background: $primary-text-20;
    color: $dark-gray;
  }

  &--disabled {
    pointer-events: none;
    opacity: 0.4;
  }

  &--plain {
    border: 1px solid transparent;
  }

  &--lg {
    min-width: 278px;
    height: $xxl-4;
    padding: 22px $m-1;
  }

  &--md {
    min-width: 254px;
    height: $xl-4;
    padding: 18px $s-4;
  }

  &--sm {
    min-width: 230px;
    height: $l-4;
    padding: 14px $s-3;
  }

  &--xs {
    min-width: 206px;
    height: $l-1;
    padding: $s-1;
    gap: $d-1;

    .v-checkbox-button__title {
      font-size: $font-size-p3;
    }
  }

  &--xxs {
    min-width: 200px;
    height: 30px;
    padding: $d-1;
    gap: $d-0;

    .v-checkbox-button__title {
      font-size: $font-size-p4;
    }
  }

  &--fit-width {
    width: fit-content;
    min-width: unset;
  }

  &__input {
    display: none;
  }

  &__title {
    @include font(Golos, $font-size-p1, 1, 500, -0.24px);
    font-family: Golos, sans-serif;
    color: $dark-gray;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
  }
}
</style>
