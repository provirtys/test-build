<template>
  <div class="labeling-code-card" :class="{'aggregation': isAggregation}">

    <div class="labeling-code-card__position" :class="{'error': isErrorLabeling}">
      <CommonIcon v-if="isAggregation" name="aggregation" size="35"/>
      <p v-else>{{ position }}</p>
    </div>

    <div class="labeling-code-card__info">
      <p class="labeling-code-card__title">{{ template }} <span class="code-name">{{ codeText }}</span></p>
      <p class="labeling-code-card__time"><span v-if="isAggregation" :class="{'error': isErrorLabeling}" class="number" >{{codesGroup}}</span>{{ time }}</p>
    </div>

    <div v-if="!noCodes" class="labeling-code-card__codes">
      <StatusCode :status="status1" :codeType="codeType1" :color="color1" :is-animate="status1 === 'synced'"></StatusCode>
      <StatusCode v-if="secondCode" :status="status2" :codeType="codeType2" :color="color2"
                  :is-animate="status2 === 'synced'"></StatusCode>
    </div>

  </div>
</template>

<script setup>
import StatusCode from "./StatusCode.vue";
import CommonIcon from '../CommonIcon.vue';

defineProps({
  codeText: {type: String, default: 'Code name'},
  time: {type: String, default: ''},
  template: {type: String, default: 'Code'},
  position: {type: Number, default: 0},
  isErrorLabeling: {type: Boolean, default: false},
  isAggregation: {type: Boolean, default: false},
  noCodes: {type: Boolean, default: false},
  codesGroup:{type: String, default: '#'},
  /** Статус индикатора  */
  status1: {type: String, default: ''},
  /** Тип кода  */
  codeType1: {type: String, default: ''},
  /** Цвет индикатора  */
  color1: {type: String, default: 'info'},

  secondCode: {type: Boolean, default: true},
  status2: {type: String, default: ''},
  codeType2: {type: String, default: ''},
  color2: {type: String, default: 'info'},
})
</script>

<style lang="scss">
@import '../../css/main.scss';

.code-name {
  color: $dark-gray-70;
  font-family: Golos UI-medium;
  font-size: $font-size-p2;
  line-height: 18px;
  letter-spacing: -0.24px;
  margin: 0;
}

.labeling-code-card {
  width: 100%;
  border-radius: $d-1;
  padding: $s-3;
  display: flex;
  height: 90px;
  justify-content: flex-start;
  align-items: center;
  background: $light-gray-40;
  gap: $d-1;

  &.aggregation {
    background: $light-gray-55;
  }

  &__position {
    width: $l-2;
    height: $l-2;
    background: $light-gray-55;
    border-radius: $d-0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $dark-gray;
    font-family: Golos UI-medium;
    font-size: $font-size-p1;
    line-height: 20px;
    letter-spacing: -0.24px;
    margin-right: $s-1;

    p {
      margin-bottom: 0;
      font-family: Golos UI-medium;
    }
  }

  &__info {
    flex: 1;
  }

  &__title {
    font-family: Golos UI-medium;
    font-size: $font-size-p1;
    line-height: 20px;
    letter-spacing: -0.24px;
    color: $dark-gray;
    margin: 0 0 $s-1 0;

    display: flex;
    gap: $s-1;
    align-items: baseline;
  }

  &__time {
    font-family: Golos UI-medium;
    font-size: $font-size-p2;
    line-height: 18px;
    letter-spacing: -0.24px;
    color: $dark-gray-40;
    margin: 0;

    display: flex;
    gap: 12px;
  }

  .number {
    font-family: Golos UI-medium;
    color: $dark-gray;

    &.error {
      color: $error;
    }
  }

  &__codes {
    display: flex;
    gap: $d-1;
  }
}

.error {
  color: $error;
}
</style>
