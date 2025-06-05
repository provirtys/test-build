<template>
  <div class="labeling-type">
    <div
      class="labeling-type__status"
      :class="[{ active: !props.isActive }, { disabled: props.isActive && props.isDisabled }]"
    >
      <CommonIcon name="auto" />
      <p>{{ textAuto }}</p>
    </div>
    <div
      class="labeling-type__status"
      :class="[{ active: props.isActive }, { disabled: !props.isActive && props.isDisabled }]"
    >
      <CommonIcon name="list" />
      <p>{{ textList }}</p>
    </div>
  </div>
</template>

<script setup>
import CommonIcon from '../CommonIcon.vue'

const props = defineProps({
  isActive: { type: Boolean, default: true },
  textAuto: { type: String, default: '' },
  textList: { type: String, default: '' },
  isDisabled: { type: Boolean, default: false },
})
</script>

<style lang="scss">
@import '../../css/main.scss';

.pointer-icon {
  pointer-events: none;
}

.labeling-type {
  width: 100%;
  display: flex;
  background: $primary-text-20;
  color: $primary-text;
  border-radius: 12px;
  padding: 4px;
  height: 52px;

  &__status {
    display: flex;
    gap: 12px;
    flex: 1;
    border-radius: 8px;
    padding: 8px 16px;
    align-items: center;

    &.active {
      color: $secondary;
      background-color: $primary-text;
    }

    //Для любого не активного элемента прозрачность – 0.1 (10%)
    &.disabled {
      opacity: 0.1 !important;
    }

    p {
      margin: 0;
      font-family: Golos UI-medium;
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.24px;
    }
  }
}
</style>
