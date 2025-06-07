<script setup>
import { setupI18n } from "../i18n.js";
import MarkingCard from "./MarkingCard.vue";
import TabletButton from "./redesign/TabletButton.vue";

const { t } = setupI18n();

defineProps({
    isAggregationVisible: { type: Boolean, default: true },
    isProgressPieVisible: { type: Boolean, default: true },
    isRepeatVisible: { type: Boolean, default: true },
    codeInfo: { type: Object, default: () => ({}) },
    btn: { type: String, default: "1" },
});
</script>

<template>
  <div class="marking-card-container">
    <MarkingCard
      :codeInfo="codeInfo"
      :is-repeat-visible="isRepeatVisible"
      :is-progress-pie-visible="isProgressPieVisible"
      :is-aggregation-visible="isAggregationVisible"
    >
      <div class="gap-12">
        <TabletButton
          v-if="btn === '1'"
          :text="t('scan')"
          icon="scan"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="red"
        />
        <TabletButton
          v-if="btn === '1'"
          :text="t('startAggregation')"
          is-radius
          text-alignment="left"
        />

        <TabletButton
          v-if="btn === '2'"
          :text="t('repeatLabeling')"
          icon="restart"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="red"
        />
        <TabletButton
          v-if="btn === '2'"
          :text="t('labelingDefect')"
          icon="bad"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="secondary"
        />

        <TabletButton
          v-if="btn === '3'"
          :text="t('scan')"
          icon="scan"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="red"
        />

        <TabletButton
          v-if="btn === '4'"
          :text="t('confirm')"
          icon="done"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="red"
        />

        <TabletButton
          v-if="btn === '5'"
          :text="t('scan')"
          icon="scan"
          location-icon="right"
          is-radius
          text-alignment="left"
          color="red"
        />
        <TabletButton
          v-if="btn === '5'"
          :text="t('finishAggregation')"
          icon="aggregation"
          location-icon="right"
          is-radius
          text-alignment="left"
        />
      </div>
    </MarkingCard>
  </div>
</template>

<style lang="scss">
@import '../css/main.scss';

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
