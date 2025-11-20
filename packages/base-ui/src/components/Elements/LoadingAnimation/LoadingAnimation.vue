<template>
  <div class="loading-animation__wrapper">
    <v-icon class="animation__bg" name="loading-circle"/>
    <v-icon class="animation animation_25" name="loading-circle-part"/>
    <v-icon class="animation animation_50" name="loading-circle-part"/>
    <v-icon class="animation animation_75" name="loading-circle-part"/>
    <v-icon class="animation animation_100" name="loading-circle-part"/>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from '@';
</script>

<style scoped lang="scss">
.loading-animation__wrapper {
  position: relative;
  display: inline-block;
  z-index: 2;

  .animation {
    position: absolute;
    top: 0;
    right: 0;
    animation-name: loading;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    opacity: 0;
    color: #D21919;

    &__bg {
      margin-bottom: 50px;
      color: #B1B8C7;
    }

    &_25 {
      animation-delay: 0s;
      transform: rotate(0deg);
    }

    &_50 {
      animation-delay: 0.3s;
      transform: rotate(90deg);
    }

    &_75 {
      animation-delay: 0.6s;
      transform: rotate(180deg);
    }

    &_100 {
      animation-delay: 0.9s;
      transform: rotate(270deg);
    }
  }
}

@keyframes loading {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

</style>
