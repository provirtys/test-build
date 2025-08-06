<template>
  <div class="code-item">
    <v-icon v-if="iconName" class="code-item__status" :name="iconName"/>
    <span class="code-item__label">{{ label }}</span>
    <button v-if="cancelable" class="code-item__cancel-btn" @click="cancelHandler">Отменить</button>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from '@base';
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
    default: '',
  },
  status: {
    type: String,
    required: false,
    default: '',
    validator: (val) => ['', 'new', 'deleted'].includes(val),
  },
  cancelable: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(['onCancel']);

const iconName = computed(() => {
  switch (props.status) {
    case 'new':
      return 'plus';
    case 'deleted':
      return 'minus';
    default:
      return '';
  }
});

const cancelHandler = () => {
  emit('onCancel');
};
</script>

<style scoped lang="scss">
.code-item {
  display: flex;
  align-items: center;
  background: $light-gray-70;
  border-radius: 8px;
  @include fontAdaptive($font-size-p2, 1.2, 500, 0.01em);
  padding: 12px;

  &__status {
    color: $dark-gray-85;
    margin-right: 9px;
  }

  &__label {
    margin-right: auto;
    color: $dark-gray-70;
  }

  &__cancel-btn {
    color: $dark-gray;
    background: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>