<template>
  <div class="code-list">
    <v-expansion-item no-paddings :label="label" default-opened :model-value="true">
      <div class="code-list__items">
        <code-item v-for="(item, idx) in items" :key="item.id" v-bind="getItemBinding(item)"
                   :cancelable="getItemCancelable({...item, order: idx})"
                   @on-cancel="() => onItemCancel(item)"/>
      </div>
    </v-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { VExpansionItem } from '@base';
import { CodeItem } from '@';
import type { CodeListEmits, CodeListProps } from '@/components/Blocks/CodeList/CodeList.types';
import type { CodeItemProps } from '@/components/Elements/CodeItem/CodeItem.types';

const props = defineProps<CodeListProps>();

const emit = defineEmits<CodeListEmits>();

const getItemBinding = (item: CodeItemProps): Omit<CodeItemProps, 'cancelable'> => {
  const { cancelable, ...rest } = item;
  return rest;
};

const getItemCancelable = (data: CodeItemProps & { order: number }) => {
  return props.cancelable && data.status === 'new' && data.order === 0;
};

const onItemCancel = (item: CodeItemProps) => {
  if (!props.cancelable) return;

  emit('onItemCancel', item.id);
};
</script>

<style scoped lang="scss">
.code-list {

  &__items {
    display: grid;
    gap: 8px;
  }

  :deep(.q-expansion-item__toggle-icon) {
    color: $primary-text;
  }
}
</style>