<template>
  <button
      :disabled="props.isDisabled" class="radio-btn" :class="[backgroundColor,buttonSize]" @click="submitAction">
    <RadioButtonIconEmpty v-if="!isSelect" :icon-color="colorIcon" :icon-size="sizeIcon"></RadioButtonIconEmpty>
    <RadioButtonIconSelect v-if="isSelect" :icon-color="colorIcon" :icon-size="sizeIcon"></RadioButtonIconSelect>
    {{ buttonText }}
    <RadioButtonIcon v-if="isIcon === 'icon'" :icon-color="colorIcon" :icon-size="sizeIcon" class="radio-btn__status"></RadioButtonIcon>
    <IconStatus v-if="isIcon === 'status' && isDisabled === false" :is-animate="isAnimate" :color="iconStatus" class="radio-btn__status"></IconStatus>
  </button>
</template>

<script setup>

import {computed} from "vue";
import RadioButtonIconEmpty from "../../assets/icons/RadioButtonIconEmpty.vue";
import RadioButtonIcon from "../../assets/icons/RadioButtonIcon.vue";
import RadioButtonIconSelect from "../../assets/icons/RadioButtonIconSelect.vue";
import IconStatus from "./IconStatus.vue";

const props = defineProps({
  /** Вид кнопки */
  color: {type: String, default: 'primary'},
  /** Дополнительные элементы справа */
  isIcon: {type: String, default: ''},
  /** Выбранное значение */
  isSelect: {type: Boolean, default: false},
  /** Текст кнопки */
  buttonText: {type: String, default: ''},
  /** Не активное состояние кнопки */
  isDisabled: {type: Boolean, default: false},
  /** Высота кнопки */
  height: {type: String, default: 'large'},

  /** Цвет иконки статуса и анимированное состояние*/
  isAnimate: {type: Boolean, default: true},
  iconStatus: {type: String, default: 'info'},
})

const emit = defineEmits(['actionSubmitted'])
function submitAction() {
  emit('actionSubmitted')
}

const backgroundColor = computed(() => {
  if (props.isDisabled) {
    return 'disabled'
  }
  switch (props.color) {
    case 'secondary':
    case 'plane':
    case 'outline':
      return props.color
    default:
      return 'primary'
  }
})

const colorIcon = computed(() => {
  if(!props.isDisabled) {
    switch (props.color) {
      case 'secondary':
      case 'plane':
      case 'outline':
        return `secondary`
      default:
        return `primary`
    }
  } else {
    return 'disabled'
  }
})

const sizeIcon = computed(() => {
  switch (props.height) {
    case 'large':
      return 36
    default:
      return 28
  }
})

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

.radio-btn {
  width: 100%;
  height: $xxl-4;
  border-radius: $d-1;
  text-align: center;
  font-size: $font-size-p1;
  font-family: Golos UI-medium;
  letter-spacing: -0.24px;
  line-height: $s-4;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: $s-2;
  box-shadow: none;
  border: none;
  animation: none;
  padding: 26px $s-4;

  &__status {
    position: absolute;
    right: $m-4;
  }

  // Виды кнопок
  &.primary {
    color: $light-gray-40;
    background-color: $primary-text;
  }

  &.secondary {
    background-color: $primary-text-20;
    color: $dark-gray;
  }

  &.plane {
    background: none;
    color: $dark-gray;
  }

  &.outline {
    border: solid 1px $primary-text;
    background: none;
    color: $dark-gray;
  }

  &.disabled {
    color: $light-gray-40;
    background: $primary-text-10;
    opacity: 1 !important;
  }

  //Размер (высота) кнопки
  &.large {
    height: $xxl-4;
  }

  &.medium {
    height: $xl-4;
    padding: 22px $s-4;
  }

  &.small {
    height: $l-4;
    padding: 14px $s-3;
  }

  &.extra-small {
    height: $l-1;
    padding: $d-1 $s-2;
    gap: $s-1;
    font-size: $font-size-p2;

  }
}
</style>
