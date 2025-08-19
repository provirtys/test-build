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

<script setup lang="ts">
import { VRadioEmits, VRadioProps } from '@base/components/ui/VRadio/VRadio.types';
import { computed } from 'vue';

const SIZES = {
  lg: '28px',
  md: '24px',
  sm: '20px',
  xs: '14px',
};

const props = withDefaults(defineProps<VRadioProps>(), {
  dark: false,
  label: '',
  size: 'lg',
  width: 'auto',
});

const emit = defineEmits<VRadioEmits>();

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

const updateValue = (val: number | string | boolean | object) => {
  emit('update:modelValue', val);
};
</script>

<style lang="scss" scoped>
.v-radio {
  font-family: 'Golos', sans-serif;

  &--lg {

    :deep(.q-radio) {
      gap: 16px;
      padding: 14px 20px;

      .q-radio__label {
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

    :deep(.q-radio) {
      gap: 12px;
      padding: 12px 18px;

      .q-radio__label {
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

    :deep(.q-radio) {
      gap: 10px;
      padding: 10px 16px;

      .q-radio__label {
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

    :deep(.q-radio) {
      gap: 6px;
      padding: 4px 8px;

      .q-radio__label {
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

    :deep(.q-radio) {
      width: 100%;
    }
  }

  &.v-radio--dark {

    :deep(.q-radio) {
      background-color: $primary-text;

      .q-radio__inner {
        color: $light-gray-40
      }

      .q-radio__label {
        color: $light-gray-40;
      }
    }
  }

  :deep(.q-radio) {
    border-radius: 8px;

    .q-radio__inner {
      color: $primary-text;

      &:before {
        content: unset !important;
      }
    }

    .q-radio__label {
      @include font('Golos', $font-size-p1, 1.2, 400, -0.24px);
    }

    .q-radio__bg {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
