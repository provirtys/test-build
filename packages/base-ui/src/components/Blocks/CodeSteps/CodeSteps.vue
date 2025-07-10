<template>
  <div class="codes">
    <div class="code" v-for="index in props.codesLength" :key="index">
      <v-icon v-if="index > 1" name="arrow-forward" class="arrow" :class="[codeColor(index-1), arrowMargin]"/>
      <component
          :is="codeTypes[currentType]"
          :border="props.showBorder"
          :class="[codeTypeClass, index === 1 ? firstCodeColor : codeColor(index-1)]"
      />
    </div>
  </div>
</template>

<script setup>
import { VIcon } from '@base';
import BarcodeIcon from '@base/components/Elements/BarcodeIcon.vue';
import DatamatrixIcon from '@base/components/Elements/DatamatrixIcon.vue';
import { computed } from 'vue';

const props = defineProps({
    /** Вариант изображения кода*/
    codeType: { type: String, default: 'data-matrix' },
    /** Индекс сканируемого кода*/
    currentCodeIndex: { type: Number, default: 0 },
    /** Количество сканируемых кодов */
    codesLength: { type: Number, default: 2 },
    /** Видимость рамки сканирования кода*/
    showBorder: { type: Boolean, default: true },
});

const codeTypes = {
    DatamatrixIcon,
    BarcodeIcon,
};

const currentType = computed(() => {
    switch (props.codeType) {
        case 'barcode':
            return 'BarcodeIcon';
        case 'dataMatrix':
            return 'DatamatrixIcon';
        default:
            return 'DatamatrixIcon';
    }
});

const codeTypeClass = computed(() => (props.codeType === 'barcode' ? 'barcode' : 'datamatrix'));

const firstCodeColor = computed(() => {
    if (props.currentCodeIndex === -1) return 'gray';
    if (props.currentCodeIndex === 0) return 'red';
    return 'black';
});
const arrowMargin = computed(() => (props.codeType === 'barcode' ? 'medium' : 'large'));

const codeColor = (index) => {
    if (index === props.currentCodeIndex) return 'red';
    if (index < props.currentCodeIndex + 1) return 'black';
    return 'gray';
};
</script>

<style lang="scss">
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

  .red {
    color: $primary;
  }

  .gray {
    color: $dark-gray-40;
  }

  .black {
    color: $dark-gray;
  }
}
</style>
