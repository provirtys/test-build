<template>
  <button
    @mousedown="startAnimation"
    @touchstart="startAnimation"
    @mouseup="finishAnimation"
    @touchend="finishAnimation"
    v-touch-hold:2000.mouse="handleHold"
    class="action-tablet-ui-btn"
    :disabled="props.isDisabled"
    :class="[
      { 'text-center': props.locationIcon },
      { 'done-icon': isActionSubmitted },
      backgroundColor,
      buttonSize,
      borderRadius,
      { 'min-width-empty': props.locationIcon === '' },
    ]"
  >
    <TabletUIDone
      v-if="isActionSubmitted"
      :icon-color="colorIcon"
      :icon-size="sizeIcon"
    ></TabletUIDone>
    <TabletUIArrow
      v-if="props.locationIcon === 'left' && buttonIcon"
      :icon-color="colorIcon"
      :icon-size="sizeIcon"
    ></TabletUIArrow>
    {{ buttonText }}
    <TabletUIArrow
      v-if="props.locationIcon === 'right' && buttonIcon"
      :icon-color="colorIcon"
      :icon-size="sizeIcon"
    ></TabletUIArrow>
  </button>
</template>

<script setup>
import { ref, computed } from 'vue';
import TabletUIArrow from '../assets/icons/TabletUIArrow.vue';
import TabletUIDone from '../assets/icons/TabletUIDone.vue';

const isActionSubmitted = ref(null);

const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  text: {
    type: String,
    default: '',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: 'large',
  },
  isRadius: {
    type: Boolean,
    default: true,
  },
  locationIcon: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['actionSubmitted']);

const colorIcon = computed(() => {
  if (!props.isDisabled) {
    switch (props.color) {
      case 'secondary':
      case 'plane':
      case 'outline':
        return `primary`;
      default:
        return `secondary`;
    }
  } else {
    return 'light-gray-55';
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
});

const backgroundColor = computed(() => {
  if (props.isDisabled) {
    return 'disabled';
  }

  switch (props.color) {
    case 'secondary':
    case 'plane':
    case 'outline':
      return props.color;
    default:
      return 'primary';
  }
});

const buttonSize = computed(() => {
  switch (props.height) {
    case 'medium':
      return 'medium';
    case 'small':
      return 'small';
    case 'extra-small':
      return 'extra-small';
    default:
      return 'large';
  }
});

const buttonText = computed(() => {
  const text = isActionSubmitted.value ? '' : props.text;
  return text;
});

const buttonIcon = computed(() => {
  const icon = isActionSubmitted.value ? '' : props.locationIcon;
  return icon;
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
    if (props.isRadius) {
      event.target.classList.add('in-progress');
    } else {
      event.target.classList.add('in-progress');
      event.target.classList.add('not-radius');
    }
  }
}
function finishAnimation(event) {
  if (!props.isDisabled) {
    if (props.isRadius) {
      event.target.classList.remove('in-progress');
    } else {
      event.target.classList.remove('in-progress');
      event.target.classList.remove('not-radius');
    }
  }
}
</script>

<style lang="scss">
@import 'assets/css/main.scss';

.action-tablet-ui-btn {
  width: 100%;
  height: $xl-4;
  border-radius: $d-1;
  text-align: center;
  font-size: $font-size-p1;
  font-family: Golos UI;
  letter-spacing: -0.24px;
  line-height: $line-height-120;
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

  // Расположение текста по центру без иконок
  &.min-width-empty {
    justify-content: center;
  }

  // Виды кнопок
  &.primary {
    background-color: $primary;
    color: $light-gray-55;
  }

  &.secondary {
    background-color: $primary-10;
    color: $primary;
  }

  &.plane {
    background-color: $secondary;
    color: $primary;
  }

  &.outline {
    border: solid 1px $primary;
    background-color: $secondary;
    color: $primary;
  }

  &.disabled {
    background-color: $primary-10;
    color: $secondary;
  }

  // Варианты расположения иконок и текста
  &.text-center {
    text-align: center;
  }

  //Размеры кнопки
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
    padding: 10px $s-2;
    gap: $s-1;
  }

  // Скругление углов
  &.without-rounding {
    border-radius: 0;
  }

  &.in-progress {
    &::before {
      content: '';
      position: absolute;
      background: $primary;
      opacity: 0.25;
      width: 0;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: $d-1;
      animation: filling 2s linear 0s 1 normal backwards;
    }

    &.primary {
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
  }

  &.done {
    &::before {
      content: '';
      background-size: 28px 28px;
      background-repeat: no-repeat;
      position: absolute;
      width: 28px;
      height: 28px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
