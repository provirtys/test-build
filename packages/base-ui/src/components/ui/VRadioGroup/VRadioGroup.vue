<template>
  <div class="v-radio-group" :class="classList">
    <div v-if="label" class="v-radio-group__label">{{ label }}</div>
    <div class="v-radio-group__items">
      <v-radio
        v-for="option in options"
        :key="option.val"
        :model-value="modelValue"
        :val="option.val"
        :label="option.label"
        v-bind="bindingProps"
        @update:model-value="updateValue"
      />
    </div>
  </div>
</template>

<script setup>
import { VRadio } from '@base';
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: '',
    required: false,
  },
  modelValue: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
  options: {
    type: Array,
    default: () => [],
    required: true,
  },
  inline: {
    type: Boolean,
    required: false,
  },
  size: {
    type: String,
    default: 'lg',
    required: false,
    validator: (val) => ['lg', 'md', 'sm', 'xs'].includes(val),
  },
});

const emit = defineEmits(['update:modelValue']);

defineOptions({
  inheritAttrs: false,
});

const bindingProps = computed(() => ({
  size: props.size,
  dense: props.inline,
}));

const classList = computed(() => [
  [`v-radio-group--${props.size}`],
  {
    'v-radio-group--inline': props.inline,
  },
]);

const updateValue = (val) => {
  emit('update:modelValue', val);
};
</script>

<style lang="scss">
.v-radio-group {
  font-family: 'Golos', sans-serif;

  &.v-radio-group--inline .v-radio-group__items {
    grid-auto-flow: column;
  }

  &--lg {

    .v-radio-group__label {
      font-size: $font-size-p4;
      margin-bottom: 12px;
    }

    .v-radio-group__items {
      gap: 12px;
    }
  }

  &--md {

    .v-radio-group__label {
      font-size: $font-size-p4;
      margin-bottom: 10px;
    }

    .v-radio-group__items {
      gap: 10px;
    }
  }

  &--sm {

    .v-radio-group__label {
      font-size: $font-size-p5;
      margin-bottom: 8px;
    }

    .v-radio-group__items {
      gap: 8px;
    }
  }

  &--xs {

    .v-radio-group__label {
      font-size: $font-size-p5;
      margin-bottom: 6px;
    }

    .v-radio-group__items {
      gap: 8px;
    }
  }

  &__label {
    @include font('Golos', $font-size-p4, 1, 500, -0.02em);
    color: $dark-gray-70;
  }

  &__items {
    display: grid;
    justify-content: start;
    gap: 12px;
  }
}
</style>
