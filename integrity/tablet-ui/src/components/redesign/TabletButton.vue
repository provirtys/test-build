<template>
  <button
    @mousedown="startAnimation" @touchstart="startAnimation"
    @mouseup="finishAnimation" @touchend="finishAnimation"
    v-touch-hold:1000:200:200.mouse="handleHold"
    class="action-tablet-btn" :disabled="props.isDisabled"
    :class="btnClasses"
  >
    <CommonIcon v-if="isActionSubmitted" name="done" :size="sizeIcon" />
    <template v-else>
      <span v-if="icon && locationIcon === 'left'" class="action-tablet-btn__icon-container justify-start">
      <CommonIcon :name="icon" :size="sizeIcon" />
        </span>
      <span class="action-tablet-btn__text">{{ text }}</span>
      <span v-if="icon && locationIcon === 'right'" class="action-tablet-btn__icon-container justify-end">
      <CommonIcon :name="icon" :size="sizeIcon" />
        </span>
    </template>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';
import CommonIcon from '../CommonIcon.vue';

const isActionSubmitted = ref(null);
const props = defineProps({
  color: {
    type: String,
    required: false,
    validator: val => ['primary', 'secondary', 'plane', 'outline', 'red'].includes(val)
  },
  text: {
    type: String,
    required: false
  },
  isDisabled: {
    type: Boolean,
    required: false
  },
  height: {
    type: String,
    required: false,
    validator: val => ['large', 'medium', 'small', 'extra-small'].includes(val)
  },
  isRadius: {
    type: Boolean,
    required: false
  },
  locationIcon: {
    type: String,
    required: false
  },
  icon: {
    type: String,
    required: false
  },
  textAlignment: {
    type: String,
    required: false,
    validator: val => ['left', 'center', 'right'].includes(val)
  },
  fitWidth: {
    type: Boolean,
    required: false
  },
  changeIcon: {
    type: Boolean,
    required: false
  }
});

const emit = defineEmits(['actionSubmitted']);

const btnClasses = computed(() => [
  isActionSubmitted.value ? doneOpacity.value : '',
  backgroundColor.value,
  buttonSize.value,
  borderRadius.value,
  {
    'disabled': props.isDisabled,
    'fit-width': props.fitWidth,
    'done-icon': isActionSubmitted.value,
    'min-width-empty': props.locationIcon === '',
    'with-items-distance': props.withItemsDistance,
    [`text-${props.textAlignment}`]: props.textAlignment,
  }
]);

const doneOpacity = computed(() => {
  switch (props.color) {
    case 'secondary':
      return 'done-secondary';
    case 'plane':
      return 'done-plane';
    case 'outline':
      return 'done-outline';
    case 'red':
      return 'done-red';
    case 'primary':
      return 'done-primary';
  }
});

const sizeIcon = computed(() => {
  switch (props.height) {
    case 'large':
      return 36;
    default:
      return 28;
  }
});

const borderRadius = computed(() => {
  if (!props.isRadius) {
    return 'without-rounding';
  }
  return '';
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
    case 'medium':
    case 'small':
    case 'extra-small':
      return props.height;
    default:
      return 'large';
  }
});

function handleHold({ evt, ...newInfo }) {
  if (!props.isDisabled) {
    isActionSubmitted.value = newInfo;
    finishAnimation(evt);
    evt.target.classList.add('done');
    evt.target.disabled = true;
    setTimeout(submitAction, 800);
  }
}

function submitAction() {
  emit('actionSubmitted');
}

function startAnimation(event) {
  if (!props.isDisabled) {
    const buttonEl = (event.target)?.closest('button')
    if (props.isRadius) {
      buttonEl?.classList.add('in-progress');
    } else {
      buttonEl?.classList.add('in-progress');
      buttonEl?.classList.add('not-radius');
    }
  }
}

function finishAnimation(event) {
  if (!props.isDisabled) {
    const buttonEl = (event.target)?.closest('button')
    if (props.isRadius) {
      buttonEl?.classList.remove('in-progress')
    } else {
      buttonEl?.classList.remove('in-progress')
      buttonEl?.classList.remove('not-radius')
    }
  }
}
</script>

<style lang="scss">
@import '../../css/main.scss';

.pointer-icon {
  pointer-events: none;
}

.action-tablet-btn {
  width: 100%;
  height: $xl-4;
  border-radius: $d-1;
  text-align: center;
  font-size: $font-size-p1;
  font-family: Golos UI-medium;
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

  &.done-icon {
    justify-content: center;
  }

  &.min-width-empty {
    justify-content: center;
  }

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

  //Для любого не активного элемента прозрачность – 0.1 (10%)
  &.disabled {
    opacity: 0.1 !important;
  }

  &.done-primary {
    opacity: 1 !important;
    background-color: $primary-text-70;
  }

  &.done-secondary {
    opacity: 1 !important;
    background-color: $primary-text-5;
  }

  &.done-plane {
    opacity: 1 !important;
    background-color: $primary-text-5;
  }

  &.done-outline {
    opacity: 1 !important;
    background-color: $primary-text-20;
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

  &.large {
    height: $xxl-4;
    padding: $m-2 $m-1;
  }

  &.medium {
    padding: $s-4;
  }

  &.small {
    height: $l-4;
    padding: $s-2 $s-3;
  }

  &.extra-small {
    height: $l-1;
    gap: $s-1;
    font-size: $font-size-p2;
    padding: 10px $s-2;
  }

  &.without-rounding {
    border-radius: 0;
  }

  &.in-progress {
    &::before {
      content: '';
      position: absolute;
      background: $primary-text;
      opacity: 0.2;
      width: 0;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: $d-1 0 0 $d-1;
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

    &.not-radius {
      &::before {
        border-radius: 0;
      }
    }

    &.radius {
      &::before {
        border-radius: $d-1;
      }
    }
  }

  &.done {
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
  }

  &.fit-width {
    width: auto;
  }

  &__text{
    flex-grow: 1;
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
