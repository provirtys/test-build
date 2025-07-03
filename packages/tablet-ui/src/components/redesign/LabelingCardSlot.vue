<template>
  <div class="labeling-card-container">
    <labeling-card
      :codeInfo="codeInfo"
      :is-aggregation-visible="isAggregationVisible"
      :is-auto="isAutoLabeling"
    >
      <div class="gap-10">
        <v-button
          v-if="btn === '1'"
          icon="startAggregation"
          location-icon="right"
          color="outline"
          is-radius
          text-alignment="left"
        >
          {{ t('startAggregation') }}
        </v-button>
        <v-button
          v-if="btn === '1'"
          icon="openTask"
          location-icon="right"
          is-radius
          text-alignment="left"
        >
          {{ t('startLabeling') }}
        </v-button>

        <v-button
          v-if="btn === '2'"
          icon="newTask"
          location-icon="right"
          color="outline"
          is-radius
          text-alignment="left"
        >
          {{ t('newJob') }}
        </v-button>
        <v-button
          v-if="btn === '2'"
          icon="openTask"
          location-icon="right"
          is-radius
          text-alignment="left"
        >
          {{ t('continueLabeling') }}
        </v-button>

        <v-button
          v-if="btn === '3'"
          icon="finishAggregation"
          location-icon="right"
          color="outline"
          is-radius
          text-alignment="left"
        >
          {{ t('finishAggregation') }}
        </v-button>

        <v-button
          v-if="btn === '4'"
          icon="labelPrinting"
          location-icon="right"
          color="outline"
          is-radius
          text-alignment="left"
        >
          {{ t('labelPrint') }}
        </v-button>
        <v-button
          v-if="btn === '4'"
          is-disabled
          icon="openTask"
          location-icon="right"
          is-radius
          text-alignment="left"
        >
          {{ t('startLabeling') }}
        </v-button>

        <v-button
          v-if="btn === '5'"
          is-disabled
          icon="restart"
          location-icon="right"
          color="outline"
          is-radius
          text-alignment="left"
        >
          {{ t('labelingDefect') }}
        </v-button>
        <v-button
          v-if="btn === '5'"
          is-disabled
          icon="verify"
          location-icon="right"
          is-radius
          text-alignment="left"
        >
          {{ t('confirm') }}
        </v-button>
      </div>
    </labeling-card>
  </div>
</template>

<script setup>
import { VButton } from "@base";
import { setupI18n } from "@base/i18n.js";
import LabelingCard from "./LabelingCard.vue";

const { t } = setupI18n();

defineProps({
    isAggregationVisible: { type: Boolean, default: true },
    isAutoLabeling: { type: Boolean, default: true },
    codeInfo: { type: Object, default: () => ({}) },
    btn: { type: String, default: "1" },
});
</script>

<style lang="scss">
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
