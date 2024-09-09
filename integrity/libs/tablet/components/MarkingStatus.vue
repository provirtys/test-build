<template>
  <div class="marking-status" :class="color">
    <p class="marking-status__text">{{ text }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { setupI18n } from '../i18n.js';

const { t } = setupI18n();

const props = defineProps({
  status: {
    type: String,
    default: '',
  },
});

const text = computed(() => {
  switch (props.status) {
    case 'new':
    case 'labeling':
    case 'ready':
      return t(props.status);
    default:
      return t('cancelled');
  }
});

const color = computed(() => {
  switch (props.status) {
    case 'new':
      return 'white';
    case 'labeling':
      return 'orange';
    case 'ready':
      return 'green';
    default:
      return '';
  }
});
</script>

<style scoped lang="scss">
@import '../assets/css/main.scss';

.marking-status {
  width: fit-content;
  background: $primary;
  border-radius: 6px;
  padding: 6px $d-1;
  border: none;

  //Стили текста
  color: $secondary;
  letter-spacing: -0.02em; //свойство не срабатывает в % (-2%), в px работает, перевели в em
  text-transform: uppercase;
  font-size: $font-size-p3;
  text-align: center;
  line-height: normal;

  &__text {
    margin: 0;
    font-family: 'Golos UI-bold';
  }

  &.green {
    background: $success;
  }

  &.orange {
    background: $warning;
  }

  &.white {
    background: $secondary;
    color: $dark-gray;
    border: 1px solid $dark-gray;
  }
}
</style>
