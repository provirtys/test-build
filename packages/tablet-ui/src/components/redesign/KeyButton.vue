<template>
  <div class="pin-button" @click="pressed" v-touch-hold:500.mouse="pressed">
    <v-icon v-if="value === 'Back'" name="backspaceRedesign" />
    <span v-else class="pin-button__h2">{{ value }}</span>
  </div>
</template>

<script setup>
import { VIcon } from "@base";

const props = defineProps({
    /** Значение кнопки*/
    value: { type: String, default: "" },
});

const emit = defineEmits(["pressed"]);

function pressed() {
    emit("pressed", props.value);
}
</script>

<style lang="scss">
.pin-button {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: $b-4;
  height: $xl-4;
  background: $primary-text-20;
  transition: background 0.5s;
  border-radius: $d-1;
  outline: none !important;
  color: $primary-text;

  &:active {
    background: $primary-text-40;
    transition: background 0.5s;
  }

  .icon {
    max-height: 45px;
  }

  &__h2 {
    font-family: Golos UI-medium;
    font-size: $font-size-p1;
    color: $dark-gray;
  }
}
</style>
