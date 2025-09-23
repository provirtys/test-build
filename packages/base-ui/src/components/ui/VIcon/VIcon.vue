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

<script setup lang="ts">
import { computed, onBeforeMount, reactive } from 'vue';
import type { VIconProps } from './VIcon.types';

const props = defineProps<VIconProps>();

const baseSize = reactive<{ width?: string; height?: string }>({
  width: undefined,
  height: undefined,
});

const iconSize = computed(() => ({
  width: props.width || props.size || baseSize.width,
  height: props.height || props.size || baseSize.height,
}));

onBeforeMount(() => {
  const svgElement = document.querySelector(`#icon-${props.name}`);
  if (svgElement) {
    const originalViewBox = svgElement.getAttribute('viewBox');
    if (originalViewBox) {
      [, , baseSize.width, baseSize.height] = originalViewBox.split(/[\s,]+/).filter(Boolean);
    }
  }
});
</script>
