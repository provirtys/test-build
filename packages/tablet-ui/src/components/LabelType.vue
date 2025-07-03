<template>
  <div class="label-type">
    <div class="label-type__content">
      <p class="label-type__title">{{ t('chooseLabelingType') }}</p>
      <div
        class="label-type__option"
        :class="{ selected: dmSelected }"
        data-testid="codeType-DataMatrix"
        @click="switchType('DataMatrix')"
      >
        <v-icon name="dataMatrix" />
        <p>Data Matrix</p>
      </div>
      <div
        class="label-type__option"
        :class="{ selected: bcSelected }"
        data-testid="codeType-Code128"
        @click="switchType('Code128')"
      >
        <v-icon name="barCode" />
        <p>Barcode</p>
      </div>
      <div v-if="!isAuto" class="label-type__option all-selected">
        <v-icon
          :name="allSelected ? 'checkbox-filled' : 'checkbox-empty'"
          data-testid="codeType-all"
          @click="switchType('all')"
        />
        <p>{{ t('chooseAll') }}</p>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { VIcon } from "@base";
import { setupI18n } from "@base/i18n.js";
import { computed } from "vue";
const { t } = setupI18n();

const props = defineProps({
    isAuto: {
        type: Boolean,
        default: true,
    },
    selectedTypes: {
        type: Array,
        default: () => [],
    },
});

const emit = defineEmits(["typeChosen"]);

const dmSelected = computed(() => {
    return props.selectedTypes.includes("DataMatrix");
});

const bcSelected = computed(() => {
    return props.selectedTypes.includes("Code128");
});

const allSelected = computed(() => {
    return props.selectedTypes.includes("DataMatrix") && props.selectedTypes.includes("Code128");
});

function switchType(value) {
    let newState = { dm: false, bc: false };
    if (props.isAuto) {
        switch (value) {
            case "DataMatrix":
                newState = { dm: true, bc: false };
                break;
            case "Code128":
                newState = { dm: false, bc: true };
                break;
        }
        if (newState.bc) {
            emit("typeChosen", ["Code128"]);
        } else {
            emit("typeChosen", ["DataMatrix"]);
        }
        return;
    }

    switch (value) {
        case "all":
            if (!allSelected.value) {
                newState = { dm: true, bc: true };
                break;
            }
            break;
        case "DataMatrix":
            if (dmSelected.value) {
                newState = { dm: false, bc: bcSelected.value };
                break;
            }
            newState = { dm: true, bc: bcSelected.value };
            break;
        case "Code128":
            if (bcSelected.value) {
                newState = { dm: dmSelected.value, bc: false };
                break;
            }
            newState = { dm: dmSelected.value, bc: true };
            break;
    }
    const result = [];
    if (newState.dm) {
        result.push("DataMatrix");
    }
    if (newState.bc) {
        result.push("Code128");
    }

    emit("typeChosen", result);
}
</script>

<style lang="scss">
.label-type {
  padding: $s-3;
  width: 100%;
  height: 100%;
  border-radius: $s-1;
  background: $secondary;
  font-family: 'Golos';
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-family: 'Golos';
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
