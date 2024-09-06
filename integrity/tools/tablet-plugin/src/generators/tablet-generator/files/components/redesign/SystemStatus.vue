<template>
  <button @mousedown="startAnimation" @touchstart="startAnimation"
          @mouseup="finishAnimation" @touchend="finishAnimation"
          v-touch-hold:1000.mouse="handleHold"
          class="status-system"
          :class="[{ 'active': props.isActive }, { 'done': isActionSubmitted }, backgroundColor]">
    {{ t('system-status.' + statusType) }}
    <IconStatus class="pointer-icon" :color="props.color" :is-animate="props.isSync"></IconStatus>
  </button>
</template>

<script setup>
import {computed, ref} from "vue";
import IconStatus from "./IconStatus.vue";

const props = defineProps({
  /** Цвет индикатора статуса принтера */
  color: {
    type: String,
    default: ''
  },
  /** Текст статуса принтера */
  statusType: {
    type: String,
    default: ''
  },
  /** Текст статуса принтера */
  isSync: {
    type: Boolean,
    default: false
  },
  /** Режим отладки */
  isActive: {
    type: Boolean,
    default: false
  },
})

const isActionSubmitted = ref(null)
const emit = defineEmits(['actionSubmitted'])

const backgroundColor = computed(() => {
  if (props.isActive) {
    switch (props.color) {
      case 'warning':
        return `active-warning`
      case 'error':
        return `active-error`
      case 'success':
        return 'active-success'
    }
  } else {
    return ''
  }
})

function handleHold({evt, ...newInfo}) {
  if (props.isActive) {
    finishAnimation(evt)
    setTimeout(submitAction, 800)
  }
}

function submitAction() {
  emit('actionSubmitted')
}

function startAnimation(event) {
  if (props.isActive) {
    event.target.classList.add('in-progress')
    if (props.color === 'success') {
      event.target.classList.add('in-progress-success')
    }
    if (props.color === 'error') {
      event.target.classList.add('in-progress-error')
    }
    if (props.color === 'warning') {
      event.target.classList.add('in-progress-warning')
    }
  }
}

function finishAnimation(event) {
  if (props.isActive) {
    event.target.classList.remove('in-progress')
    if (props.color === 'success') {
      event.target.classList.remove('in-progress-success')
    }
    if (props.color === 'error') {
      event.target.classList.remove('in-progress-error')
    }
    if (props.color === 'warning') {
      event.target.classList.remove('in-progress-warning')
    }  }
}
</script>

<style scoped lang="scss">
@import 'assets/css/main.scss';

// при нажатии на иконку срабатывает клик по кнопке
.pointer-icon {
  pointer-events: none;
}

.status-system {
  display: flex;
  gap: 12px;
  align-items: center;
  max-width: 100%;
  height: $l-4;
  padding: 10px $s-2;
  background: none;

  position: relative;
  box-shadow: none;
  border: none;
  animation: none;

    font-family: Golos UI-medium;
    color: $dark-gray-85;
    font-size: $font-size-p2;
    line-height: 24px;
    letter-spacing: -0.24px;

  &.active-success {
    background: $success-25;
  }

  &.active-error {
    background: $primary-25;
  }

  &.active-warning {
    background: $warning-25;
  }

  &.in-progress {
    &.in-progress-success {
      background: linear-gradient(to right, $success 50%, $success-25 50%);
      background-size: 200% 100%;
      animation: filling 1s linear 0s 1 normal backwards;
    }
    &.in-progress-error {
      background: linear-gradient(to right, $error 50%, $primary-25 50%);
      background-size: 200% 100%;
      animation: filling 1s linear 0s 1 normal backwards;
    }
    &.in-progress-warning {
      background: linear-gradient(to right, $warning 50%, $warning-25 50%);
      background-size: 200% 100%;
      animation: filling 1s linear 0s 1 normal backwards;
    }
  }

    &.done-success {
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: $success;
      }
    }
    &.done-error {
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: $error;
      }
    }
    &.done-warning {
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: $warning;
      }
    }
}

@keyframes filling {
  0% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
}
</style>
