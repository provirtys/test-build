<template>
  <div class="mobile-scanner">
    <button
      v-if="lightSwitcher"
      class="mobile-scanner__light-button"
      :class="[isLightOn ? 'active' : '']"
      @click="onCameraLightButton"
      data-testid="button"
    />
    <div class="mobile-scanner__wrapper">
      <div class="mobile-scanner__camera-preview" />
      <div class="mobile-scanner__border" :style="{ width: props.width, height: props.height }">
        <img
          v-if="codeType === 'Code128'"
          src="@base/assets/images/scan-border-wide.png"
          alt="Scan border"
        />
        <img v-else src="@base/assets/images/scan-border-square.png" alt="Scan border" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    /** Переключение света*/
    lightSwitcher: { type: Boolean, default: false },
    /** Ширина сканера */
    width: { type: String, default: "50%" },
    /** Высота сканера */
    height: { type: String, default: "auto" },
    /** Вариант изображения кода*/
    codeType: { type: String, default: "Code128" },
});

const isLightOn = ref(false);

function onCameraLightButton() {
    try {
        isLightOn.value = !isLightOn.value; // далее это убрать и сделать через store setCameraTorchState
    } catch (e) {
        console.error("onCameraLightButton():", JSON.stringify(e));
    }
}
</script>

<style lang="scss">
.mobile-scanner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  &__light-button {
    background-color: transparent;
    box-shadow: none;
    border-width: 0px;
    background-image: url('@base/assets/images/camera-flash-off.svg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: $m-3;
    height: $m-3;
    margin-right: $s-3;
    cursor: pointer;

    &.active {
      background-image: url('@base/assets/images/camera-flash-on.svg');
    }
  }

  &__wrapper {
    position: relative;
    height: 100%;
    min-width: $xxxl-3;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__camera-preview {
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  &__border {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (orientation: portrait) {
  .mobile-scanner {
    flex-direction: column;
    justify-content: center;

    &__light-button {
      margin-right: 0;
    }
  }
}
</style>
