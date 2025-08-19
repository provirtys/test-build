<template>
  <div class="numeric-ratio q-pa-sm" :class="classes">
    <div class="numeric-ratio__top">
      <span class="numeric-ratio__value">{{ value }}</span>
      <template v-if="secondaryValue !== null">
        <span class="numeric-ratio__separator">/</span>
        <span class="numeric-ratio__secondary">{{ secondaryValue }}</span>
      </template>
    </div>
    <hr v-if="total !== undefined" class="numeric-ratio__vertical-separator" />
    <div v-if="total !== undefined" class="numeric-ratio__bottom">
      <span class="numeric-ratio__total">{{ total }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { NumericRatioProps } from '@/components/Elements/NumericRatio/NumericRatio.types';

const props = withDefaults(defineProps<NumericRatioProps>(), {
  value: 0,
  total: 0,
  isLight: false,
});

const classes = computed(() => ({
  'numeric-ratio--light': props.isLight,
}));
</script>

<style lang="scss" scoped>
.numeric-ratio {
  --divider-color: #d9d9d9;
  --text-opacity: 0.7;

  display: inline-flex !important;
  flex-direction: column;
  align-items: center;
  font-family: system-ui, -apple-system, sans-serif;
  width: 100%;

  &--light {
    .numeric-ratio__value,
    .numeric-ratio__total,
    .numeric-ratio__separator {
      color: $light-gray-40;
    }

    .numeric-ratio__secondary {
      color: $light-gray-70;
    }
  }

  &__top {
    display: flex;
    flex-direction: row !important;
    flex: 0;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    padding-bottom: 1px;
  }

  &__value {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 100%;
    text-align: center;
    letter-spacing: -0.02em;
    padding-top: 5px;
    color: $dark-gray;
    flex: none;
    order: 0;
    flex-grow: 0;
  }

  &__separator {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
    color: rgba(34, 41, 42, var(--text-opacity));
    margin: 0 2px;
  }

  &__vertical-separator {
    height: 1px;
    width: 100%;
    background-color: var(--divider-color);
    border: none;
  }

  &__secondary {
    margin-top: 5px;
    font-family: 'Golos';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;

    color: $primary-70;
    flex: none;
    order: 2;
    flex-grow: 0;
  }

  &__bottom {
    margin-top: 8px;
  }

  &__total {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.02em;
    color: rgba(34, 41, 42, 0.7);
    flex: none;
    order: 0;
    flex-grow: 0;
  }
}
</style>
