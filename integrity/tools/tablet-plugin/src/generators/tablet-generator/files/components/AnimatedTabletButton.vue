<template>
    <button
      @mousedown="startAnimation" @touchstart="startAnimation"
      @mouseup="finishAnimation" @touchend="finishAnimation"
      v-touch-hold:2000.mouse="handleHold"
      class="btn" :disabled="props.isDisabled"
      :class="[{ 'text-left': props.icon }, backgroundColor, buttonSize]"
    >
      {{ buttonText }}
      <img v-if="buttonIcon" :src="buttonIcon">
    </button>
</template>

<script setup>
import { ref, computed } from 'vue'

const isActionSubmitted = ref(null)

const props = defineProps({
  color: {
    type: String,
    default: 'red'
  },
  icon: {
    type: String,
    default: ''
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
  }
})

const emit = defineEmits(['actionSubmitted'])

const backgroundColor = computed(() => {
  if (props.isDisabled) {
    return 'disabled'
  }

  switch (props.color) {
    case 'dark':
    case 'light':
      return props.color
    default:
      return 'red'
  }
})

const buttonSize = computed(() => {
  switch (props.height) {
    case 'medium':
      return 'medium'
    default:
      return 'large'
  }
})

const buttonText = computed(() => {
  const text = isActionSubmitted.value ? '' : props.text
  return text
})

const buttonIcon = computed(() => {
  const icon = isActionSubmitted.value ? '' : props.icon
  return icon
})

function handleHold ({ evt, ...newInfo }) {
  if (!props.isDisabled) {
    isActionSubmitted.value = newInfo
    finishAnimation(evt)
    evt.target.classList.add('done')
    evt.target.disabled = true
    setTimeout(submitAction, 800)
  }
}

function submitAction () {
  emit('actionSubmitted')
}

function startAnimation (event) {
  if (!props.isDisabled) {
    event.target.classList.add('in-progress')
  }
}

function finishAnimation (event) {
  if (!props.isDisabled) {
    event.target.classList.remove('in-progress')
  }
}
</script>

<style lang="scss">
.btn {
    width: 100%;
    border-radius: $d-1;
    text-align: center;
    font-size: $font-size-p1;
    font-family: Golos UI;
    letter-spacing: -0.24px;
    line-height: $line-height-120;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: $d-0;
    position: relative;
    box-shadow: none;
    border: none;
    animation: none;

    &.red {
        background-color: $primary;
        color: $light-gray-55;
    }

    &.dark {
        background-color: $dark-gray;
        color: $secondary;
    }
     &.dark-gray {
       background-color: $light-gray-40;
       color: $dark-gray;
     }

    &.light {
        background-color: $light-gray-55;
        color: $dark-gray;
    }

    &.disabled {
        background-color: $dark-gray-40;
        color: $light-gray-55;
    }

    &.text-left {
        text-align: left;
        justify-content: space-between;
    }

    &.medium {
        height: $xl-2;
        padding: $s-3;
    }

    &.large {
        height: $xxl-4;
        padding: $m-2 $m-1;
    }

    &.in-progress {
      &::before {
        content: '';
        position: absolute;
        background: rgba($dark-gray, 0.25);
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: $d-1;
        animation: filling 2s linear 0s 1 normal backwards;
      }

      &.dark {
        &::before {
          background: rgba($secondary, 0.25);
        }
      }
    }

    &.done {
      &::before {
        content: '';
        background-image: url('../assets/images/done.svg');
        background-size: $l-2 $l-2;
        background-repeat: no-repeat;
        position: absolute;
        width: $l-2;
        height: $l-2;
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
