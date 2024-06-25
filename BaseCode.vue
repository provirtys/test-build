<template>
  <div class="codes" >
    <component :is="codeTypes[currentType]" :border="props.needBorder" :class="[ codeTypeClass, firstCodeColor ]"/>
    <div class="code" v-for="index in props.codesLength - 1" :key="index" >
      <CodesArrow class="arrow" :class="[ codeColor(index), arrowMargin ]" />
      <component :is="codeTypes[currentType]" :class="[ codeTypeClass, codeColor(index) ]" />
    </div>
  </div>
</template>

<script setup>
import CodesArrow from '../components/icons/CodesArrow.vue'
import DatamatrixIcon from '../components/icons/DatamatrixIcon.vue'
import BarcodeIcon from '../components/icons/BarcodeIcon.vue'
import * as types from '../constants/codeTypes'
import * as colors from '../constants/colors'
import * as size from '../constants/sizes'
import {computed} from 'vue'

const props = defineProps({
  /** Вариант изображения кода*/
  codeType: {type: String, default: types.DATAMATRIX},
  /** Индекс сканируемого кода*/
  currentCode: {type: Number, default: 0},
  /** Количество сканируемых кодов */
  codesLength: {type: Number, default: 2},
  /** Видимость рамки сканирования кода*/
  needBorder: {type: Boolean, default: true}
})

const codeTypes = {
  DatamatrixIcon,
  BarcodeIcon
}

const currentType = computed(() => {
  if (props.codeType === types.CODE128) {
    return 'BarcodeIcon'
  } else {
    return 'DatamatrixIcon'
  }
})

const codeTypeClass = computed(() => {
  props.codeType === types.CODE128 ? 'barcode' : 'datamatrix'
})

const firstCodeColor = computed(() => {
  return props.currentCode === -1 ? colors.GRAY : props.currentCode === 0 ? colors.RED : colors.BLACK
})

const arrowMargin = computed(() => {
  return props.codeType === types.CODE128 ? size.MEDIUM : size.LARGE
})

const codeColor = (index) => {
  return index === props.currentCode ? colors.RED : index < props.currentCode + 1 ? colors.BLACK : colors.GRAY
}
</script>

<style scoped lang="scss">
.codes {
  display: flex;
  align-items: center;

  .code {
    display: flex;
    align-items: center;
  }

  .datamatrix {
    width: 94px;
    height: 94px;
    margin: $s-1 0;
  }

  .barcode {
    width: 130px;
    height: $xxl-2;
    padding: 7px 0;
    margin: $s-1 0;
  }

  .arrow {
    width: $s-2;
    height: 35px;

    &.medium {
      margin: 0 $s-1;
    }

    &.large {
      margin: 0 $m-1;
    }
  }
}

.red {
  color: $primary;
}

.gray {
  color: $dark-gray-40;
}

.black {
  color: $dark-gray;
}

.none {
  display: none;
}
</style>
