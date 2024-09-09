<template>
  <div
    class="card-job"
    :class="[isActiveTask ? 'active' : '', backgroundColor]"
    @click="chooseTask"
  >
    <LabelingStatus
      :status="labelingStatus"
      :isSecondary="isPriority"
    ></LabelingStatus>
    <div class="card-job__content">
      <p class="card-job__title">{{ title }}</p>
      <div class="card-job__info">
        <dl v-for="(item, key) in toolItems" :key="key">
          <dt>{{ key }}:</dt>
          <dd>{{ item }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import LabelingStatus from './LabelingStatus.vue';
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  /** Название задачи*/
  title: {
    type: String,
    default: '',
  },
  /** Информация о задаче*/
  toolItems: {
    type: Object,
    default: () => ({}),
  },
  /** Статус маркировки*/
  labelingStatus: {
    type: String,
    default: '',
  },
  /** Приоритет задания */
  isPriority: {
    type: Boolean,
    default: true,
  },
  /** Активное состояние/Нажатие */
  isActiveTask: { type: Boolean, default: false },
});

const emit = defineEmits(['chooseTask']);

const backgroundColor = computed(() => {
  switch (props.labelingStatus) {
    case 'ready':
    case '': //стату Отменено
      return 'no-bg';
    case 'labeling': //Задание в процессе выполнения всегда выделяются активным состоянием
      return 'active';
    default:
      return '';
  }
});
function chooseTask() {
  emit('chooseTask', props.id);
}
</script>

<style scoped lang="scss">
@import '../../assets/css/main.scss';

.card-job {
  display: flex;
  flex-direction: column;
  background: $light-gray-40;
  padding: $s-2;
  border-radius: $d-1;
  border: 1px solid $light-gray-40;
  gap: $s-3;

  &.no-bg {
    background: none;
    border: 1px solid transparent;
  }

  &.active {
    border: 1px solid $dark-gray;
  }

  &__title {
    color: $dark-gray;
    font-family: Golos UI-Medium;
    font-size: $font-size-p1;
    line-height: $s-3;
    letter-spacing: -0.24px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $s-3;
  }

  dl {
    display: flex;
    align-items: center;
    margin-bottom: $s-1;

    dt {
      font-family: Golos UI;
      float: left;
      padding-right: $d-1;
      color: $dark-gray-55;
      font-size: 18px;
      line-height: 18px;
    }

    dd {
      font-family: Golos UI-medium;
      font-size: 18px;
      line-height: 18px;
      color: $dark-gray;
    }
  }
  dl:last-child {
    margin-bottom: 0;
  }
}
</style>
