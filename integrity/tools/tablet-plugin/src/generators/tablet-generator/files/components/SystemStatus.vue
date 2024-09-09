<template>
  <div class="system-status">
    <div class="system-status__indicator" :class="props.color"></div>
    <div class="system-status__text">{{ t('system-status.' + statusType) }}</div>
  </div>
</template>

<script setup>
import { setupI18n } from '../i18n.js'

const { t } = setupI18n()
const props = defineProps({
  /** Цвет индикатора статуса принтера */
  color: {
    type: String,
    default: ''
  },
  /** Текст статуса принтера */
  statusType: { type: String, default: '' }
})
</script>

<style scoped lang="scss">
@import '../assets/css/main.scss';

.system-status {
  display: flex;
  gap: 13px;
  align-items: center;
  max-width: 100%; //113px в макете
  height: 48px;

  &__indicator {
    width: 10px;
    height: 10px;
    background: $success;
    border-radius: 50%;

    &.warning {
      background: $warning;
    }

    &.error {
      background: $error;
    }
  }

  &__text {
    font-family: Golos UI-medium;
    color: #242a2b;
    font-size: 14px;
    letter-spacing: -0.02em;
  }
}
</style>
