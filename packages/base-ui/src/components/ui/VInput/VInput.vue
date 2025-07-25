<template>
  <div :class="wrapperClasses">
    <span v-if="labelOutside" ref="labelRef" :class="labelClasses" @click="focusInput">{{ attrs.label }}</span>
    <q-input
        v-model="modelValue"
        v-bind="bindingAttrs"
        no-error-icon
        ref="inputRef"
        @focus="() => isFocused = true"
        @blur="() => isFocused = false"
    >
      <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
        <slot v-if="name !== 'append'" :name="name" v-bind="slotData" />
      </template>

      <template v-if="showRequiredStar || attrs.type === 'password'" #append>
        <span v-if="showRequiredStar" class="v-input__required-star">*</span>
        <q-icon v-if="attrs.type === 'password'" class="v-input__eye"
                :name="isPassword ? 'visibility_off' : 'visibility'"
                @click="isPassword = !isPassword"/>
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { isQuasarColor } from '@base/utils/resolveColor.js';
import { QInput } from 'quasar';
import { computed, ref, useAttrs, watch } from 'vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  labelOutside: Boolean,
  required: Boolean,
});

const attrs = useAttrs();

const modelValue = defineModel();

const inputRef = ref();
const labelRef = ref();
const isFocused = ref(false);
const isPassword = ref(false);

const hasError = computed(() => inputRef.value?.hasError);

const croppedTop = computed(() => props.labelOutside && bindingAttrs.value.outlined);

const showRequiredStar = computed(() => croppedTop.value && props.required);

const computedType = computed(() => {
  if (attrs.type === 'password' && !isPassword.value) {
    return 'text';
  }

  return attrs.type;
});

const wrapperClasses = computed(() => [
  'v-input',
  {
    'v-input--label-outside': props.labelOutside,
    'v-input--outlined': bindingAttrs.value.outlined,
    'v-input--required': props.required,
    'v-input--cropped-top': croppedTop.value,
    'v-input--focused': isFocused.value,
    'v-input--has-error': hasError.value,
  },
]);

const labelWidth = computed(() => (props.labelOutside && labelRef.value ? `${labelRef.value.clientWidth}px` : '0'));

const bindingAttrs = computed(() => {
  const booleanFields = ['outlined', 'filled', 'dense', 'clearable'];
  const resAttrs = { ...attrs };

  resAttrs.type = computedType.value;

  for (let key of booleanFields) {
    if (resAttrs[key] !== undefined) {
      resAttrs[key] = resAttrs[key] === '' || resAttrs[key] === true;
    }
  }

  if (props.labelOutside) {
    resAttrs.label = undefined;
  }
  if (props.required) {
    const requiredRule = (val) => !!val || 'Поле обязательное для заполнения';

    if (Array.isArray(resAttrs.rules)) {
      resAttrs.rules = [requiredRule, ...resAttrs.rules]; // создаём новый массив
    } else if (typeof resAttrs.rules === 'function') {
      resAttrs.rules = [requiredRule, resAttrs.rules];
    } else {
      resAttrs.rules = [requiredRule];
    }
  }

  return resAttrs;
});

const quasarColor = computed(() => (isQuasarColor(attrs.labelColor) ? `text-${attrs.labelColor}` : null));

const labelClasses = computed(() => ['v-input__label', quasarColor.value]);

const bindColor = computed(() => (!quasarColor.value ? attrs.labelColor : ''));

const focusInput = () => {
  inputRef.value.focus();
};

watch(
  () => attrs.type,
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

  &--outlined {

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
  }

  &--label-outside {
    position: relative;
  }

  &--required:not(&--cropped-top) {
    .v-input__label, .q-field__label {
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

    :deep(.q-field__control):before {
      border-top: none;
    }

    :deep(.q-field__control)::after {
      border-top: none;
    }
  }

  &__label {
    display: inline-block;
    position: relative;
    margin-block: 8px;
    color: v-bind(bindColor);
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
}
</style>
