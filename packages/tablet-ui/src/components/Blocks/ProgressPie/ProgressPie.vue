<template>
  <div class="progress-pie" :class="[{ done: percentage === 100 }, props.size]" :style="degrees">
    <div class="progress-pie__filling"></div>
    <div class="progress-pie__percentage">{{ props.percentage }}%</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  percentage: { type: Number, default: 0 },
  size: { type: String, default: 'small' },
});

const degrees = computed(() => {
  const radius = props.percentage <= 2 ? '6deg' : `${(props.percentage * 3.6).toString()}deg`;
  return {
    '--degrees': radius,
  };
});
</script>

<style lang="scss" scoped>
.progress-pie {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &__filling {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: conic-gradient(from 0.25turn, $primary var(--degrees), $light-gray-85 0deg);

    &::before {
      content: '';
      position: absolute;
      border-radius: 50%;
      background-color: $secondary;
    }
  }

  &__percentage {
    position: absolute;
    color: $dark-gray;
    font-family: 'Golos';
  }

  &.done {
    .progress-pie__filling {
      &::before {
        content: none;
      }
    }

    .progress-pie__percentage {
      color: $secondary;
    }
  }

  &.small {
    width: $l-2;
    height: $l-2;

    .progress-pie__filling {
      &::before {
        height: 38px;
        width: 38px;
      }
    }
  }

  &.large {
    width: $xxl-4;
    height: $xxl-4;

    .progress-pie__filling {
      &::before {
        height: 70px;
        width: 70px;
      }
    }

    .progress-pie__percentage {
      font-size: 26px;
    }
  }
}
</style>
