<template>
  <q-btn
    class="v-button"
    :class="btnClasses"
    no-caps
    :ripple="false"
    :glossy="false"
    :loading
    flat
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
      :size="sizeIcon"
    />
    <template v-else>
      <span
        v-if="icon && iconPosition === 'left'"
        class="v-button__icon-container justify-start"
      >
        <v-icon
          :name="icon"
          :size="sizeIcon"
        />
      </span>
      <span
        v-if="$slots.default"
        class="v-button__text"
      >
        <slot></slot>
      </span>
      <span
        v-if="icon && iconPosition === 'right'"
        class="v-button__icon-container justify-end"
      >
        <v-icon
          :name="icon"
          :size="sizeIcon"
        />
      </span>
    </template>
    <slot v-if="$slots.menu" name="menu"/>
  </q-btn>
</template>

<script setup lang="ts">
import { VIcon } from '@base';
import { QBtnProps } from 'quasar';
import { computed, ref } from 'vue';
import type { VButtonEmits, VButtonProps } from './VButton.types';

const props = withDefaults(defineProps<VButtonProps>(), {
  color: 'primary',
  isDisabled: false,
  isRounded: true,
  icon: undefined,
  iconPosition: 'left',
  iconSize: undefined,
  textAlignment: 'center',
  fitWidth: false,
  once: false,
  enableHold: false,
  borderRadius: '8px',
});

const emit = defineEmits<VButtonEmits>();

const btnRef = ref<HTMLButtonElement | null>(null);
const btnStatus = ref<'default' | 'holding' | 'done'>('default');

const bindingProps = computed<QBtnProps>(() => ({
  target: props.target,
  type: props.type,
  to: props.to,
  href: props.href,
}));

const showSubmittedIcon = computed(() => props.once && btnStatus.value === 'done');

const btnClasses = computed(() => [
  `v-button--${buttonSize.value}`,
  backgroundColor.value,
  {
    'v-button--disabled': btnDisabled.value,
    'v-button--rounded': props.isRounded,
    'v-button--fit-width': props.fitWidth,
    [`text-${props.textAlignment}`]: props.textAlignment,
    'v-button--holding': btnStatus.value === 'holding',
    'v-button--done': showSubmittedIcon.value,
  },
]);

const sizeIcon = computed(() => {
  if (props.iconSize) return props.iconSize;

  switch (props.height) {
    case 'lg':
      return 36;
    default:
      return 28;
  }
});

const backgroundColor = computed(() => {
  switch (props.color) {
    case 'secondary':
    case 'plane':
    case 'outline':
    case 'red':
    case 'primary':
      return props.color;
    default:
      return 'primary';
  }
});

const buttonSize = computed(() => {
  switch (props.height) {
    case 'md':
    case 'sm':
    case 'xs':
    case 'xxs':
      return props.height;
    default:
      return 'lg';
  }
});

const btnDisabled = computed(() => props.isDisabled || btnStatus.value === 'done');

const handleHold = ({ evt }: { evt: Event }) => {
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
  width: 100%;
  height: $xl-4;
  border-radius: 0;
  text-align: center;
  font-size: $font-size-p1;
  font-family: 'Golos', sans-serif;
  letter-spacing: -0.24px;
  line-height: $s-4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: $s-2;
  position: relative;
  box-shadow: none;
  border: none;
  animation: none;
  min-height: unset;

  &.primary {
    background-color: $primary-text;
    color: $secondary;
  }

  &.secondary {
    background-color: $primary-text-20;
    color: $primary-text;
  }

  &.plane {
    color: $primary-text;
    background: none;
  }

  &.outline {
    border: solid 1px $primary-text;
    color: $primary-text;
    background: none;
  }

  &.red {
    background-color: $primary;
    color: $secondary;
  }

  &.v-button--disabled {
    opacity: 0.1 !important;
  }

  &.v-button--rounded {
    border-radius: v-bind(borderRadius);

    &.v-button--holding:before {
      border-radius: $d-1 0 0 $d-1;
    }
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

  &--lg {
    height: $xxl-4;
    padding: $m-2 $m-1;
  }

  &--md {
    padding: $s-4;
  }

  &--sm {
    height: $l-4;
    padding: $s-2 $s-3;
  }

  &--xs {
    height: $l-1;
    gap: $s-1;
    font-size: $font-size-p2;
    padding: 10px $s-2;
  }

  &--xxs {
    height: $m-3;
    gap: $d-1;
    font-size: $font-size-p4;
    padding: $d-1 $s-1;
  }

  &.v-button--holding {
    &::before {
      content: '';
      position: absolute;
      background: $primary-text;
      opacity: 0.2;
      width: 0;
      height: 100%;
      top: 0;
      left: 0;
      animation: filling 1s linear 0s 1 normal backwards;
    }

    &.primary {
      &::before {
        background: $secondary;
        opacity: 0.2;
      }
    }

    &.red {
      &::before {
        background: $secondary;
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
      height: $m-1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &.primary {
      background-color: $primary-text-70;
    }

    &.secondary {
      background-color: $primary-text-5;
    }

    &.outline {
      background-color: $primary-text-20;
    }

    :deep(.q-btn__content) {
      justify-content: center;
    }
  }

  &.v-button--fit-width {
    width: auto;
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
    gap: $s-2;
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
