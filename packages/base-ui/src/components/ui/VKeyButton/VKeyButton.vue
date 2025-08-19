<template>
  <button class="v-key-button" :class="classList" @click="pressed">
    <v-icon v-if="value === 'back'" name="backspace" size="33"/>
    <span v-else class="v-key-button__text">{{ value }}</span>
  </button>
</template>

<script setup lang="ts">
import { VIcon } from '@base';
import type { VKeyButtonEmits, VKeyButtonProps } from '@base/components/ui/VKeyButton/VKeyButton.types';
import { computed } from 'vue';

const props = withDefaults(defineProps<VKeyButtonProps>(), {
  value: '',
  size: 'lg',
});

const emit = defineEmits<VKeyButtonEmits>();

const classList = computed(() => [`v-key-button--${props.size}`]);

function pressed() {
  emit('pressed', props.value);
}
</script>

<style lang="scss" scoped>
.v-key-button {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $primary-text-20;
  border-radius: $d-0;
  box-shadow: 0 1px 1px rgba($dark-gray, 0.3);
  outline: none !important;
  border: none;
  color: $dark-gray;
  @include font('Golos', $font-size-p1, 24px, 500, -0.24px);

  &:active {
    top: 1px;
    box-shadow: none;
  }

  &--sm {
    min-width: $xl-4;
    min-height: $l-1;
  }

  &--md {
    min-width: $xxxl-3;
    min-height: $xl-1;
  }

  &--lg {
    min-width: $b-4;
    min-height: $xl-4;
  }

  &__text {
    @include font('Golos', $s-3, 24px, 500, -0.24px);
  }
}
</style>
