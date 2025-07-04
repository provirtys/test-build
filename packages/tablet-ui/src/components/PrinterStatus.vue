<template>
  <div class="printer-status">
    <div class="printer-status__indicator" :class="props.color"></div>
    <div class="printer-status__text">{{ t('printerStatus.' + statusType) }}</div>
  </div>
</template>

<script setup>
import { setupI18n } from '@base/i18n.js';

const { t } = setupI18n();
const props = defineProps({
    /** Цвет индикатора статуса принтера*/
    color: {
        type: String,
        default: '',
    },
    /** Текст статуса принтера*/
    statusType: { type: String, default: '' },
});
</script>

<style lang="scss">
.printer-status {
  display: flex;
  gap: 13px;
  align-items: center;
  max-width: 100%; //113px в макете
  height: $l-2;

  &__indicator {
    width: 10px;
    height: 10px;
    background: $success;
    border-radius: 50%;

    &.warning {
      background: $warning;
    }

    &.error {
      background: $primary-70;
    }
  }

  &__text {
    font-family: 'Golos';
    color: $dark-gray;
    font-size: $font-size-p4;
    letter-spacing: -0.02em;
  }
}
</style>
