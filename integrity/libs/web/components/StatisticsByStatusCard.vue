<template>
  <div class="statistics-card">
    <div class="statistics-card__title">{{ title }}</div>
    <div class="statistics-card__number">{{ number }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  number: { type: Number, default: 0 },
});
</script>

<style lang="scss">
@import 'assets/css/main.scss';

.statistics-card {
  flex: 1;
  max-width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: $s-1;
  border-radius: $d-1;
  box-shadow: 0 0 10px $dark-gray-40;
  background: $secondary;

  &__title {
    font-size: $font-size-p5;
    color: $dark-gray-40;
    align-self: flex-start;
    justify-self: flex-start;
  }

  &__number {
    font-size: $xl-1;
    line-height: $line-height-150;
    color: $dark-gray;
  }
}
</style>
