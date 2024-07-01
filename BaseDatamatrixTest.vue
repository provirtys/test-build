<template>
  <div class="user">
    <span :class="classes">{{ $t('bindingCode') }}</span>
    <div class="binding-barcode">
      <div id="factory-barcode" v-html="svgnode">
      </div>
    </div>
  </div>
</template>

<script setup>
import DATAMatrix from "utils/datamatrix.js"
import {ref, onMounted, computed} from 'vue'

let props = defineProps({
  uuid: {type: String, default: ''},
  name: {type: String, default: ''},
  isBackgroundDark: {type: Boolean, default: false},
})

const classes = computed(() => {
  let color_text = props.isBackgroundDark === false ? "black-color" : "white-color"
  return `${color_text}`
})

const svgnode = ref("")

onMounted(() => {
  const data = {
    uuid: props.uuid,
    name: props.name
  }
  const datamatrix_text = JSON.stringify(data).replace(/[\u007F-\uFFFF]/g, (chr) => {
    return "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4)
  });
  const pad = 5;
  const datamatrix = DATAMatrix({
    msg: datamatrix_text,
    dim: 180,	// dimensions
    rct: 0,	// keep datamatrix square
    pad,	// padding
    pal: ["#000000", props.isBackgroundDark ? "#fff" : ""],	// pallette
    vrb: 1,	// verbose
  });
  const e = document.getElementById("factory-barcode");
  if (e) {
    while (e.childNodes[0]) {
      e.removeChild(e.childNodes[0]);
    }
    e.appendChild(datamatrix);
  }
  svgnode.value = datamatrix.outerHTML;
})
</script>

<style scoped lang="scss">
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
  //justify-content: center;
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
