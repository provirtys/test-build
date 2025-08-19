<template>
  <div class="code-list">
    <v-expansion-item no-paddings label="Коды в упаковке" default-opened>
      <div class="code-list__items">
        <code-item v-for="(item, idx) in items" :key="item.id" v-bind="getItemBinding(item)" :cancelable="idx === 0"
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

const onItemCancel = (item: CodeItemProps) => {
  emit('onItemCancel', item.id);
};
</script>

<style scoped lang="scss">
.code-list {

  &__items {
    display: grid;
    gap: 8px;
  }
}
</style>