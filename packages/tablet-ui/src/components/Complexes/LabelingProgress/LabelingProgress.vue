<template>
  <div class="labeling-progress">
    <div class="labeling-progress__legend">
      <div class="labeling-progress__legend-item">
        <div class="labeling-progress__legend-title">
          <p>{{ t('total') }}</p>
          <p>{{ total }}</p>
        </div>
      </div>
      <div class="labeling-progress__legend-item">
        <div class="labeling-progress__legend-color bg-primary"></div>
        <div class="labeling-progress__legend-title">
          <p>{{ t('errors') }}</p>
          <p>{{ mistakes }}</p>
        </div>
      </div>
      <div class="labeling-progress__legend-item">
        <div class="labeling-progress__legend-color bg-gray-2"></div>
        <div class="labeling-progress__legend-title">
          <p>{{ t('withoutErrors') }}</p>
          <p>{{ total - mistakes }}</p>
        </div>
      </div>
    </div>
    <div class="labeling-progress__indicator">
      <q-circular-progress
          :value="percentage"
          reverse
          :angle="90"
          size="320px"
          :thickness="0.4"
          color="primary"
          track-color="gray-2"
          class="q-ma-md"
      />
      <div class="labeling-progress__indicator-titles" :class="{ alignment: percentage === 100 || percentage === 0 }">
        <p :class="{ 'text-primary': percentage < 3 }">{{ percentage }}%</p>
        <p :class="{ 'text-primary': percentage < 97 }">{{ 100 - percentage }}%</p>
      </div>
    </div>
    <v-button
        icon="arrow"
        icon-position="right"
        is-radius
        color="red"
        @action-submitted="finishLabeling"
    >
      {{ t('finishLabeling') }}
    </v-button>
  </div>
</template>

<script setup>
import { VButton } from '@base';
import { setupI18n } from '@integrity/base-ui/src/i18n.js';
import { QCircularProgress } from 'quasar';
import { computed } from 'vue';

const { t } = setupI18n();

const props = defineProps({
  total: { type: Number, default: 1 },
  mistakes: { type: Number, default: 0 },
});

const percentage = computed(() => {
  return Math.round((props.mistakes / props.total) * 100);
});

const emit = defineEmits(['finishLabeling']);

function finishLabeling() {
  emit('finishLabeling');
}
</script>

<style lang="scss" scoped>
.labeling-progress {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 360px;
  background: $secondary;
  border-radius: $s-1;
  padding: $s-3;
  min-height: 570px;

  &__legend-item {
    display: flex;
    align-items: center;
  }

  &__legend-color {
    width: 15px;
    height: 15px;
    border-radius: $d-0;
    margin-right: $s-1;
  }

  &__legend-title {
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

  &__indicator {
    position: relative;
    margin: $xl-1 0;
  }

  &__indicator-titles {
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

    p {
      margin-bottom: 16px;
    }
  }

  :deep(.q-circular-progress) {
    margin: 0 !important;
  }
}
</style>
