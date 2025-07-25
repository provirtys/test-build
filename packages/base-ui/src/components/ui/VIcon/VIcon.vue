<template>
  <svg
      :width="iconSize.width"
      :height="iconSize.height"
      aria-hidden="true"
      class="flex"
      :viewBox="`0 0 ${iconSize.width} ${iconSize.height}`"
  >
    <use :xlink:href="`#icon-${name}`"/>
  </svg>
</template>

<script setup>
import { computed, onBeforeMount, reactive } from 'vue';

const props = defineProps({
  width: {
    type: [String, Number],
    required: false,
  },
  height: {
    type: [String, Number],
    required: false,
  },
  size: {
    type: [String, Number],
    required: false,
  },
  name: {
    type: [String, Number],
    required: true,
  },
});

const baseSize = reactive({
  width: null,
  height: null,
});

const iconSize = computed(() => ({
  width: props.width ?? props.size ?? baseSize.width,
  height: props.height ?? props.size ?? baseSize.height,
}));

const REGEXP_SPLIT = /[\s,]+/;

onBeforeMount(() => {
  const svgElement = document.querySelector(`#icon-${props.name}`);
  if (svgElement) {
    const originalViewBox = svgElement.getAttribute('viewBox');
    if (originalViewBox) {
      const viewBoxArr = originalViewBox.split(REGEXP_SPLIT).filter(Boolean);
      [, , baseSize.width, baseSize.height] = viewBoxArr;
    }
  }
});
</script>
