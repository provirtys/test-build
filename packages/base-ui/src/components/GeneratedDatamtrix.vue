<template>
  <div class="user">
    <span :class="classes">{{ t('bindingCode') }}</span>
    <div class="binding-barcode">
      <div id="factory-barcode" v-html="svgnode"></div>
    </div>
  </div>
</template>

<script setup>
import DATAMatrix from "@base/datamatrix.js";
import { setupI18n } from "@base/i18n.js";
import { computed, onMounted, ref } from "vue";

const { t } = setupI18n();

const props = defineProps({
    uuid: { type: String, default: "" },
    name: { type: String, default: "" },
    isBackgroundDark: { type: Boolean, default: false },
});

const classes = computed(() => {
    const color_text = props.isBackgroundDark === false ? "black-color" : "white-color";
    return `${color_text}`;
});

const svgnode = ref("");

onMounted(() => {
    const data = {
        uuid: props.uuid,
        name: props.name,
    };

    const datamatrixMessage = JSON.stringify(data).replace(
        /[\u007F-\uFFFF]/g,
        (chr) => `\\u${chr.charCodeAt(0).toString(16).padStart(4, "0")}`,
    );

    const pad = 5;
    const datamatrix = DATAMatrix({
        msg: datamatrixMessage,
        dim: 180, // dimensions
        rct: 0, // keep datamatrix square
        pad, // padding
        pal: ["#000000", props.isBackgroundDark ? "#fff" : ""], // pallette
        vrb: 1, // verbose
    });
    const e = document.getElementById("factory-barcode");
    if (e) {
        while (e.childNodes[0]) {
            e.removeChild(e.childNodes[0]);
        }
        e.appendChild(datamatrix);
    }
    svgnode.value = datamatrix.outerHTML;
});
</script>

<style lang="scss">
.binding-barcode {
  margin-top: 5%;
  margin-bottom: $xxxl-3;
  text-align: center;
}

.user {
  margin-top: 10%;
  margin-left: $s-3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

span {
  &.white-color {
    color: $secondary;
  }

  &.black-color {
    color: $dark-gray;
  }
}
</style>
