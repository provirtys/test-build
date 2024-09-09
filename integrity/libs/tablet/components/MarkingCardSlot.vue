<script setup>
import AnimatedTabletButton from './AnimatedTabletButton.vue';
import scanIcon from '../assets/images/scan.svg';
import aggregationIcon from '../assets/images/aggregation.svg';
import TabletButton from './TabletButton.vue';
import restartIcon from '../assets/images/restart.svg';
import badIcon from '../assets/images/bad.svg';
import doneIcon from '../assets/images/done.svg';
import MarkingCard from './MarkingCard.vue';
import { setupI18n } from '../i18n.js';

const { t } = setupI18n();

defineProps({
  isAggregationVisible: { type: Boolean, default: true },
  isProgressPieVisible: { type: Boolean, default: true },
  isRepeatVisible: { type: Boolean, default: true },
  codeInfo: { type: Object, default: () => ({}) },
  btn: { type: String, default: '1' },
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
        <AnimatedTabletButton
          v-if="btn === '1'"
          :icon="scanIcon"
          :text="t('scan')"
        />
        <AnimatedTabletButton
          v-if="btn === '1'"
          :color="'dark'"
          :text="t('startAggregation')"
          class="text-left"
        />

        <TabletButton
          v-if="btn === '2'"
          :text="t('repeatLabeling')"
          :icon="restartIcon"
        />
        <TabletButton
          v-if="btn === '2'"
          :text="t('labelingDefect')"
          :color="'light-gray'"
          :icon="badIcon"
        />

        <AnimatedTabletButton
          v-if="btn === '3'"
          :icon="scanIcon"
          :text="t('scan')"
        />

        <AnimatedTabletButton
          v-if="btn === '4'"
          :icon="doneIcon"
          :text="t('confirm')"
        />

        <AnimatedTabletButton
          v-if="btn === '5'"
          :icon="scanIcon"
          :text="t('scan')"
        />
        <AnimatedTabletButton
          v-if="btn === '5'"
          :icon="aggregationIcon"
          :color="'dark'"
          :text="t('finishAggregation')"
        />
      </div>
    </MarkingCard>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/css/main.scss';

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
