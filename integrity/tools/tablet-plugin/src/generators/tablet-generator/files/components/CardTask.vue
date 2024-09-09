<script setup>
import MarkingStatus from './MarkingStatus.vue'
import ProgressPie from './ProgressPie.vue'

const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  toolItems: {
    type: Object,
    default: () => ({})
  },
  markingStatus: {
    type: String,
    default: ''
  },
  progress: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['openTaskDetails'])

function openTaskDetails() {
  emit('openTaskDetails', props.id)
}
</script>

<template>
  <div class="card-task">
    <div class="card-task__main">
      <div class="card-task__main__info">
        <p>{{ title }}</p>
        <div class="card-task__main__info__items">
          <dl v-for="(item, key) in toolItems" :key="key">
            <dt>{{ key }}:</dt>
            <dd>{{ item }}</dd>
          </dl>
        </div>
      </div>
      <div class="card-task__main__status">
        <MarkingStatus :status="markingStatus"></MarkingStatus>
        <ProgressPie v-if="progress >= 0" :percentage="progress" :size="'large'"></ProgressPie>
      </div>
    </div>
    <div class="card-task__arrow" @click="openTaskDetails">
      <img src="../assets/images/arrow-forward.svg" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/css/main.scss';

.card-task {
  width: 100%;
  display: flex;
  justify-content: center;

  &__main {
    width: 100%;
    border-radius: $s-1 0px 0px $s-1;
    background: $secondary;
    padding: $s-3 $l-2 $s-3 $s-3;
    color: $dark-gray;
    letter-spacing: -0.24px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &__info {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      p {
        font-family: 'Golos UI-medium';
        font-size: $font-size-p1;
        line-height: $line-height-120;
        letter-spacing: -0.24px;
        margin-bottom: $d-1;
      }

      &__items {
        display: flex;
        flex-direction: column;
        gap: $s-4;
      }
    }

    &__status {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 53px;
    }
  }

  &__arrow {
    display: flex;
    border-radius: 0px $s-1 $s-1 0px;
    background: $primary;
    padding: $s-3;
    align-items: center;
  }
}

dl {
  display: flex;
  align-items: center;
}

dl dt {
  float: left;
  padding-right: $s-1;
  color: $dark-gray-40;
  font-size: $font-size-p2;
  font-family: 'Golos UI-medium';
}

dl dd {
  padding: 5px 0;
  font-size: $font-size-p3;
  font-family: 'Golos UI-medium';
}
</style>
