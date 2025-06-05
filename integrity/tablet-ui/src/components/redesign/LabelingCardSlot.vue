<template>
  <div class="labeling-card-container">
    <LabelingCard
      :codeInfo="codeInfo"
      :is-aggregation-visible="isAggregationVisible"
      :is-auto="isAutoLabeling"
    >
      <div class="gap-10">
        <TabletButton
          v-if="btn === '1'"
          :text="t('startAggregation')"
          icon="startAggregation"
          location-icon="right"
          color="outline"
          is-radius
          text-alignment="left"
        />
        <TabletButton
          v-if="btn === '1'"
          :text="t('startLabeling')"
          icon="openTask"
          location-icon="right"
          is-radius
          text-alignment="left"
        />

        <TabletButton
          v-if="btn === '2'"
          :text="t('newJob')"
          icon="newTask"
          location-icon="right"
          color="outline"
          is-radius
          text-alignment="left"
        />
        <TabletButton
          v-if="btn === '2'"
          :text="t('continueLabeling')"
          icon="openTask"
          location-icon="right"
          is-radius
          text-alignment="left"
        />

        <TabletButton
          v-if="btn === '3'"
          :text="t('finishAggregation')"
          icon="finishAggregation"
          location-icon="right"
          color="outline"
          is-radius
          text-alignment="left"
        />

        <TabletButton
          v-if="btn === '4'"
          :text="t('labelPrint')"
          icon="labelPrinting"
          location-icon="right"
          color="outline"
          is-radius
          text-alignment="left"
        />
        <TabletButton
          v-if="btn === '4'"
          :text="t('startLabeling')"
          is-disabled
          icon="openTask"
          location-icon="right"
          is-radius
          text-alignment="left"
        />

        <TabletButton
          v-if="btn === '5'"
          is-disabled
          :text="t('labelingDefect')"
          icon="restart"
          location-icon="right"
          color="outline"
          is-radius
          text-alignment="left"
        />
        <TabletButton
          v-if="btn === '5'"
          is-disabled
          :text="t('confirm')"
          icon="verify"
          location-icon="right"
          is-radius
          text-alignment="left"
        />
      </div>
    </LabelingCard>
  </div>
</template>

<script setup>
import LabelingCard from './LabelingCard.vue'
import { setupI18n } from '../../i18n.js'
import TabletButton from './TabletButton.vue'

const { t } = setupI18n()

defineProps({
  isAggregationVisible: { type: Boolean, default: true },
  isAutoLabeling: { type: Boolean, default: true },
  codeInfo: { type: Object, default: () => ({}) },
  btn: { type: String, default: '1' },
})
</script>

<style lang="scss">
@import '../../css/main.scss';

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
