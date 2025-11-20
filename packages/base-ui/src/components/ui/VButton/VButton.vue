<template>
  <q-btn
    class="v-button"
    :class="btnClasses"
    ref="btnRef"
    v-bind="bindingProps"
    v-touch-hold:1000:200:200.mouse="handleHold"
    @mousedown="startAnimation"
    @touchstart="startAnimation"
    @mouseup="finishAnimation"
    @touchend="finishAnimation"
    @click="handleClick"
  >
    <v-icon
      v-if="showSubmittedIcon"
      name="done"
      :size="buttonSize.iconSize"
    />
    <template v-else>
      <span
        v-if="icon"
        class="v-button__icon-container justify-start"
      >
        <v-icon
          :name="icon"
          :size="buttonSize.iconSize"
        />
      </span>
      <span
        v-if="$slots.default"
        class="v-button__text"
      >
        <slot></slot>
      </span>
      <span
        v-if="iconRight"
        class="v-button__icon-container justify-end"
      >
        <v-icon
          :name="iconRight"
          :size="buttonSize.iconSize"
        />
      </span>
    </template>
    <slot v-if="$slots.menu" name="menu"/>
  </q-btn>
</template>

<script setup lang="ts">
import { QBtnProps, TouchHoldValue } from 'quasar';
import { computed, ref, useAttrs, useSlots } from 'vue';
import { VIcon } from '@';
import { VButtonEmits, VButtonProps, VButtonSizeConfig } from './VButton.types';

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

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
  borderRadius: '8px',
  noCaps: true,
  push: false,
  unelevated: true,
  ripple: false,
  glossy: false,
  flat: true,
  padding: undefined,
});

const slots = useSlots();

const emit = defineEmits<VButtonEmits>();

const btnRef = ref<HTMLButtonElement | null>(null);

const btnStatus = ref<'default' | 'holding' | 'done'>('default');

const bindingProps = computed<QBtnProps>(() => {
  const res: QBtnProps = {
    ...props,
    icon: undefined,
    iconRight: undefined,
    padding: undefined,
    rounded: undefined,
    size: undefined,
  };

  return res;
});

const showSubmittedIcon = computed(() => props.once && btnStatus.value === 'done');

const showAsSquare = computed(
  () => props.fitWidth && !slots.default && ((props.icon && !props.iconRight) || (!props.icon && props.iconRight)),
);

const btnClasses = computed(() => [
  attrs.class,
  backgroundColor.value,
  {
    'v-button--disabled': btnDisabled.value,
    [`text-${props.textAlignment}`]: props.textAlignment,
    'v-button--square': showAsSquare.value,
    'v-button--holding': btnStatus.value === 'holding',
    'v-button--done': showSubmittedIcon.value,
  },
]);

const backgroundColor = computed(() => {
  switch (props.color) {
    case 'secondary':
    case 'plain':
    case 'outline':
    case 'red':
    case 'primary':
      return props.color;
    default:
      return 'primary';
  }
});

const buttonSize = computed<VButtonSizeConfig>(() => {
  const base: VButtonSizeConfig = {
    fontSize: '22px',
    height: '72px',
    iconSize: 20,
    padding: '22px',
    gap: '14px',
  };

  return {
    fontSize: props.fontSize ? props.fontSize : base.fontSize,
    height: props.height ? props.height : base.height,
    padding: props.padding ? props.padding : base.padding,
    iconSize: props.iconSize ? props.iconSize : base.iconSize,
    gap: props.gap ? props.gap : base.gap,
  };
});

const buttonWidth = computed(() => {
  if (props.fitWidth) {
    if (showAsSquare.value) {
      return buttonSize.value.height;
    }
    return 'auto';
  }

  return '100%';
});

const btnDisabled = computed(() => props.disable || btnStatus.value === 'done');

const handleHold: TouchHoldValue = ({ evt }) => {
  if (btnDisabled.value || !props.enableHold) return;

  if (props.once && btnRef.value) {
    btnStatus.value = 'done';
    finishAnimation(evt, true);
  }
  submitAction();
};

