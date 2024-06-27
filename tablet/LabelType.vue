<template>
    <div class="label-type">
        <div class="label-type__content">
            <p class="label-type__title">{{ $t('chooseLabelingType') }}</p>
            <div class="label-type__option" :class="{'selected': dmSelected}" data-testid="codeType-DataMatrix" @click="switchType(codeTypes.DATAMATRIX)">
                <img :src="dataMatrix">
                <p>Data Matrix</p>
            </div>
            <div class="label-type__option" :class="{'selected': bcSelected}" data-testid="codeType-Code128" @click="switchType(codeTypes.CODE128)">
                <img :src="barCode">
                <p>Barcode</p>
            </div>
            <div v-if="!isAuto" class="label-type__option all-selected">
                <img :src="allSelected ? checkboxFilled : checkboxEmpty" data-testid="codeType-all" @click="switchType(codeTypes.ALL)">
                <p>{{ $t('chooseAll') }}</p>
            </div>
        </div>
        <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import dataMatrix from '../assets/images/tablet-icons/dataMatrix.svg'
import barCode from '../assets/images/tablet-icons/barCode.svg'
import checkboxFilled from '../assets/images/tablet-icons/checkbox-filled.svg'
import checkboxEmpty from '../assets/images/tablet-icons/checkbox-empty.svg'
import * as codeTypes from '../constants/codeTypes'

const props = defineProps({
  isAuto: {
    type: Boolean,
    default: true
  },
  selectedTypes: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['typeChosen'])

const dmSelected = computed(() => {
  return props.selectedTypes.includes(codeTypes.DATAMATRIX)
})

const bcSelected = computed(() => {
  return props.selectedTypes.includes(codeTypes.CODE128)
})

const allSelected = computed(() => {
  return props.selectedTypes.includes(codeTypes.DATAMATRIX) && props.selectedTypes.includes(codeTypes.CODE128)
})

function switchType (value) {
  let newState = { dm: false, bc: false }
  if (props.isAuto) {
    switch (value) {
      case codeTypes.DATAMATRIX:
        newState = { dm: true, bc: false }
        break
      case codeTypes.CODE128:
        newState = { dm: false, bc: true }
        break
    }
    if (newState.bc) {
      emit('typeChosen', [codeTypes.CODE128])
    } else {
      emit('typeChosen', [codeTypes.DATAMATRIX])
    }
    return
  }

  switch (value) {
    case codeTypes.ALL:
      if (!allSelected.value) {
        newState = { dm: true, bc: true }
        break
      }
      break
    case codeTypes.DATAMATRIX:
      if (dmSelected.value) {
        newState = { dm: false, bc: bcSelected.value }
        break
      }
      newState = { dm: true, bc: bcSelected.value }
      break
    case codeTypes.CODE128:
      if (bcSelected.value) {
        newState = { dm: dmSelected.value, bc: false }
        break
      }
      newState = { dm: dmSelected.value, bc: true }
      break
  }
  const result = []
  if (newState.dm) {
    result.push(codeTypes.DATAMATRIX)
  }
  if (newState.bc) {
    result.push(codeTypes.CODE128)
  }

  emit('typeChosen', result)
}
</script>

<style lang="scss">
.label-type {
    padding: $s-3;
    width: 100%;
    height: 100%;
    border-radius: $s-1;
    background: $secondary;
    font-family: Golos UI;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-family: Golos UI;
    }

    &__title {
        font-size: $font-size-p3;
        margin-bottom: $m-2;
    }

    &__option {
        width: 100%;
        background: $light-gray-55;
        padding: $s-3;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: $s-1;
        border-radius: $d-1;
        border: 2px solid $light-gray-55;

        &.all-selected {
            background: none;
            border: none;
            justify-content: flex-start;
        }

        &.selected {
            border: 2px solid $primary;
        }

        p {
            margin: 0;
            font-size: $font-size-p1;
            margin-left: $s-1;
        }
    }
}
</style>
