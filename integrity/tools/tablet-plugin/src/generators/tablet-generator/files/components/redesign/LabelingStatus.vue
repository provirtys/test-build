<template>
  <div class="labeling-status-main">
    <div class="labeling-status" :class="color">
    <p class="labeling-status__text">{{ text }}</p>
  </div>
    <div v-if="isSecondary" class="labeling-status" :class="colorSecondary">
      <p class="labeling-status__text">{{ textSecondary }}</p>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue'
/** Статус маркировки */
const props = defineProps({
  status: {
    type: String,
    default: ''
  },
  /** Приоритет маркировки */
  isSecondary: {
    Boolean,
    default: false
  },
  /** Текст приоритета маркировки */
  textSecondary: {
    type: String,
    default: 'P1'
  },
})

const text = computed(() => {
  switch (props.status) {
    case 'new':
      return 'НОВОЕ'
    case 'labeling':
      return 'МАРКИРОВКА'
    case 'ready':
      return 'ЗАВЕРШЕНО'
    default:
      return 'ОТМЕНЕНО'
  }
})

const color = computed(() => {
    switch (props.status) {
      case 'new':
        return 'blue'
      case 'labeling':
        return 'orange'
      case 'ready':
        return 'green'
      default:
        return ''
    }
})
const colorSecondary = computed(() => {
    switch (props.status) {
      case 'new':
        return 'blue-secondary'
      case 'labeling':
        return 'orange-secondary'
      case 'ready':
        return 'green-secondary'
      default:
        return 'red-secondary'
    }
})
</script>

<style scoped lang="scss">
.labeling-status-main {
  display: flex;
  gap: $d-0;
}
.labeling-status {
  width: fit-content;
  background: $error;
  border-radius: $d-0;
  padding: $d-1;
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
    font-family: "Golos UI-bold";
  }

  //Primary
  &.green {
    background: $success;
  }

  &.orange {
    background: $warning;
  }

  &.blue {
    background: $info;
    color: $secondary;
  }

  //Secondary
  &.green-secondary {
    background: $success-10;
    color: $success;
  }

  &.orange-secondary {
    background: $warning-10;
    color: $warning;
  }

  &.blue-secondary {
    background: $info-10;
    color: $info;
  }

  &.red-secondary {
    background: $primary-10;
    color: $error;
  }
}
</style>