const submitAction = () => {
  emit('action');
};

const handleClick = () => {
  if (props.enableHold || btnDisabled.value) return;

  if (props.once) {
    btnStatus.value = 'done';
  }

  submitAction();
};

const stopAnimation = () => finishAnimation();

const startAnimation = () => {
  if (btnDisabled.value || !props.enableHold) return;

  btnStatus.value = 'holding';
  document.addEventListener('mouseup', stopAnimation);
  document.addEventListener('touchend', stopAnimation);
};

const finishAnimation = (_?: Event, finished?: boolean) => {
  if (btnDisabled.value || !props.enableHold) return;

  if (props.once && finished) {
    btnStatus.value = 'done';
  } else {
    btnStatus.value = 'default';
  }
  document.removeEventListener('mouseup', stopAnimation);
  document.removeEventListener('touchend', stopAnimation);
};
</script>

<style lang="scss" scoped>
.v-button {
  width: v-bind(buttonWidth);
  border-radius: v-bind(borderRadius);
  text-align: center;
  font-size: v-bind('buttonSize.fontSize');
  font-family: 'Golos', sans-serif;
  letter-spacing: -0.24px;
  line-height: 1.2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: none;
  border: none;
  animation: none;
  min-height: v-bind('buttonSize.height');
  padding: v-bind('buttonSize.padding');
  transition: background-color 0.3s ease;

  &.primary {
    background-color: $primary-text !important;
    color: $secondary !important;

    &:hover {
      background-color: $primary-text-70 !important;
    }
  }

  &.secondary {
    background-color: $primary-text-20 !important;
    color: $primary-text !important;

    &:hover {
      background-color: $primary-text-40 !important;
    }
  }

  &.plain {
    color: $primary-text !important;
    background-color: transparent !important;

    &:hover {
      background-color: $primary-text-20 !important;
    }
  }

  &.outline {
    border: solid 1px $primary-text;
    color: $primary-text !important;
    background: none !important;

    &:hover {
      background-color: $primary-text-20 !important;
    }
  }

  &.red {
    background-color: $primary !important;
    color: $secondary !important;
  }

  &.v-button--disabled {
    pointer-events: none;
    opacity: 0.1 !important;
  }

  &.v-button--rounded.v-button--holding:before {
    border-radius: v-bind(borderRadius) 0 0 v-bind(borderRadius);
  }

  &.v-button--square :deep(.q-btn__content) {
    justify-content: center;
  }

  &.text-left &__text {
    text-align: left;
  }

  &.text-center &__text {
    text-align: center;
  }

  &.text-right &__text {
    text-align: right;
  }

  &.v-button--holding {
    &::before {
      content: '';
      position: absolute;
      background: $primary-text !important;
      opacity: 0.2;
      width: 0;
      height: 100%;
      top: 0;
      left: 0;
      animation: filling 1s linear 0s 1 normal backwards;
    }

    &.primary {
      &::before {
        background: $secondary !important;
        opacity: 0.2;
      }
    }

    &.red {
      &::before {
        background: $secondary !important;
        opacity: 0.25;
      }
    }

    &.radius {
      &::before {
        border-radius: $d-1;
      }
    }
  }

  &.v-button--done {
    opacity: 1 !important;

    &::before {
      content: '';
      background-size: $m-1 $m-1;
      background-repeat: no-repeat;
      position: absolute;
      width: $m-1;
      min-height: $m-1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.primary {
      background-color: $primary-text-70 !important;
    }

    &.secondary {
      background-color: $primary-text-5 !important;
    }

    &.outline {
      background-color: $primary-text-20 !important;
    }

    :deep(.q-btn__content) {
      justify-content: center;
    }
  }

  &__text {
    flex-grow: 1;
    text-align: left;
  }

  :deep(.q-btn__content) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: v-bind('buttonSize.gap');
    flex-wrap: nowrap;
  }

  :deep(.q-focus-helper) {
    display: none;
  }
}

@keyframes filling {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}
</style>
