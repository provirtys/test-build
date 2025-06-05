<template>
  <button class="btn-mobile" :class="[props.color, { 'text-left': props.icon }]">
    {{ text }}<img v-if="props.icon" :src="props.icon" />
  </button>
</template>

<script setup>
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
})
</script>

<style lang="scss">
@import '../css/main.scss';

.btn-mobile {
  height: $l-2;
  width: 100%;
  flex-grow: 1;
  border-radius: $d-1;
  padding: $s-1 $s-2;
  color: $light-gray-55;
  text-align: center;
  font-size: $font-size-p3;
  font-family: Golos UI;
  letter-spacing: -0.23999999463558197px;
  line-height: $line-height-150;
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
  }

  &.dark {
    background-color: $dark-gray;
  }

  &.dark-grey {
    background-color: $light-gray-85;
    color: $dark-gray;
  }

  &.text-left {
    text-align: left;
    justify-content: space-between;
  }
}
</style>
