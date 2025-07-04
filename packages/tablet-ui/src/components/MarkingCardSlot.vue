<template>
  <div class="marking-card-container">
    <marking-card
      :codeInfo="codeInfo"
      :is-repeat-visible="isRepeatVisible"
      :is-progress-pie-visible="isProgressPieVisible"
      :is-aggregation-visible="isAggregationVisible"
    >
      <div class="gap-12">
        <v-button
          v-if="btn === '1'"
          icon="scan"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="red"
        >
          {{ t('scan') }}
        </v-button>
        <v-button
          v-if="btn === '1'"
          is-radius
          text-alignment="left"
        >
          {{t('startAggregation')}}
        </v-button>
        <v-button
          v-if="btn === '2'"
          icon="restart"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="red"
        >
          {{ t('repeatLabeling')}}
        </v-button>
        <v-button
          v-if="btn === '2'"
          icon="bad"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="secondary"
        >
          {{ t('labelingDefect') }}
        </v-button>
        <v-button
          v-if="btn === '3'"
          icon="scan"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="red"
        >
          {{ t('scan') }}
        </v-button>
        <v-button
          v-if="btn === '4'"
          icon="done"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="red"
        >
          {{ t('confirm') }}
        </v-button>
        <v-button
          v-if="btn === '5'"
          icon="scan"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="red"
        >
          {{ t('scan') }}
        </v-button>
        <v-button
          v-if="btn === '5'"
          icon="aggregation"
          location-icon="right"
          is-radius
          text-alignment="left"
        >
          {{ t('finishAggregation') }}
        </v-button>
      </div>
    </marking-card>
  </div>
</template>

<script setup>
import { VButton } from '@base';
import { setupI18n } from '@base/i18n.js';
import MarkingCard from './MarkingCard.vue';

const { t } = setupI18n();

defineProps({
    isAggregationVisible: { type: Boolean, default: true },
    isProgressPieVisible: { type: Boolean, default: true },
    isRepeatVisible: { type: Boolean, default: true },
    codeInfo: { type: Object, default: () => ({}) },
    btn: { type: String, default: '1' },
});
</script>

<style lang="scss">
.gap-12 {
  display: flex;
  flex-direction: column;
  gap: $s-1;
}

.marking-card-container {
  background: $secondary;
  max-width: 360px;
  height: 600px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: $s-3;
  border-radius: $s-1;
  color: $dark-gray;
}
</style>
