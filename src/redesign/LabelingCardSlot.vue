<template>
<div class="labeling-card-container">
<LabelingCard :codeInfo="codeInfo" :is-aggregation-visible="isAggregationVisible" :is-auto="isAutoLabeling">
  <div class="gap-10">
    <ActionTabletUIButton v-if="btn === '1'" :text="'Начать агрегацию'" :icon="'startAggregationIcon'" :location-icon="'right'" :color="'outline'" ></ActionTabletUIButton>
    <ActionTabletUIButton v-if="btn === '1'" :text="'Начать маркировку'" :icon="'openTaskIcon'" :location-icon="'right'"></ActionTabletUIButton>

    <ActionTabletUIButton v-if="btn === '2'" :text="'Новое задание'" :icon="'newTaskIcon'" :location-icon="'right'" :color="'outline'"></ActionTabletUIButton>
    <ActionTabletUIButton v-if="btn === '2'" :text="'Продолжить маркировку'" :icon="'openTaskIcon'" :location-icon="'right'"></ActionTabletUIButton>

    <ActionTabletUIButton v-if="btn === '3'" :text="'Закончить агрегацию'" :icon="'finishAggregationIcon'" :location-icon="'right'" :color="'outline'" ></ActionTabletUIButton>

    <ActionTabletUIButton v-if="btn === '4'" :text="'Печать этикетки'" :icon="'labelPrintingIcon'" :location-icon="'right'" :color="'outline'" ></ActionTabletUIButton>
    <ActionTabletUIButton v-if="btn === '4'" :is-disabled="true" :text="'Начать маркировку'" :icon="'openTaskIcon'" :location-icon="'right'"></ActionTabletUIButton>

    <ActionTabletUIButton v-if="btn === '5'" :is-disabled="true" :text="'Брак маркировки'" :icon="'restartIcon'" :location-icon="'right'" :color="'outline'" ></ActionTabletUIButton>
    <ActionTabletUIButton v-if="btn === '5'" :is-disabled="true" :text="'Подтвердить'" :icon="'verifyIcon'" :location-icon="'right'"></ActionTabletUIButton>
  </div>
</LabelingCard>
</div>
</template>

<script setup>
import LabelingCard from "./LabelingCard.vue";
import ActionTabletUIButton from "./ActionTabletUIButton.vue";

defineProps({
  isAggregationVisible: {type: Boolean, default: true},
  isAutoLabeling:{type: Boolean, default: true},
  codeInfo: {type: Object, default: () => ({})},
  btn: {type: String, default: '1'},
})
</script>

<style scoped lang="scss">
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
