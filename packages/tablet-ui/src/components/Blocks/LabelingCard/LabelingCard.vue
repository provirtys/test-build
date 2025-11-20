<template>
  <div class="marking-card">
    <div class="marking-card__main">
      <div v-if="showProgressBadge" class="marking-card__badge">{{ t('aggregationInProgress') }}</div>
      <div class="marking-card__head flex-space-between">
        <p>{{ t('labeled') }}</p>
        <p>
          {{ codeInfo.labeled }} <span class="marking-card__total-text">/ {{ codeInfo.total }}</span>
        </p>
      </div>

      <div class="marking-card__info">
        <div class="marking-card__code-info">
          <div>
            <p class="marking-card__info-title">{{ t('datetime') }}</p>
            <p class="marking-card__info-date">{{ codeDate }}</p>
            <p class="marking-card__info-value marking-card__info-value--grey">{{ codeTime }}</p>
          </div>
          <div>
            <p class="marking-card__info-title">{{ t('code') }}</p>
            <p class="marking-card__info-value">{{ codeInfo.code }}</p>
          </div>
          <div>
            <p class="marking-card__info-title">{{ t('position') }}</p>
            <p class="marking-card__info-value">{{ codeInfo.position }}</p>
          </div>
        </div>

        <progress-pie
            v-if="showProgressPie"
            size="lg"
            :percentage="Math.round((codeInfo.labeled / codeInfo.total) * 100)"
        ></progress-pie>
      </div>
      <div v-if="showRepeat" class="marking-card__repeat">
        <!--Это не кнопка, просто индикатор, если нужна повторная маркировка-->
        <div class="marking-card__repeat-icon">
          <v-icon name="restart"/>
        </div>
        <p>{{ t('repeatedLabeling') }}</p>
      </div>
    </div>
    <div v-if="$slots.buttons" class="marking-card__buttons">
       <slot name="buttons" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from '@integrity/base-ui';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { ProgressPie } from '@';
import type { LabelingCardProps } from './index';

const { t } = useI18n();

const props = defineProps<LabelingCardProps>();

const codeTime = computed(() => {
  if (props.codeInfo?.time) {
    return new Date(props.codeInfo.time).toLocaleTimeString('RU-ru');
  }
});

const codeDate = computed(() => {
  if (props.codeInfo?.time) {
    return new Date(props.codeInfo.time).toLocaleTimeString('RU-ru');
  }
});
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  font-family: 'Golos';
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

  &__badge {
    background: $warning-40;
    border-radius: $d-1;
    padding: $s-2 $d-1;
    text-align: center;
    line-height: $s-1;
    color: $dark-gray-70;
    font-family: 'Golos';
  }

  &__total-text {
    color: $dark-gray-40;
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
    letter-spacing: -0.24px;

    &-title {
      font-size: $font-size-p4;
      line-height: $line-height-120;
      color: $dark-gray-40;
    }

    &-date {
      font-size: $m-2;
      line-height: $line-height-120;
    }

    &-value {
      font-size: $font-size-h6;
      line-height: $line-height-100;

      &--grey {
        color: $dark-gray-40;
      }
    }
  }

  &__repeat {
    display: flex;
    align-items: center;
    gap: $d-1;

    &-icon {
      width: $m-2;
      height: $m-2;
      background: $primary;
      border: none;
      border-radius: $d-1;
      color: $secondary;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      font-size: $font-size-p1;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    gap: $s-1;
  }
}
</style>
