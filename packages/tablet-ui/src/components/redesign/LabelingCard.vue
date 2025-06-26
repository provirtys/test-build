<template>
  <div class="labeling-cart">
    <div class="labeling-main">
      <div v-if="isAggregationVisible" class="aggregation">
        <v-icon name="aggregation" size="28" />
        {{ t('aggregationInProgress') }}
      </div>
      <div class="labeling-main__head flex-space-between">
        <p>{{ t('labeled') }}</p>
        <p class="dark-gray">{{ codeInfo.labeled }} / {{ codeInfo.total }}</p>
      </div>
      <div class="labeling-main__info">
        <div class="code-info" v-if="isScan">
          <div>
            <p class="labeling-main__info__title">{{ t('printed') }}</p>
            <p class="labeling-main__info__date">{{ codeInfo.total }}</p>
            <p class="labeling-main__info__value time">{{ codeInfo.ts }}</p>
          </div>
          <div>
            <p class="labeling-main__info__title">{{ t('recognized') }}</p>
            <p class="labeling-main__info__value">{{ codeInfo.labeled }}</p>
          </div>
        </div>
        <div class="code-info" v-else>
          <div>
            <p class="labeling-main__info__title">{{ t('datetime') }}</p>
            <p class="labeling-main__info__date">14.03.2024</p>
            <p class="labeling-main__info__value time">{{ codeInfo.ts }}</p>
          </div>
          <div v-if="!isAuto">
            <p class="labeling-main__info__title">{{ t('position') }}</p>
            <p class="labeling-main__info__value">{{ codeInfo.position }}</p>
          </div>
          <div>
            <p class="labeling-main__info__title">{{ t('code') }}</p>
            <p class="labeling-main__info__value">{{ codeInfo.code }}</p>
            <div v-if="isCodes" class="labeling-main__info__status-code">
              <status-code
                :status="status1"
                :codeType="codeType1"
                :color="color1"
                :is-animate="status1 === 'synced'"
              ></status-code>
              <status-code
                v-if="secondCode"
                :status="status2"
                :codeType="codeType2"
                :color="color2"
                :is-animate="status2 === 'synced'"
              ></status-code>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot>
      <!--Слот для кнопок, которые нужно настраивать-->
    </slot>
  </div>
</template>

<script setup>
import { VIcon } from "@base";
import { setupI18n } from "@base/i18n.js";
import StatusCode from "./StatusCode.vue";

const { t } = setupI18n();

defineProps({
    isAggregationVisible: { type: Boolean, default: false },
    isAuto: { type: Boolean, default: false },
    isCodes: { type: Boolean, default: true },
    isScan: { type: Boolean, default: false },
    codeInfo: { type: Object, default: () => ({}) },
    /** Статус индикатора  */
    status1: { type: String, default: "" },
    /** Тип кода  */
    codeType1: { type: String, default: "" },
    /** Цвет индикатора  */
    color1: { type: String, default: "info" },

    secondCode: { type: Boolean, default: true },
    status2: { type: String, default: "" },
    codeType2: { type: String, default: "" },
    color2: { type: String, default: "info" },
});
</script>

<style lang="scss">
.code-info {
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    gap: 12px;
    flex-direction: column;
  }
}

p {
  margin: 0;
  font-family: 'Golos UI-medium';
}

.mb-6 {
  margin-bottom: 6px;
}

.flex-space-between {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.labeling-cart {
  padding: $s-3;
  background: none;
  max-width: 380px;
  max-height: 778px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: $s-2;

  font-size: $font-size-p3;
  color: $dark-gray-70;
}

.aggregation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $d-1;

  background: $info-10;
  border-radius: $d-0;
  padding: $d-1;
  text-align: center;
  line-height: $s-1;
  color: $info;
  font-family: 'Golos UI-medium';
  font-size: $font-size-p1;
}

.labeling-main {
  display: flex;
  flex-direction: column;
  gap: $s-3;

  &__info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    text-align: left;
    letter-spacing: -0.23999999463558197px;

    &__title {
      font-size: $font-size-p4;
      line-height: $line-height-120;
      color: $dark-gray-70;
    }

    &__date {
      font-size: $font-size-h5;
      line-height: $line-height-120;
      color: $dark-gray;
    }

    &__value {
      font-size: $font-size-h5;
      line-height: $line-height-100;
      color: $dark-gray;
    }

    &__status-code {
      flex-direction: row !important;
    }
  }

  &__repeat {
    display: flex;
    align-items: center;
    gap: $d-1;

    div {
      width: $m-2;
      height: $m-2;
      background: $primary;
      border: none;
      border-radius: $d-1;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      font-size: $font-size-p1;
    }
  }
}

.dark-gray {
  color: $dark-gray;
}

.time {
  color: #9c9c9c;
  font-size: $font-size-p1;
}
</style>
