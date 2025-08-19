<template>
  <div class="generated-datamatrix" v-html="svgHtml"></div>
</template>

<script setup lang="ts">
import type { GeneratedDatamatrixProps } from '@base/components/Elements/GeneratedDatamatrix/GeneratedDatamatrix.types';
import { computed, onMounted, ref } from 'vue';
import DATAMatrix from '@/datamatrix.js';

const props = withDefaults(defineProps<GeneratedDatamatrixProps>(), {
  data: undefined,
  size: 180,
  dark: false,
});

const svgHtml = ref('');

const computedSize = computed(() => `${props.size}px`);

onMounted(() => {
  if (props.data) {
    const datamatrixMessage = JSON.stringify(props.data).replace(
      /[\u007F-\uFFFF]/g,
      (chr) => `\\u${chr.charCodeAt(0).toString(16).padStart(4, '0')}`,
    );

    const pad = 5;
    const datamatrix = DATAMatrix({
      msg: datamatrixMessage,
      dim: 180, // dimensions
      rct: 0, // keep datamatrix square
      pad, // padding
      pal: props.dark ? ['#fff', ''] : ['#000', ''], // palette
      vrb: 1, // verbose
    });

    svgHtml.value = datamatrix.outerHTML;
  }
});
</script>

<style lang="scss" scoped>
.generated-datamatrix {
  width: v-bind(computedSize);
  height: v-bind(computedSize);

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
