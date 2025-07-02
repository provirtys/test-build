<template>
  <div class="generated-datamatrix" v-html="svgHtml"></div>
</template>

<script setup>
import DATAMatrix from "@base/datamatrix.js";
import { computed, onMounted, ref } from "vue";

const props = defineProps({
    data: {
        type: [Object, String, Number],
        default: null,
        required: true,
    },
    size: {
        type: Number,
        default: 180,
        required: false,
    },
    darkMode: {
        type: Boolean,
        default: false,
        required: false,
    },
});

const svgHtml = ref("");

const computedSize = computed(() => `${props.size}px`);

onMounted(() => {
    if (props.data) {
        const datamatrixMessage = JSON.stringify(props.data).replace(
            /[\u007F-\uFFFF]/g,
            (chr) => `\\u${chr.charCodeAt(0).toString(16).padStart(4, "0")}`,
        );

        const pad = 5;
        const datamatrix = DATAMatrix({
            msg: datamatrixMessage,
            dim: 180, // dimensions
            rct: 0, // keep datamatrix square
            pad, // padding
            pal: props.darkMode ? ["#fff", ""] : ["#000", ""], // palette
            vrb: 1, // verbose
        });

        svgHtml.value = datamatrix.outerHTML;
    }
});
</script>

<style lang="scss">
.generated-datamatrix {
  width: v-bind(computedSize);
  height: v-bind(computedSize);

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
