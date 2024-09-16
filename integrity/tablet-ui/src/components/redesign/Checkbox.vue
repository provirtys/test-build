<template>
  <button
      class="checkbox" :class="[{'active': isActive}, {'plane': isPlane }, buttonSize]" @click="submitAction">
    <div class="checkbox__title" :class="buttonSize">
      <CheckBoxIconEmpty v-if="!isActive" :heightButton="buttonSize"></CheckBoxIconEmpty>
      <CheckBoxIconSelect v-else :heightButton="buttonSize"></CheckBoxIconSelect>
      {{ buttonText }}
    </div>
    <CheckBoxIcon v-if="isIcon" :heightButton="buttonSize"></CheckBoxIcon>
  </button>
</template>

<script setup>
import CheckBoxIcon from '../../assets/icons/CheckBoxIcon.vue';
import CheckBoxIconEmpty from '../../assets/icons/CheckBoxIconEmpty.vue';
import CheckBoxIconSelect from '../../assets/icons/CheckBoxIconSelect.vue';
import {computed} from "vue";

const props = defineProps({
  isIcon: { type: Boolean, default: false },
  /** Выбранное значение */
  isActive: { type: Boolean, default: false },
  /** Вид Plane */
  isPlane: { type: Boolean, default: false },
  /** Высота */
  height: {type: String, default: 'large'},
  /** Текст кнопки */
  buttonText: {type: String, default: 'Checkbox'}
})

const emit = defineEmits(['actionSubmitted'])
function submitAction() {
  emit('actionSubmitted')
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

&__title {
  font-size: $font-size-p1;
  font-family: Golos UI-medium;
  letter-spacing: -0.24px;
  line-height: $s-4;
  color: $dark-gray;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  &.extra-small {
    font-size: $font-size-p2;
  }
}

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
}
</style>
