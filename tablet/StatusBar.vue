<template>
  <div class="status-bar">
    <button v-if="route.name == 'TaskList'" class="status-bar__button" v-touch-hold:2000.mouse="handleHold"
            @mousedown="startAnimation" @touchstart="startAnimation" @mouseup="finishAnimation" @touchend="finishAnimation">
      <img src="../images/logout.svg">{{ $t('logout') }}</button>
    <button v-else class="status-bar__button" @click="goBack"><img src="../images/arrowBack.svg">{{ $t('back') }}</button>
    <p class="status-bar__task">{{ otkStore.taskName }}</p>
    <div class="row">
      <button v-if="route.name == 'TaskList'" class="status-bar__button bg-primary mr-30" @click="scanTaskCode">{{ $t('newJob') }}</button>
      <SystemStatus :color="systemStatus.status" :statusType="systemStatus.text" />
    </div>
  </div>
</template>

<script setup>
// import axios from 'axios'
import SystemStatus from "./SystemStatus.vue";
import {ref, reactive, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
// import { useNewOtkStore } from '../stores/newOtkStore'

const route = useRoute()
const router = useRouter()
// const otkStore = useNewOtkStore()

const isLogoutSubmitted = ref(false)
// let requestTimer

const systemStatus = reactive({
  // status: 'error',
  // text: 'NOT_READY'
  // status: 'ok',
  // text: 'READY'
  // status: 'ok',
  // text: 'DISCONNECTED'
})
// async function getSystemStatus () {
//   const listDevices = [{"status": "Normal","ok": true},{"status": "Normal","ok": true},{"status": "Normal","ok": true}]
//
//   if (listDevices.length === 0 || listDevices.some(item => { return item.ok === false })) { // проверка на пустой массив объектов или значение каждого item.ok = false
//     systemStatus.text = "NOT_READY"
//     systemStatus.status = "error" //красный индикатор
//   } else {
//     systemStatus.text = "READY"
//     systemStatus.status = "ok"
//   }
// }

// const printer = reactive({
//   status: 'ok',
//   text: 'READY'
// })

const props = defineProps({
  // title: {
  //   type: String,
  //   default: ''
  // },
  page: {
    type: String,
    default: 'TaskList'
  },
   textTask: {
    type: String,
    default: 'Наименование задачи'
  },
})

// onMounted(async () => {
//   await getSystemStatus()
//   requestTimer = setInterval(getSystemStatus, otkStore.refresh)
// })


// const task = ref('Название задания')

function scanTaskCode () {
  // open scanner
  // when scan successfully finished
  router.push({ name: 'NewTaskDetails' })
}

function goBack() {
  switch (page) {
    case 'TaskDetails':
    case 'NewTaskDetails':
      router.push({name: 'TaskList'})
      break
    case 'LabelingAuto':
    case 'LabelingManual':
      router.push({name: 'TaskDetails', params: {id: route.params.id}})
      break
    case 'LabelScan':
      if (otkStore.mode === 'auto') {
        router.push({name: 'LabelingAuto', params: {id: route.params.id}})
      } else {
        router.push({name: 'LabelingManual', params: {id: route.params.id}})
      }
      break
    case 'CodeScan':
      router.push({name: 'LabelingManual', params: {id: route.params.id}})
      break
  }
}

function logout() {
  // logout
  router.push({name: 'Auth'})
}

function handleHold({evt, ...newInfo}) {
  console.log('work?')
  isLogoutSubmitted.value = newInfo
  finishAnimation(evt)
  logout()
}

function startAnimation(event) {
  event.target.classList.add('in-progress')
}

function finishAnimation(event) {
  event.target.classList.remove('in-progress')
}
</script>

<style lang="scss">
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

    &.mr-30 {
      margin-right: 30px;
    }

    img {
      margin-right: $s-2;
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
