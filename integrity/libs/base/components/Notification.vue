<template>
  <div class="notification" :class="{ min: props.isMin }">
    <div class="notification__panel" ref="panel" v-touch:swipe.right="swipe">
      <span class="notification__text">{{ props.text }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  /** Размер блока */
  isMin: { type: Boolean, default: false },

  /** Текст уведомления */
  text: { type: String, default: '' },
});
const panel = ref(null);

function swipe() {
  panel.value.style.left = '100%';
}
</script>

<style lang="scss">
@import 'assets/css/main.scss';

.notification {
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 0 50px;
  z-index: 10;

  &__panel {
    position: relative;
    left: 0;
    top: 0;
    transition: left ease-in 0.5s;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: $font-size-h6;
    color: $primary;
    background: $secondary;
    border-radius: $d-0;
    box-shadow: 0 $d-0 10px rgba($dark-gray, 0.25);
  }

  &__text {
    font-family: Ubuntu-medium, serif;
  }

  &.min {
    top: unset;
    left: unset;
    bottom: $xxxl-3;
    right: 0;

    @media (orientation: landscape) {
      max-width: 50%;
    }

    .panel {
      padding: 5px 5px;
      font-size: $font-size-p3;
    }
  }
}
</style>
