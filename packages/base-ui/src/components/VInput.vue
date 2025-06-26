<template>
  <div :class="wrapperClasses">
    <span v-if="labelOutside" :class="labelClasses" @click="focusInput">{{ attrs.label }}</span>
    <q-input
        v-model="modelValue"
        v-bind="bindingAttrs"
        ref="inputRef"
    >
    </q-input>
  </div>
</template>

<script setup>
import { isQuasarColor } from "@base/utils/resolveColor.js";
import { QInput } from "quasar";
import { computed, ref, useAttrs } from "vue";

defineOptions({
    inheritAttrs: false,
});

const props = defineProps({
    labelOutside: Boolean,
});

const attrs = useAttrs();

const modelValue = defineModel();
const inputRef = ref();

const wrapperClasses = computed(() => [
    "v-input",
    {
        "v-input--label-outside": props.labelOutside,
        "v-input--outlined": attrs.outlined,
    },
]);

const bindingAttrs = computed(() => {
    const resAttrs = { ...attrs };

    if (props.labelOutside) {
        resAttrs.label = undefined;
    }

    return resAttrs;
});

const quasarColor = computed(() => (isQuasarColor(attrs.labelColor) ? `text-${attrs.labelColor}` : null));

const labelClasses = computed(() => ["v-input__label", quasarColor.value]);

const bindColor = computed(() => (!quasarColor.value ? attrs.labelColor : ""));

const focusInput = () => {
    inputRef.value.focus();
};
</script>

<style lang="scss">
.v-input {
  font-family: "Golos UI", sans-serif;

  &--outlined {
    padding-top: 8px;

    .v-input__label {
      position: absolute;
      top: 6px;
      left: 16px;
      background: $secondary;
      z-index: 10;
      margin: 0;
      padding-inline: 4px;
      font-size: 12px;
      color: $dark-gray-70;
    }
  }

  &__label {
    display: inline-block;
    margin-block: 8px;
    color:v-bind(bindColor);
  }

  .q-field--outlined,
  .q-field--filled {
    .q-field__control {
      border-radius: 8px;
    }
  }

  .q-field__native {
    color: $dark-gray;
  }
}

.q-radio__label {
  font-size: $font-size-h6;
  margin-left: $s-1;
}

.input-amount {
  width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: $s-3;
  align-items: center;
  border-radius: $s-3;
  background: $secondary;
  font-family: Golos UI;


  .q-field__native {
    font-size: $font-size-h6;
    padding: 6px 0;
  }

  .q-field__control {
    color: $primary;
    background: $secondary;
  }
}
</style>
