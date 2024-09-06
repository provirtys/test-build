<template>
  <div class="labeling-card-container">
    <LabelingCard
      :codeInfo="codeInfo"
      :is-aggregation-visible="isAggregationVisible"
      :is-auto="isAutoLabeling"
    >
      <div class="gap-10">
        <ActionTabletUIButton
          v-if="btn === '1'"
          :text="t('startAggregation')"
          :icon="'startAggregationIcon'"
          :location-icon="'right'"
          :color="'outline'"
        ></ActionTabletUIButton>
        <ActionTabletUIButton
          v-if="btn === '1'"
          :text="t('startLabeling')"
          :icon="'openTaskIcon'"
          :location-icon="'right'"
        ></ActionTabletUIButton>

        <ActionTabletUIButton
          v-if="btn === '2'"
          :text="t('newJob')"
          :icon="'newTaskIcon'"
          :location-icon="'right'"
          :color="'outline'"
        ></ActionTabletUIButton>
        <ActionTabletUIButton
          v-if="btn === '2'"
          :text="t('continueLabeling')"
          :icon="'openTaskIcon'"
          :location-icon="'right'"
        ></ActionTabletUIButton>

        <ActionTabletUIButton
          v-if="btn === '3'"
          :text="t('finishAggregation')"
          :icon="'finishAggregationIcon'"
          :location-icon="'right'"
          :color="'outline'"
        ></ActionTabletUIButton>

        <ActionTabletUIButton
          v-if="btn === '4'"
          :text="t('labelPrint')"
          :icon="'labelPrintingIcon'"
          :location-icon="'right'"
          :color="'outline'"
        ></ActionTabletUIButton>
        <ActionTabletUIButton
          v-if="btn === '4'"
          :is-disabled="true"
          :text="t('startLabeling')"
          :icon="'openTaskIcon'"
          :location-icon="'right'"
        ></ActionTabletUIButton>

        <ActionTabletUIButton
          v-if="btn === '5'"
          :is-disabled="true"
          :text="t('labelingDefect')"
          :icon="'restartIcon'"
          :location-icon="'right'"
          :color="'outline'"
        ></ActionTabletUIButton>
        <ActionTabletUIButton
          v-if="btn === '5'"
          :is-disabled="true"
          :text="t('confirm')"
          :icon="'verifyIcon'"
          :location-icon="'right'"
        ></ActionTabletUIButton>
      </div>
    </LabelingCard>
  </div>
</template>

<script setup>
import LabelingCard from './LabelingCard.vue';
import ActionTabletUIButton from './ActionTabletUIButton.vue';
import { setupI18n } from '../../i18n.js';

const { t } = setupI18n();

defineProps({
  isAggregationVisible: { type: Boolean, default: true },
  isAutoLabeling: { type: Boolean, default: true },
  codeInfo: { type: Object, default: () => ({}) },
  btn: { type: String, default: '1' },
});
</script>

<style scoped lang="scss">
@import 'assets/css/main.scss';

.gap-10 {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.labeling-card-container {
  background: $light-gray-55;
  max-width: 380px;
  height: 778px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: $s-3;
  border-radius: 0 0 $s-1;
  border-left: 1px solid $light-gray;
}
</style>
