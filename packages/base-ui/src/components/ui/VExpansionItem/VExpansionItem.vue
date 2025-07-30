<template>
  <q-expansion-item class="v-expansion-item" :class="classList" dense-toggle>
    <template
      v-if="$slots.header"
      #header
    >
      <slot name="header"/>
    </template>
    <template
      v-if="$slots.default"
      #default
    >
      <slot name="default"/>
    </template>
  </q-expansion-item>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  noPaddings: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const classList = computed(() => ({
  'v-expansion-item--no-paddings': props.noPaddings,
}));
</script>

<style lang="scss" scoped>
.v-expansion-item {

  &--no-paddings {

    :deep(.q-expansion-item__container > .q-item) {
      padding-inline: 0;
    }
  }

  :deep(.q-item__label) {
    color: $primary-text-70;
    @include fontAdaptive($font-size-p2, 20px, 500, 0.01em);
  }

  :deep(.q-focus-helper) {
    display: none;
  }
}
</style>
