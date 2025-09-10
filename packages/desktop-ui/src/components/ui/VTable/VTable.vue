<template>
  <q-table class="v-table" :columns :rows flat @request="onRequest" :pagination="pagination">
    <template #header-cell="props">
      <q-th :props="props" :class="getThClassesByCol(props.col)">
        {{ props.col.label }}
        <span v-if="props.col.searchable || props.col.filterable || props.col.sortable" class="v-table__th-icon">

          <template v-if="props.col.searchable">
            <v-icon name="search" size="11"/>

          </template>
          <template v-else-if="props.col.filterable">
            <v-icon name="filter" size="11"/>
          </template>
          <template v-else-if="props.col.sortable">
            <v-icon name="sort" size="11"/>
          </template>
        </span>
      </q-th>
    </template>

    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData"/>
    </template>
  </q-table>
</template>
<script setup lang="ts">
import { VIcon, type VTableProps } from '@base';
import { QTableProps } from 'quasar';
import { ref } from 'vue';
import { VTableSlots } from '@/components/ui/VTable/VTable.types';

withDefaults(defineProps<VTableProps>(), {
  columns: () => [],
  rows: () => [],
});

defineSlots<VTableSlots>();

const pagination = ref<NonNullable<QTableProps['pagination']>>({
  sortBy: undefined,
  descending: false,
  page: 1,
  rowsPerPage: 10,
  rowsNumber: 0,
});

const getThClassesByCol = (col: any) => ({
  'v-table__th--sort': pagination.value.sortBy === col.field,
  'v-table__th--sort-descending': pagination.value.sortBy === col.field && pagination.value.descending,
});

const onRequest: QTableProps['onRequest'] = ({ pagination: requestPagination }) => {
  if (pagination.value.sortBy === requestPagination.sortBy) {
    if (pagination.value.descending) {
      pagination.value.sortBy = undefined;
      pagination.value.descending = false;
    } else {
      pagination.value.descending = true;
    }
  } else {
    pagination.value = requestPagination;
  }
};
</script>

<style scoped lang="scss">
.v-table {
  background-color: transparent;
  font-family: VelaSans, sans-serif;
  color: $dark-gray-70;

  .v-table__th--sort {
    color: $primary-text;

    .v-table__th-icon {
      color: $primary-text;
    }
  }

  .v-table__th--sort-descending {
    .v-table__th-icon {
      transform: rotate(180deg);
    }
  }

  &__th-icon {
    display: inline-block;
    color: $primary-text-70;
    margin-left: 6px;
  }
}

:deep(.q-table) {

  tr {
    border: unset;
  }

  th {
    @include fontAdaptive($font-size-p4, 1, 400);
    color: $dark-gray-55;
    padding: 8px;

    &:has(.v-table__th-icon) {
      cursor: pointer;
    }

    svg {
      display: inline-flex;
    }
  }

  td {
    @include fontAdaptive($font-size-p3, 1.2, 400);
    vertical-align: baseline;
    padding: 8px;
    border: unset;

    span {
      display: block;
      @include fontAdaptive($font-size-p5, 1.2, 400);
      margin: 0;

      &:first-child {
        margin-top: 4px;
      }
    }
  }

  .q-table__sort-icon {
    display: none;
  }

  tbody tr:nth-child(odd) {
    background-color: $light-gray-70;
  }

  tbody tr:nth-child(even) {
    background-color: transparent;
  }
}
</style>