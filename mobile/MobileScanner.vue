<template>
    <div class="mobile-scanner">
        <button v-if="lightSwitcher" class="mobile-scanner__light-button" :class="{ 'active': isLightOn }" @click="onCameraLightButton" />
        <div class="mobile-scanner__wrapper">
            <div class="mobile-scanner__camera-preview" />
            <div class="mobile-scanner__border" />
        </div>
        <p class="mobile-scanner__description" :class="{ 'text-red': helper.type === 'red' }">{{ helper.text }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    lightSwitcher: { type: Boolean, default: false },
    helper: { type: Object, default: () => ({}) }
})

const isLightOn = ref(false)

async function onCameraLightButton() {
    try {
        const desired_light_state = !isLightOn.value
        isLightOn.value = desired_light_state // далее это убрать и сделать через store setCameraTorchState
    } catch(e) {
        console.error("onCameraLightButton():", JSON.stringify(e));
    }
}
</script>

<style lang="scss" scoped>
.mobile-scanner {
    width: 100%;
    // max-width: 600px;
    height: 100%;
    // max-height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__light-button {
        background-color: transparent;
        box-shadow: none;
        border-width: 0px;
        background-image: url("../images/camera-flash-off.svg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: $m-3;
        height: $m-3;
        cursor: pointer;

        &.active {
            background-image: url("../images/camera-flash-on.svg");
        }
    }

    &__wrapper {
        position: relative;
        width: calc(min(100vh, 100vw) - $xxxl-3);
        min-height: $xxxl-3;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        margin: $m-3 $s-3;
    }

    &__camera-preview {
        position: relative;
        height: 100%;
        min-height: $xxxl-3;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12%;
		    background-size: 100% 100%;
    }

    &__border {
        position: absolute;
        height: 100%;
        min-height: $xxxl-3;
        aspect-ratio: 1/1;
        background-image: url("../images/scan-zone.svg");
		background-size: 100% 100%;
    }
}
.mobile-scanner__description {
    margin-top: $s-3;
    flex-shrink: 0;
    //min-height: 50px;
    padding: 0 $m-1 0 $m-1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    //margin-top: $m-2;
    color: $light-gray-55;
    font-family:Golos UI;
    white-space: pre-line;
    // margin-bottom: $s-1;

    &.text-red {
        color: $primary;
    }
}
</style>
