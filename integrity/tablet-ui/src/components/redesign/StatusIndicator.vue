<template>
  <div class="status-indicator">
    <div class="status-indicator__dot" :class="props.color">
    </div>
    <div v-if="isAnimate" class="status-indicator__border animate-ping" :class="props.color"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  /** Цвет индикатора*/
  color: {
    type: String,
    default: 'info'
  },
  /** Анимированное состояние иконки*/
  isAnimate: {
    type: Boolean,
    default: false
  },
})
</script>

<style lang="scss">
@import '../../css/main.scss';

.status-indicator {
  display: flex;
  align-items: center;
  justify-content: center;

  &__dot {
    width: $s-1;
    height: $s-1;
    border-radius: 50%;

    &.info {
      background: $info;
    }

    &.warning {
      background: $warning;
    }

    &.success {
      background: $success;
    }

    &.error {
      background: $error;
    }
  }

  &__border {
    position: absolute;
    width: $s-1;
    height: $s-1;
    border-radius: 50%;
    box-sizing: content-box;
    border-width: 1px;
    border-style: solid;

    &.info {
      border-color: $info-40;
    }

    &.warning {
      border-color: $warning-40;
    }

    &.success {
      border-color: $success-40;
    }

    &.error {
      border-color: $error-40;
    }
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(1, 1, 0, 0) infinite;
}

@keyframes ping {
  from {
    border-width: 1.5px;
    scale: 0;
  }

  to {
    border-width: 2px;
    scale: 2;
  }
}
</style>
