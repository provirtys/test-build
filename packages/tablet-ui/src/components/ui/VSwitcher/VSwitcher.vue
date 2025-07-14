<template>
  <q-btn-toggle
    :class="classes"
    :model-value="modelValue"
    :options="options"
    v-bind="computedAttrs"
    @update:modelValue="updateValue"
  >
    <template v-if="options[0].iconName" v-slot:one>
      <div class="switcher__item-icon">
        <v-icon :name="options[0].iconName" />
      </div>
    </template>
    <template v-if="options[1].iconName" v-slot:two>
      <div class="switcher__item-icon">
        <v-icon :name="options[1].iconName" />
      </div>
    </template>
  </q-btn-toggle>
</template>

<script setup>
import { VIcon } from '@integrity/base-ui/src/index.js';
import { computed, onMounted, useAttrs } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  options: { type: Array, default: () => [] },
  align: { type: String, default: 'center' },
});

const emit = defineEmits(['update:modelValue']);

defineOptions({
  inheritAttrs: false,
});

const attrs = useAttrs();

const classes = computed(() => [
  'switcher',
  {
    [`switcher--text-${props.align}`]: props.align,
  },
]);

const computedAttrs = computed(() => ({
  disable: attrs.disable,
  spread: attrs.spread,
  textColor: 'dark-1',
  toggleColor: 'dark-1',
  toggleTextColor: 'white',
  ripple: false,
  rounded: true,
  unelevated: true,
  noCaps: true,
}));

const updateValue = (val) => {
  emit('update:modelValue', val);
};

onMounted(() => {
  if (!props.modelValue) {
    emit('update:modelValue', props.options[0].value);
  }
});
</script>

<style lang="scss">
.switcher {
  background: $primary-text-20;
  color: $primary-text;
  border-radius: 12px;
  padding: 4px;
  height: 52px;
  font-family: Golos, sans-serif;

  &.row.inline {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
  }

  &--text-left .q-btn__content {
    margin-right: auto;
  }

  &--text-right .q-btn__content {
    margin-left: auto;
  }

  .switcher__item-icon {
    order: -1;
  }

  &.q-btn-group--spread {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .q-btn.q-btn-item {
    display: flex;
    gap: 12px;
    flex: 1;
    border-radius: 8px;
    padding: 8px 16px;
    align-items: center;
    font-family: Golos, sans-serif;
  }

  .q-btn__content {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.24px;
    gap: 12px;
  }

  .q-focus-helper {
    display: none;
  }
}
</style>
