<template>
  <v-table :rows="rows" :columns="columns"/>
</template>

<script setup>
import { VTable } from '@base';

const props = defineProps({
  rows: {
    type: Array,
    default: () => [],
  },
});

const columns = [
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
];
</script>
