<template>
  <div class="labeling">
    <BarChart
      :codes="codes"
      :last-meter="lastMeter ? lastMeter : codes.length"
      class="p-0"
    ></BarChart>
    <BarChartTimeSeries :codes="codes" class="p-0"></BarChartTimeSeries>
  </div>
</template>

<script setup>
import BarChart from './BarChart.vue';
import BarChartTimeSeries from './BarChartTimeSeries.vue';

const props = defineProps({
    codes: {
        type: Array,
        default: () => [],
    },
    lastMeter: {
        type: Number,
        default: 0,
    },
});
</script>

<style lang="scss">
.p-0 {
  padding-bottom: 0;
}

.labeling {
  width: 100%;
  height: 100%;
  background: $secondary;
  border-radius: $s-1;
}
</style>
