<template>
  <v-table :rows="rows" :columns="columns"/>
</template>

<script setup lang="ts">
import { VTable } from '@base';
import type { VTableProps } from '@base/components/ui/VTable/VTable.types';

withDefaults(defineProps<VTableProps>(), {
  rows: () => [],
  columns: () => [
    {
      label: 'Атрибут',
      align: 'left',
      name: 'name',
      field: 'name',
    },
    {
      label: 'Значение',
      align: 'left',
      name: 'value',
      field: 'value',
    },
  ],
});
</script>
