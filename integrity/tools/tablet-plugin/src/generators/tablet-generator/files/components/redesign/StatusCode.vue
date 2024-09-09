<template>
  <div class="labeling-code" :class="[{ 'error': status === 'broken' }]">
    <img v-if="codeType == 'Code128'" :src="barCode">
    <img v-else :src="dataMatrix">
    <div v-if="status === 'verified' || status === 'synced'" class="labeling-code__status">
      <IconStatus :is-animate="status === 'synced'" :color="color"></IconStatus>
    </div>
  </div>
</template>

<script setup>
import dataMatrix from '../../assets/images/datamatrixRedesign.svg'
import barCode from '../../assets/images/barcodeRedesign.svg'
import IconStatus from "./IconStatus.vue";

defineProps({
  codeType: {type: String, default: 'DataMatrix'},
  status: {type: String, default: ''},
  color: {type: String, default: 'info'},
})
</script>

<style lang="scss">
@import '../../assets/css/main.scss';

.labeling-code {
  width: $l-2;
  height: $l-2;
  border-radius: $d-0;
  padding: $s-3;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $light-gray-40;

  position: relative;

  &.error {
    background-color: $primary-25;
  }

  &__status {
    width: $s-1;
    height: $s-1;
    background: $warning;
    border-radius: 50%;

    position: absolute;
    top: 0;
    left: 90%;
    transform: translate(-30%, -30%);
  }
}
</style>
