<template>
    <button
        @mousedown="startAnimation" @touchstart="startAnimation"
        @mouseup="finishAnimation" @touchend="finishAnimation"
        v-touch-hold:1000.mouse="handleHold"
        class="action-tablet-btn" :disabled="props.isDisabled"
        :class="[{ 'text-center': props.locationIcon }, { 'disabled': props.isDisabled }, { 'done-icon': isActionSubmitted }, backgroundColor, buttonSize, borderRadius, {'min-width-empty': props.locationIcon === '' }]"
    >
        <TabletUIDone v-if="isActionSubmitted" :icon-color="colorIcon" :icon-size="sizeIcon"></TabletUIDone>
        <TabletUIArrow class="pointer-icon" v-if="props.locationIcon === 'left' && buttonIcon" :icon-color="colorIcon" :icon-size="sizeIcon"></TabletUIArrow>
            {{ buttonText }}
        <TabletUIArrow class="pointer-icon" v-if="props.locationIcon === 'right' && buttonIcon" :icon-color="colorIcon" :icon-size="sizeIcon"></TabletUIArrow>
    </button>
</template>

<script setup>
import { ref, computed } from 'vue'
import TabletUIArrow from '../icons/TabletUIArrowRedesign.vue'
import TabletUIDone from '../icons/TabletUIDoneRedesign.vue'
const isActionSubmitted = ref(null)
const props = defineProps({
    color: {
        type: String,
        default: 'primary'
    },
    text: {
        type: String,
        default: ''
    },
    isDisabled: {
        type: Boolean,
        default: false
    },
    height: {
        type: String,
        default: 'large'
    },
    isRadius: {
        type: Boolean,
        default: true
    },
    locationIcon: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['actionSubmitted'])

const colorIcon = computed(() => {
    if (!props.isDisabled) {
        switch (props.color) {
            case 'secondary':
            case 'plane':
            case 'outline':
                return 'primary'
            default:
                return 'secondary'
        }
    } else {
        return 'light-gray-55'
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

const borderRadius = computed(() => {
    if (!props.isRadius) {
        return 'without-rounding'
    }
    return ''
})

const backgroundColor = computed(() => {
    switch (props.color) {
        case 'secondary':
        case 'plane':
        case 'outline':
            return props.color
        default:
            return 'primary'
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

const buttonText = computed(() => {
    const text = isActionSubmitted.value ? '' : props.text
    return text
})

const buttonIcon = computed(() => {
    const icon = isActionSubmitted.value ? '' : props.locationIcon
    return icon
})

function handleHold({evt, ...newInfo}) {
    if (!props.isDisabled) {
        isActionSubmitted.value = newInfo
        finishAnimation(evt)
        evt.target.classList.add('done')
        evt.target.disabled = true
        setTimeout(submitAction, 800)
    }
}

function submitAction() {
    emit('actionSubmitted')
}

function startAnimation(event) {
    if (!props.isDisabled) {
        if (props.isRadius) {
            event.target.classList.add('in-progress')
        } else {
            event.target.classList.add('in-progress')
            event.target.classList.add('not-radius')
        }
    }
}

function finishAnimation(event) {
    if (!props.isDisabled) {
        if (props.isRadius) {
            event.target.classList.remove('in-progress')
            event.target.classList.remove('radius')
        } else {
            event.target.classList.remove('in-progress')
            event.target.classList.remove('not-radius')
        }
    }
}

</script>

<style lang="scss">
.pointer-icon {
    pointer-events: none;
}
.action-tablet-btn {
    width: 100%;
    height: $xl-4;
    border-radius: $d-1;
    text-align: center;
    font-size: $font-size-p1;
    font-family: Golos UI-medium;
    letter-spacing: -0.24px;
    line-height: $s-4;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: $s-2;
    position: relative;
    box-shadow: none;
    border: none;
    animation: none;

    &.done-icon {
        justify-content: center;
    }

    &.min-width-empty {
        justify-content: center;
    }

    &.primary {
        background-color: $primary-text;
        color: $secondary;
    }

    &.secondary {
        background-color: $primary-text-20;
        color: $primary-text;
    }

    &.plane {
        color: $primary-text;
        background: none;
    }

    &.outline {
        border: solid 1px $primary-text;
        color: $primary-text;
        background: none;
    }

    &.disabled {
        background-color: $primary-text;
        color: $secondary;
        opacity: 0.1 !important;
    }

    &.text-center {
        text-align: center;
    }

    &.large {
        height: $xxl-4;
        padding: $m-2 $m-1;
    }

    &.medium {
        padding: $s-4;
    }

    &.small {
        height: $l-4;
        padding: $s-2 $s-3;
    }

    &.extra-small {
        height: $l-1;
        padding: 10px $s-2;
        gap: $s-1;
        font-size: $font-size-p2;
    }

    &.without-rounding {
        border-radius: 0;
    }

    &.in-progress {
        &::before {
            content: '';
            position: absolute;
            background: $primary-text;
            opacity: 0.2;
            width: 0;
            height: 100%;
            top: 0;
            left: 0;
            border-radius: $d-1 0 0 $d-1;
            animation: filling 1s linear 0s 1 normal backwards;
        }

        &.primary {
            &::before {
                background: $secondary;
                opacity: 0.2;
            }
        }

        &.not-radius {
            &::before {
                border-radius: 0;
            }
        }

        &.radius {
            &::before {
                border-radius: $d-1;
            }
        }
    }

    &.done {
        &::before {
            content: '';
            background-size: $m-1 $m-1;
            background-repeat: no-repeat;
            position: absolute;
            width: $m-1;
            height: $m-1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
  
@keyframes filling {
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
}
</style>
