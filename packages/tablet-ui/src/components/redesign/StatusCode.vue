<template>
  <div class="labeling-code" :class="[{ error: status === 'broken' }]">
    <CommonIcon v-if="codeType === 'Code128'" name="barcodeRedesign" />
    <CommonIcon v-else name="datamatrixRedesign" />
    <div v-if="status === 'verified' || status === 'synced'" class="labeling-code__status">
      <StatusIndicator :is-animate="status === 'synced'" :color="color"></StatusIndicator>
    </div>
  </div>
</template>

<script setup>
import CommonIcon from "@components/CommonIcon.vue";
import StatusIndicator from "./StatusIndicator.vue";

defineProps({
    codeType: { type: String, default: "DataMatrix" },
    status: { type: String, default: "" },
    color: { type: String, default: "info" },
});
</script>

<style lang="scss">
.labeling-code {
  width: $l-2;
  height: $l-2;
  border-radius: $d-0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $light-gray-40;
  color: $dark-gray;

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
