<script setup>
import ProgressPie from './ProgressPie.vue'

defineProps({
  isAggregationVisible: { type: Boolean, default: false },
  isProgressPieVisible: { type: Boolean, default: false },
  isRepeatVisible: { type: Boolean, default: false },
  codeInfo: { type: Object, default: () => ({}) }
})

function getCodeTime (value) {
  return new Date(value).toLocaleTimeString('RU-ru')
}

function getCodeDate (value) {
  return new Date(value).toLocaleDateString('RU-ru')
}
</script>

<template>
  <div class="marking-card">
    <div class="marking-card__main">
      <div v-if="isAggregationVisible" class="aggregation">{{ t('aggregationInProgress') }}</div>
      <div class="marking-card__head flex-space-between">
        <p>{{ t('labeled') }}</p>
        <p>{{ codeInfo.labeled }} <span class="grey-text">/ {{ codeInfo.total }}</span></p>
      </div>

      <div class="marking-card__info">
        <div class="marking-card__code-info">

          <div>
            <p class="marking-card__info__title grey-text">{{ t('datetime') }}</p>
            <p class="marking-card__info__date">{{ getCodeDate(codeInfo.ts) }}</p> <!-- <p class="main__info__date">{{ getCodeDate(codeInfo.ts) }}</p>-->
            <p class="marking-card__info__value grey-text">{{ getCodeTime(codeInfo.ts) }}</p>
          </div>
          <div>
            <p class="marking-card__info__title grey-text">{{ t('code') }}</p>
            <p class="marking-card__info__value">{{ codeInfo.code }}</p>
          </div>
          <div>
            <p class="marking-card__info__title grey-text">{{ t('position') }}</p>
            <p class="marking-card__info__value">{{ codeInfo.position }}</p>
          </div>

        </div>

        <ProgressPie v-if="isProgressPieVisible" :size="'large'" :percentage="Math.round((codeInfo.labeled/codeInfo.total)*100)"></ProgressPie>

      </div>
      <div v-if="isRepeatVisible" class="marking-card__repeat">
        <!--Это не кнопка, просто индикатор, если нужна повторная маркировка-->
        <div>
          <img alt="Повторная маркировка" src="../assets/images/repeat-marking.svg">
        </div>
        <p>{{ t('repeatedLabeling') }}</p>
      </div>
    </div>
    <slot>
      <!--Слот для кнопок, которые нужно настраивать-->
    </slot>
  </div>
</template>

<style scoped lang="scss">
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

.marking-card {
  padding: $s-3;
  background: $secondary;
  max-width: 360px;
  max-height: 600px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: $s-2;
  border-radius: $s-1;

  font-size: $font-size-p3;
  color: $dark-gray;

  &__main {
    display: flex;
    flex-direction: column;
    gap: $s-2;
  }

  &__code-info {
    display: flex;
    flex-direction: column;
    gap: $s-2;
  }

  &__info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    text-align: left;
    letter-spacing: -0.23999999463558197px;

    &__title {
      font-size: $font-size-p4;
      line-height: $line-height-120;
    }

    &__date {
      font-size: $m-2;
      line-height: $line-height-120;
    }

    &__value {
      font-size: $font-size-h6;
      line-height: $line-height-100;
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

.aggregation {
  background: $warning-40;
  border-radius: $d-1;
  padding: $s-2 $d-1;
  text-align: center;
  line-height: $s-1;
  color: $dark-gray-70;
  font-family: 'Golos UI-medium';
}

.grey-text {
  color: $dark-gray-40;
}
</style>
