<template>
  <div class="icon-status">
    <div class="icon-status__indicator" :class="props.color">
    </div>
    <div v-if="isAnimate" class="icon-status__border animate-ping" :class="props.color"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  /** Цвет индикатора статуса принтера */
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

.icon-status {
  display: flex;
  align-items: center;
  justify-content: center;

  &__indicator {
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
    width: 18px;
    height: 18px;
    border-radius: 50%;
    box-sizing: content-box;

    &.info {
      border: 1px solid $info-40;
    }

    &.warning {
      border: 1px solid $warning-40;
    }

    &.success {
      border: 1px solid $success-40;
    }

    &.error {
      border: 1px solid $error-40;
    }
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(1, 1, 0, 0) infinite;
}
  @keyframes ping {
    0% {
      border-width: 2px;
      scale: 0;
    }

    to {
      border-width: 3px;
      scale: 1.2;
    }
  }
</style>
