<template>
  <button
    class="btn-tablet"
    :disabled="props.isDisabled"
    :class="[{ 'text-left': props.icon }, backgroundColor, buttonSize]"
  >
    {{ text }}
    <img v-if="props.icon" :src="props.icon" />
  </button>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  color: {
    type: String,
    default: 'red',
  },
  icon: {
    type: String,
    default: '',
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
});

const backgroundColor = computed(() => {
  if (props.isDisabled) {
    return 'disabled';
  }

  switch (props.color) {
    case 'dark':
    case 'gray':
    case 'light-gray':
      return props.color;
    default:
      return 'red';
  }
});

const buttonSize = computed(() => {
  switch (props.height) {
    case 'medium':
      return 'medium';
    default:
      return 'large';
  }
});
</script>

<style lang="scss">
.btn-tablet {
  width: 100%;
  border-radius: $d-1;
  text-align: center;
  font-size: $font-size-p1;
  font-family: Golos UI;
  letter-spacing: -0.24px;
  line-height: $line-height-120;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: $d-0;
  position: relative;
  box-shadow: none;
  border: none;

  &.red {
    background-color: $primary;
    color: $light-gray-55;
  }

  &.dark {
    background-color: $dark-gray;
    color: $secondary;
  }

  &.gray {
    background-color: $light-gray-70;
    color: $dark-gray;
  }

  &.light-gray {
    background-color: $light-gray-55;
    color: $dark-gray;
  }

  &.disabled {
    background-color: $dark-gray-40;
    color: $light-gray-55;
  }

  &.text-left {
    text-align: left;
    justify-content: space-between;
  }

  &.medium {
    height: $xl-2;
    padding: $s-3;
  }

  &.large {
    height: $xxl-4;
    padding: $m-2 $m-1;
  }
}
</style>
