<template>
  <div class="status-line">
    <TabletButton
      height="small"
      fit-width
      :text="btnText"
      color="secondary"
      :icon="btnIcon"
      location-icon="left"
    />
    <p class="status-line__task">{{ title }}</p>
    <div class="row">
      <SystemStatus
        :color="systemStatus.status"
        :statusType="systemStatus.text"
        :isSync="systemStatus.sync"
        :is-active="systemStatus.active"
      ></SystemStatus>
      <div
        class="status-line__button status-line__settings"
        :class="[{ disabled: props.isDisabled }]"
      >
        <CommonIcon name="settings" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import CommonIcon from "../CommonIcon.vue";
import SystemStatus from "./InteractiveSystemStatus.vue";
import TabletButton from "./TabletButton.vue";

const route = useRoute();
const router = useRouter();

const isLogoutSubmitted = ref(false);

const props = defineProps({
    systemStatus: {
        type: Object,
        default: () => ({
            status: "error",
            text: "NOT_READY",
            sync: true,
            active: false,
        }),
    },
    title: {
        type: String,
        default: "Список заданий",
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
    btnText: {
        type: String,
        default: "Назад",
    },
    btnIcon: {
        type: String,
        default: "arrowBackRedesign",
    },
});

const emit = defineEmits(["logout"]);

function handleHoldGoBack({ evt, ...newInfo }) {
    isLogoutSubmitted.value = newInfo;
    finishAnimation(evt);
    goBack();
}

function goBack() {
    switch (route.name) {
        case "TaskDetails":
        case "NewTaskDetails":
            router.push({ name: "TaskList" });
            break;
        case "LabelingAuto":
        case "LabelingManual":
            router.push({ name: "TaskDetails", params: { id: route.params.id } });
            break;
        case "LabelScan":
            if (otkStore.mode === "auto") {
                router.push({ name: "LabelingAuto", params: { id: route.params.id } });
            } else {
                router.push({ name: "LabelingManual", params: { id: route.params.id } });
            }
            break;
        case "CodeScan":
            router.push({ name: "LabelingManual", params: { id: route.params.id } });
            break;
    }
}

function handleHold({ evt, ...newInfo }) {
    isLogoutSubmitted.value = newInfo;
    finishAnimation(evt);
    emit("logout");
}

function startAnimation(event) {
    event.target.classList.add("in-progress");
}

function finishAnimation(event) {
    event.target.classList.remove("in-progress");
}
</script>

<style lang="scss">
@import '../../css/main.scss';

.status-line {
  width: 100%;
  height: $l-4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  z-index: 10001;
  position: relative;
  visibility: visible;
  border-bottom: 1px solid $light-gray;
  letter-spacing: -0.02em;
  font-size: $font-size-p2;
  font-weight: 500;
  line-height: 21.6px;

  text-align: left;

  &__button {
    background: $primary-text-20;
    color: $primary-text;
    font-family: Golos UI-medium;
    font-size: $font-size-p1;
    height: 100%;
    padding: 14px $s-3;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    position: relative;
    gap: 16px;

    &.in-progress {
      &::before {
        content: '';
        position: absolute;
        background: rgba($primary-text, 0.25);
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        animation: filling 1s linear 0s 1 normal backwards;
      }
    }
  }

  &__task {
    color: $dark-gray-70;
    font-size: $font-size-p2;
    margin: 0 $s-3;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: Golos UI-medium;
  }

  &__settings {
    background: $primary-text-20;

    &.disabled {
      opacity: 0.1 !important;
    }
  }

  .row {
    display: flex;
    align-items: center;
  }
}

.pointer-icon {
  pointer-events: none;
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
