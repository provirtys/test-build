<template>
  <label :class="classes">
    <input
      type="checkbox"
      class="checkbox__input"
      :checked="modelValue"
      :disabled="isDisabled"
      @change="() => $emit('update:modelValue', !modelValue)"
    />
    <CommonIcon :name="checkboxIconName" :size="iconSizes[height]['checkbox']" />
    <span :class="['checkbox__title', buttonSize]">{{ label }}</span>
    <CommonIcon v-if="iconName" :name="iconName" :size="iconSizes[height]['icon']" />
  </label>
</template>

<script setup>
import { computed } from 'vue'
import CommonIcon from '../CommonIcon.vue'

const props = defineProps({
  /** Выбранное значение */
  modelValue: { type: Boolean, default: false },
  /** Имя иконки */
  iconName: { type: String, default: '' },
  /** Вид Plane */
  isPlane: { type: Boolean, default: false },
  /** Высота */
  height: { type: String, default: 'large' },
  /** Текст кнопки */
  label: { type: String, default: 'Checkbox' },
  /** Активность чекбокса */
  isDisabled: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])

const classes = computed(() => [
  'checkbox',
  buttonSize.value,
  {
    active: props.modelValue,
    plane: props.isPlane,
    disabled: props.isDisabled,
  },
])

const checkboxIconName = computed(() =>
  props.modelValue ? 'checkbox-transparent-select' : 'checkbox-transparent-empty'
)

const iconSizes = {
  large: {
    icon: 60,
    checkbox: 44,
  },
  medium: {
    icon: 52,
    checkbox: 36,
  },
  small: {
    icon: 44,
    checkbox: 28,
  },
  'extra-small': {
    icon: 36,
    checkbox: 28,
  },
}

const buttonSize = computed(() => {
  switch (props.height) {
    case 'medium':
    case 'small':
    case 'extra-small':
      return props.height
    default:
      return 'large'
  }
})
</script>

<style lang="scss">
@import '../../css/main.scss';

.checkbox {
  width: 100%;
  border-radius: $d-1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $s-2;

  box-shadow: none;
  border: 1px solid $dark-gray;
  animation: none;
  background: none;

  &.active {
    background: $primary-text-20;
    color: $dark-gray;
  }

  &.plane {
    border: 1px solid transparent;
  }

  &.large {
    min-width: 278px;
    height: $xxl-4;
    padding: 22px $m-1;
  }

  &.medium {
    min-width: 254px;
    height: $xl-4;
    padding: 18px $s-4;
  }

  &.small {
    min-width: 230px;
    height: $l-4;
    padding: 14px $s-3;
  }

  &.extra-small {
    min-width: 206px;
    height: $l-1;
    padding: $d-1 $s-2;
    gap: $s-1;
  }

  &__input {
    display: none;
  }

  &__title {
    font-size: $font-size-p1;
    font-family: Golos UI-medium, sans-serif;
    letter-spacing: -0.24px;
    line-height: $s-4;
    color: $dark-gray;
    margin-right: auto;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    &.extra-small {
      font-size: $font-size-p2;
    }
  }
}
</style>
