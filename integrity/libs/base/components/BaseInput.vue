<template>
  <div>
    <input
      class="base-input"
      :class="{ error: hasErrorNoEmpty || hasErrorUniqueValue }"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="updateModelValue"
      v-bind="$attrs"
      data-testid="input"
    />
    <span v-if="hasErrorNoEmpty" class="error-text">{{
      t('error.noEmpty')
    }}</span>
    <span v-else-if="hasErrorUniqueValue" class="error-text">{{
      t('error.uniqueValue')
    }}</span>
    <span v-if="noPositiveNumber" class="error-text">{{
      t('error.noPositiveNumber')
    }}</span>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { setupI18n } from '../i18n.js';

const { t } = setupI18n();

const props = defineProps({
  /** Введенное значение */
  modelValue: { type: String, default: '' },
  /** Уникальное название поля ввода */
  inputName: { type: String, default: '' },
  /** Тип данных для заполнения */
  type: { type: String, default: 'text' },
  /** Пример заполнения */
  placeholder: { type: String, default: '' },
  /** Правило заполнения */
  rules: { type: Object, default: () => ({}) },
});

const emit = defineEmits(['update:modelValue']);
const hasErrorNoEmpty = ref(false);
const hasErrorUniqueValue = computed(() => {
  return props.rules.unique;
});
const noPositiveNumber = ref(false);

const updateModelValue = ($event) => {
  if (
    'regex' in props.rules &&
    $event.target.value &&
    (!$event.target.value.match(props.rules.regex) ||
      $event.target.value.match(props.rules.regex) !== $event.target.value)
  ) {
    noPositiveNumber.value = true;
    $event.target.value = $event.target.value.match(props.rules.regex);
  } else if ('not-empty' in props.rules && $event.target.value === '') {
    hasErrorNoEmpty.value = true; // поле пустое
  } else {
    hasErrorNoEmpty.value = false; // поле не пустое
  }
  emit('update:modelValue', $event.target.value);
};
</script>

<style scoped lang="scss">
@import 'assets/css/main.scss';

.base-input {
  width: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: $font-size-p1;
  font-family: Ubuntu-regular, serif;
  border-bottom: 1px solid $dark-gray-40;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

.error {
  border-bottom: 1px solid $primary;
}

.error-text {
  color: $primary;
}
</style>
