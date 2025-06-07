<template>
  <div class="statistics">
    <div class="statistics__jobs">
      <StatisticsByStatusCard
        v-for="card in jobCards"
        :key="card.id"
        :title="card.title"
        :number="card.number"
      />
    </div>
    <div class="statistics__tools">
      <StatisticsByStatusCard
        v-for="card in toolCards"
        :key="card.id"
        :title="card.title"
        :number="card.number"
      />
    </div>
  </div>
</template>

<script setup>
import StatisticsByStatusCard from "./StatisticsByStatusCard.vue";

const props = defineProps({
    jobCards: { type: Array, default: () => [] },
    toolCards: { type: Array, default: () => [] },
});
</script>

<style lang="scss">
@import '../css/main.scss';

.statistics {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: $d-1;
  margin-bottom: $s-3;

  &__jobs,
  &__tools {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: $bb-3;
    gap: $d-1;
  }
}
</style>
