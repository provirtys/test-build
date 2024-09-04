<template>
  <button class="base-button" :disabled="props.isDisabled" :class="classes">
    <span v-if="props.icon" :style="img"></span>
    {{ text }}
  </button>
</template>

<script setup>
import { computed } from 'vue';

let props = defineProps({
  /** Цвет фона*/
  background: {
    type: String,
    default: 'red',
  },
  /** Цвет текста и рамки*/
  color: {
    type: String,
    default: 'white',
  },
  /** Текст кнопки*/
  text: {
    type: String,
    required: true,
  },
  /** Активность кнопки*/
  isDisabled: {
    type: Boolean,
    default: false,
  },
  /** Размер кнопки*/
  size: {
    type: String,
    default: 'medium',
  },
  /** Иконка кнопки*/
  icon: {
    type: String,
    default: '',
  },
});

const classes = computed(() => {
  let bg = props.isDisabled
    ? 'gray-bg'
    : props.background === 'red'
    ? 'red-bg'
    : 'transparent';
  let border =
    props.color === 'white'
      ? 'no-border'
      : props.color === 'black'
      ? 'black-border'
      : 'red-border';
  let button_size =
    props.size === 'large'
      ? 'large'
      : props.size === 'full'
      ? 'full'
      : 'medium';
  return `${bg} ${border} ${button_size}`;
});

const img = computed(() => {
  return { background: `url('${props.icon}') center/cover no-repeat` };
});
</script>

<style lang="scss">
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 17px;
  width: 100%;
  max-width: 300px;
  height: 45px;
  font-size: $font-size-p4;
  font-family: Ubuntu-medium, serif;
  letter-spacing: 1px;
  outline: none;
  border: none;
  color: $primary;
  background: none;
  border-radius: $xxxl-3;
  box-shadow: 0 $d-0 10px rgba($dark-gray-40, 0.24);
  cursor: pointer;
  transition: 0.3s;

  &.gray-bg {
    background: $dark-gray-40;
  }

  &.red-bg {
    background: $primary;
    box-shadow: 0 $d-0 10px $primary-40;

    &:hover {
      background: $primary-70;
    }
  }

  &.transparent {
    background: none;
  }

  &.no-border {
    border: none;
    color: $secondary;
  }

  &.black-border {
    border: 1px solid $dark-gray;
    color: $dark-gray;

    &:hover {
      background: $dark-gray-40;
      color: $secondary;
      border: none;
    }
  }

  &.red-border {
    border: 1px solid $primary;
    color: $primary;

    &:hover {
      color: $primary-70;
    }
  }

  &.medium {
    width: 100%;
    max-width: 300px;
  }

  &.large {
    width: 100%;
    max-width: 350px;
  }

  &.full {
    width: 100%;
    max-width: none;
  }

  span {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    float: left;
  }
}
</style>
