<template>
  <div :class="wrapperClasses">
    <div v-if="showOutsideContent" class="v-input__outside">
      <v-icon v-if="showAsterisk" class="text-primary" name="asterisk" size="14"/>
      <span v-if="labelOutside" ref="labelRef" class="v-input__label" @click="focusInput">{{ props.label }}</span>
    </div>
    <q-input
      v-model="modelValue"
      v-bind="bindingAttrs"
      no-error-icon
      ref="inputRef"
      @focus="() => isFocused = true"
      @blur="() => isFocused = false"
      @update:modelValue="props['onUpdate:modelValue']"
    >
      <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
        <slot v-if="true" :name="name" v-bind="slotData"/>
      </template>
      <template v-if="$slots.append && showRequiredStar || props.type === 'password'" #append>
        <span v-if="showRequiredStar" class="v-input__required-star">*</span>
        <q-icon v-if="props.type === 'password'" class="v-input__eye"
                :name="isPassword ? 'visibility' : 'visibility_off'"
                @click="isPassword = !isPassword"/>
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from '@base';
import type { VInputProps, VInputSlots } from '@base/components/ui/VInput/VInput.types';
import { colors, QInput } from 'quasar';
import { computed, ref, useAttrs, watch } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<VInputProps>(), {
  labelOutside: false,
  required: false,
  labelOnBorder: true,
});

defineSlots<VInputSlots>();

const attrs = useAttrs();

const modelValue = defineModel<string>();

const inputRef = ref();
const labelRef = ref();
const isFocused = ref(false);
const isPassword = ref(false);

const hasError = computed(() => inputRef.value?.hasError);

const croppedTop = computed(() => props.labelOutside && bindingAttrs.value.outlined && props.labelOnBorder);

const showRequiredStar = computed(() => croppedTop.value && props.required);

const computedType = computed(() => {
  if (props.type === 'password' && !isPassword.value) {
    return 'text';
  }

  return props.type;
});

const showOutsideLabel = computed(
  () => (props.labelOutside && !props.outlined) || (!props.labelOnBorder && props.outlined && props.labelOutside),
);

const wrapperClasses = computed(() => [
  'v-input',
  attrs.class,
  {
    'v-input--label-outside': showOutsideLabel.value,
    'v-input--outlined': bindingAttrs.value.outlined,
    'v-input--required': props.required,
    'v-input--cropped-top': croppedTop.value,
    'v-input--focused': isFocused.value,
    'v-input--has-error': hasError.value,
    'v-input--has-xpadding': props.xPadding,
  },
]);

const labelWidth = computed(() => (croppedTop.value && labelRef.value ? `${labelRef.value.clientWidth}px` : '0'));

const bindingAttrs = computed(() => {
  const resProps = JSON.parse(JSON.stringify(props));

  resProps.type = computedType.value;

  if (props.labelOutside) {
    resProps.label = undefined;
  }
  if (props.required) {
    const requiredRule = (val: string) => !!val || 'Поле обязательное для заполнения';

    if (Array.isArray(resProps.rules)) {
      resProps.rules = [requiredRule, ...resProps.rules]; // создаём новый массив
    } else if (typeof resProps.rules === 'function') {
      resProps.rules = [requiredRule, resProps.rules];
    } else {
      resProps.rules = [requiredRule];
    }
  }

  return { ...resProps, ...attrs };
});

const bindingLabelColor = computed(() => (props.labelColor ? colors.getPaletteColor(props.labelColor) : null));

const showOutsideContent = computed(() => props.labelOutside);

const showAsterisk = computed(() => props.required && showOutsideLabel.value);

const focusInput = () => {
  inputRef.value.focus();
};

watch(
  () => props.type,
  (type) => {
    isPassword.value = type === 'password';
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
.v-input {
  --label-width: v-bind(labelWidth);

  font-family: 'Golos', sans-serif;
  position: relative;

  &--label-outside {
    position: relative;
  }

  &--required:not(&--label-outside) {

    &.v-input--cropped-top {
      .v-input__label:before {
        right: -2px;
      }
    }

    .v-input__label, :deep(.q-field__label) {
      overflow: visible;

      &:before {
        content: '*';
        position: absolute;
        top: 0;
        right: -8px;
        color: $error;
      }
    }
  }

  &--cropped-top {

    .v-input__label {
      position: absolute;
      top: 0;
      left: 12px;
      background: $secondary;
      z-index: 10;
      margin: 0;
      padding-inline: 4px;
      font-size: 12px;
      color: $dark-gray-70;
      transform: translateY(-50%);
    }

    :deep(.q-field__inner):before {
      content: '';
      position: absolute;
      inset: 0;
      top: 0;
      border-top: 1px solid $border-color-1;
      transition-delay: .1s;
      border-radius: 8px;
      pointer-events: none;
      mask-image: radial-gradient(circle at calc(var(--label-width) / 2 + 12px) 0px, transparent calc((var(--label-width) / 2)), black 0px);
    }

    &:hover.v-input :deep(.q-field__inner):before {
      border-top-color: #000;
    }

    &.v-input--focused.v-input--focused :deep(.q-field__inner):before {
      border-top-width: 2px;
      border-top-color: var(--q-primary);
    }

    &.v-input--has-error.v-input--has-error :deep(.q-field__inner):before {
      border-top-width: 2px;
      border-top-color: var(--q-negative);
    }

    .v-input__label {
      left: 12px;
      background: transparent;
    }

    .v-input__outside {
      margin-bottom: 0;
    }

    :deep(.q-field__control):before {
      border-top: none;
    }

    :deep(.q-field__control)::after {
      border-top: none;
    }
  }

  &--has-xpadding {
    .v-input__label {
      padding-inline: v-bind(xPadding);
    }

    :deep(.q-field__control) {
      padding-inline: v-bind(xPadding);
    }
  }

  &--outlined:not(&--cropped-top) {
    .v-input__label {
      margin: 0;
    }
  }

  &__outside {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 4px;
  }

  &__label {
    display: inline-block;
    position: relative;
    margin-block: 8px;
    color: v-bind(bindingLabelColor);
  }

  &__required-star {
    color: var(--q-negative);
  }

  :deep(.q-field__control-container) {
    order: -1;
  }

  :deep(.q-field__append + .q-field__append) {
    order: -1;
  }

  :deep(.q-field__prepend) {
    order: -1;
  }

  :deep(.q-field--outlined),
  :deep(.q-field--filled) {
    .q-field__control {
      border-radius: 8px;

      &:before {
        background: transparent;
      }
    }
  }

  :deep(.q-field--filled .q-field__control) {
    &:before {
      border-bottom: none;
    }

    &:after {
      content: unset
    }
  }

  :deep(.q-field__native) {
    color: $dark-gray;
  }

  :deep(.q-field--standard.q-field--readonly) {
    .q-field__control:before {
      border-bottom: 1px solid $light-gray;
    }

    .q-field__native {
      cursor: default;
    }
  }
}
</style>
