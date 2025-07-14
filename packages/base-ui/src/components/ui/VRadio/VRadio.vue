<template>
  <div class="v-radio" :class="classList">
    <q-radio
      :model-value="modelValue"
      :val="val"
      :label="label"
      keep-color
      v-bind="bindingProps"
      @update:model-value="updateValue"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue';

const SIZES = {
  lg: '28px',
  md: '24px',
  sm: '20px',
  xs: '14px',
};

const props = defineProps({
  label: {
    type: String,
    default: '',
    required: false,
  },
  val: {
    type: [Number, String, Boolean, Object],
    required: true,
  },
  modelValue: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
  size: {
    type: String,
    default: 'lg',
    required: false,
    validator: (val) => ['lg', 'md', 'sm', 'xs'].includes(val),
  },
  width: {
    type: String,
    default: 'auto',
    required: false,
    validator: (val) => ['auto', 'dense', 'full'].includes(val),
  },
  dark: Boolean,
});

const emit = defineEmits(['update:modelValue']);

defineOptions({
  inheritAttrs: false,
});

const bindingProps = computed(() => ({
  color: props.dark ? 'gray-3' : 'dark-1',
  size: SIZES[props.size],
}));

const classList = computed(() => [
  `v-radio--${props.size}`,
  {
    [`v-radio--${props.width}`]: props.width !== 'auto',
    'v-radio--dark': props.dark,
  },
]);

const updateValue = (val) => {
  emit('update:modelValue', val);
};
</script>

<style lang="scss">
.v-radio {
  font-family: 'Golos', sans-serif;

  &--lg {

    .q-radio {
      gap: 16px;
      padding: 14px 20px;

      &__label {
        font-size: $font-size-p1;
      }
    }

    &.v-radio--dense {
      .q-radio {
        gap: 7px;
      }
    }
  }

  &--md {

    .q-radio {
      gap: 12px;
      padding: 12px 18px;

      &__label {
        font-size: $font-size-p2;
      }
    }

    &.v-radio--dense {
      .q-radio {
        gap: 5px;
      }
    }
  }

  &--sm {

    .q-radio {
      gap: 10px;
      padding: 10px 16px;

      &__label {
        font-size: $font-size-p3;
      }
    }

    &.v-radio--dense {
      .q-radio {
        gap: 3px;
      }
    }
  }

  &--xs {

    .q-radio {
      gap: 6px;
      padding: 4px 8px;

      &__label {
        font-size: $font-size-p3;
      }
    }

    &.v-radio--dense {
      .q-radio {
        gap: 3px;
      }
    }
  }

  &.v-radio--full {

    .q-radio {
      width: 100%;
    }
  }

  &.v-radio--dark {

    .q-radio {
      background-color: $primary-text;

      &__inner {
        color: $light-gray-40
      }

      &__label {
        color: $light-gray-40;
      }
    }
  }

  .q-radio {
    border-radius: 8px;

    &__inner {
      color: $primary-text;

      &:before {
        content: unset !important;
      }
    }

    &__label {
      @include font('Golos', $font-size-p1, 1.2, 400, -0.24px);
    }

    &__bg {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
