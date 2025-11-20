<template>
  <v-button v-bind="bindingProps" @action="$emit('action')">
    <template v-if="$slots.default" #default>
      <slot/>
    </template>
    <template v-if="$slots.menu" #menu>
      <slot name="menu"/>
    </template>
  </v-button>
</template>

<script setup lang="ts">
import { VButton, VButtonSizeConfig } from '@integrity/base-ui';
import { computed } from 'vue';
import { VButtonEmits, VButtonProps, VButtonSize } from './VButton.types';

const buttonSizeConfigs: Record<VButtonSize, VButtonSizeConfig> = {
  lg: {
    fontSize: '20px',
    height: '64px',
    iconSize: 18,
    padding: '20px',
    gap: '12px',
  },
  md: {
    fontSize: '18px',
    height: '54px',
    iconSize: 16,
    padding: '16px',
    gap: '12px',
  },
  sm: {
    fontSize: '16px',
    height: '43px',
    iconSize: 14,
    padding: '12px',
    gap: '8px',
  },
  xs: {
    fontSize: '14px',
    height: '33px',
    iconSize: 12,
    padding: '8px',
    gap: '4px',
  },
};

const props = withDefaults(defineProps<VButtonProps>(), {
  color: 'primary',
  icon: undefined,
  rounded: true,
  iconRight: undefined,
  iconSize: undefined,
  textAlignment: 'center',
  fitWidth: false,
  once: false,
  enableHold: false,
  borderRadius: '4px',
  noCaps: true,
  push: false,
  unelevated: true,
  ripple: false,
  glossy: false,
  flat: true,
  padding: undefined,
});

defineEmits<VButtonEmits>();

const buttonSize = computed<VButtonSizeConfig>(() => {
  const base = buttonSizeConfigs[props.size || 'lg'];

  return {
    ...base,
    fontSize: props.fontSize ? props.fontSize : base.fontSize,
    height: props.height ? props.height : base.height,
    padding: props.padding ? props.padding : base.padding,
    iconSize: props.iconSize ? props.iconSize : base.iconSize,
    gap: props.gap ? props.gap : base.gap,
  };
});

const bindingProps = computed(() => ({
  ...props,
  ...buttonSize.value,
}));
</script>

<style lang="scss" scoped>

</style>
