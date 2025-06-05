<template>
  <div class="status-bar">
    <button
      v-if="page == 'TaskList'"
      class="status-bar__button"
      v-touch-hold:2000.mouse="handleHold"
      @mousedown="startAnimation"
      @touchstart="startAnimation"
      @mouseup="finishAnimation"
      @touchend="finishAnimation"
    >
      <CommonIcon name="logout" />
      {{ t('logout') }}
    </button>
    <button v-else class="status-bar__button" @click="goBack">
      <CommonIcon name="arrowBack" />
      {{ t('back') }}
    </button>
    <p class="status-bar__task">{{ textTask }}</p>
    <div class="row">
      <button
        v-if="page == 'TaskList'"
        class="status-bar__button bg-primary mr-30"
        @click="toNewJob"
      >
        {{ t('newJob') }}
      </button>
      <SystemStatus :color="systemStatus.status" :statusType="systemStatus.text" />
    </div>
  </div>
</template>

<script setup>
import SystemStatus from './SystemStatus.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { setupI18n } from '../i18n.js'
import CommonIcon from './CommonIcon.vue'
import TabletButton from './redesign/TabletButton.vue'

const { t } = setupI18n()
const router = useRouter()

const isLogoutSubmitted = ref(false)

const props = defineProps({
  systemStatus: {
    type: Object,
    default: () => ({}),
  },
  page: {
    type: String,
    default: 'TaskList',
  },
  textTask: {
    type: String,
    default: 'Наименование задачи',
  },
})

const emit = defineEmits(['createNewJob', 'logout'])

function toNewJob() {
  emit('createNewJob')
}

function goBack() {
  router.go(-1)
}

function handleHold({ evt, ...newInfo }) {
  isLogoutSubmitted.value = newInfo
  finishAnimation(evt)
  emit('logout')
}

function startAnimation(event) {
  event.target.classList.add('in-progress')
}

function finishAnimation(event) {
  event.target.classList.remove('in-progress')
}
</script>

<style lang="scss">
@import '../css/main.scss';

.status-bar {
  width: 100%;
  height: $l-2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  z-index: 10001;
  position: relative;
  visibility: visible;

  &__button {
    background: $dark-gray;
    color: $secondary;
    font-size: $font-size-p1;
    height: $l-2;
    border-radius: $s-1;
    padding: $s-1 $s-3 $s-1 $s-2;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    position: relative;
    gap: 16px;

    &.mr-30 {
      margin-right: 30px;
    }

    &.in-progress {
      &::before {
        content: '';
        position: absolute;
        background: rgba($secondary, 0.25);
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: $s-1;
        animation: filling 2s linear 0s 1 normal backwards;
      }
    }
  }

  &__task {
    color: $dark-gray;
    font-size: $font-size-h6;
    margin: 10px 30px;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Ubuntu-medium, serif;
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
