<template>
  <q-btn
    :class="btnClasses"
    :disabled="btnDisabled"
    no-caps
    :ripple="false"
    flat
    ref="btnRef"
    v-touch-hold:1000:200:200.mouse="handleHold"
    @mousedown="startAnimation"
    @touchstart="startAnimation"
    @mouseup="finishAnimation"
    @touchend="finishAnimation"
  >
    <v-icon v-if="showSubmittedIcon" name="done" :size="sizeIcon" />
    <template v-else>
      <span
        v-if="icon && locationIcon === 'left'"
        class="v-btn__icon-container justify-start"
      >
        <v-icon :name="icon" :size="sizeIcon" />
      </span>
      <span class="v-btn__text"><slot></slot></span>
      <span
        v-if="icon && locationIcon === 'right'"
        class="v-btn__icon-container justify-end"
      >
        <v-icon :name="icon" :size="sizeIcon" />
      </span>
    </template>
  </q-btn>
</template>

<script setup>
import { VIcon } from '@base';
import { computed, ref } from 'vue';

const props = defineProps({
    color: {
        type: String,
        required: false,
        validator: (val) => ['primary', 'secondary', 'plane', 'outline', 'red'].includes(val),
    },
    isDisabled: {
        type: Boolean,
        required: false,
    },
    height: {
        type: String,
        required: false,
        validator: (val) => ['lg', 'md', 'sm', 'xs'].includes(val),
    },
    locationIcon: {
        type: String,
        required: false,
    },
    icon: {
        type: String,
        required: false,
    },
    textAlignment: {
        type: String,
        required: false,
        validator: (val) => ['left', 'center', 'right'].includes(val),
    },
    fitWidth: {
        type: Boolean,
        required: false,
    },
    changeIcon: {
        type: Boolean,
        required: false,
    },
    progress: {
        type: Boolean,
        required: false,
    },
});

const emit = defineEmits(['actionSubmitted']);

const btnRef = ref(null);
const btnStatus = ref('default'); // default, progress or done

const showSubmittedIcon = computed(() => props.changeIcon && btnStatus.value === 'done');

const btnClasses = computed(() => [
    'v-btn',
    `v-btn--${buttonSize.value}`,
    showSubmittedIcon.value ? doneOpacity.value : '',
    backgroundColor.value,
    {
        disabled: btnDisabled.value,
        'fit-width': props.fitWidth,
        'min-width-empty': props.locationIcon === '',
        [`text-${props.textAlignment}`]: props.textAlignment,
        'in-progress': btnStatus.value === 'progress',
        done: showSubmittedIcon.value,
    },
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
        default:
            return 'done-primary';
    }
});

const sizeIcon = computed(() => {
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
            return props.height;
        default:
            return 'lg';
    }
});

const btnDisabled = computed(() => props.isDisabled || btnStatus.value === 'done');

const handleHold = ({ evt }) => {
    if (btnDisabled.value || !props.progress) return;

    if (props.changeIcon && btnRef.value) {
        btnStatus.value = 'done';
        finishAnimation(evt, true);
    }
    submitAction(evt);
};

const submitAction = () => {
    emit('actionSubmitted');
};

const stopAnimation = () => finishAnimation();

const startAnimation = () => {
    if (btnDisabled.value || !props.progress) return;

    btnStatus.value = 'progress';
    document.addEventListener('mouseup', stopAnimation);
    document.addEventListener('touchend', stopAnimation);
};

const finishAnimation = (_evt, finished) => {
    if (btnDisabled.value || !props.progress) return;

    if (props.changeIcon && finished) {
        btnStatus.value = 'done';
    } else {
        btnStatus.value = 'default';
    }
    document.removeEventListener('mouseup', stopAnimation);
    document.removeEventListener('touchend', stopAnimation);
};
</script>

<style lang="scss">
.pointer-icon {
  pointer-events: none;
}

.v-btn {
  width: 100%;
  height: $xl-4;
  border-radius: $d-1;
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

    .q-btn__content {
      justify-content: center;
    }
  }

  &.fit-width {
    width: auto;
  }

  &__text {
    flex-grow: 1;
    text-align: left;
    width: min-content;
  }

  .q-btn__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: $s-2;
    flex-wrap: nowrap;
  }

  .q-focus-helper {
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
