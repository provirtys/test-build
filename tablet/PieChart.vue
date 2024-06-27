<template>
  <div class="labeling__pie">
    <div class="legend">
      <div class="legend__item">
        <div class="legend__title">
          <p>{{ $t('total') }}</p>
          <p>{{ total }}</p>
        </div>
      </div>
      <div class="legend__item">
        <div class="legend__color bg-primary"></div>
        <div class="legend__title">
          <p>{{ $t('errors') }}</p>
          <p>{{ mistakes }}</p>
        </div>
      </div>
      <div class="legend__item">
        <div class="legend__color  bg-gray2"></div>
        <div class="legend__title">
          <p>{{ $t('withoutErrors') }}</p>
          <p>{{ total - mistakes }}</p>
        </div>
      </div>
    </div>
    <div class="circle">
      <q-circular-progress
          :value="percentage"
          reverse
          :angle="90"
          size="320px"
          :thickness="0.4"
          color="primary"
          track-color="gray2"
          class="q-ma-md"
      />
      <div class="titles" :class="{'alignment': percentage === 100 || percentage === 0}">
        <p :class="{'text-primary': percentage < 3}">{{ percentage }}%</p>
        <p :class="{'text-primary': percentage < 97}">{{ 100 - percentage }}%</p>
      </div>
    </div>
    <AnimatedTabletButton :text="$t('finishLabeling')" :icon="logoutIcon" @action-submitted="finishLabeling" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    total: { type: Number, default: 1 },
    mistakes: { type: Number, default: 0 }
})
const percentage = computed(() => {
  return Math.round(props.mistakes / props.total * 100)
})
</script>

<style lang="scss">
.circle {
    position: relative;
    margin: $xl-1 0;

    .titles {
        position: absolute;
        right: -10px;
        top: 52%;
        transform: translate(-50%, -50%);
        font-size: $font-size-p1;
        color: $secondary;
        text-align: center;

        &.alignment {
            right: -16px;
        }
    }
}

.legend {
    &__item {
        display: flex;
        align-items: center;
    }

    &__color {
        width: 15px;
        height: 15px;
        border-radius: $d-0;
        margin-right: $s-1;
    }

    &__title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            margin: 0;
            font-size: $font-size-p1;
            color: $dark-gray;
        }
    }
}

.q-circular-progress {
    margin: 0 !important;
}

.labeling__pie {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 360px;
    background: $secondary;
    border-radius: $s-1;
    padding: $s-3;
    min-height: 570px;
}
</style>
