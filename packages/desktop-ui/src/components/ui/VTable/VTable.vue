<template>
  <q-table class="v-table" :columns :rows flat @request="onRequest" :pagination="pagination">
    <template #header-cell="props">
      <q-th :props="props" class="v-table__th" :class="getThClassesByCol(props.col)">
        {{ props.col.label }}
        <!-- Поиск -->
        <template v-if="props.col.searchable">
          <span class="v-table__th-icon">
            <v-icon name="search" size="11"/>
          </span>
          <q-menu class="q-pa-sm" v-model="menuStates[props.col.name]">
            <v-input class="search-input" v-model="searchFilters[props.col.name]" outlined dense hide-bottom-space
                     autofocus @change="() => onSearchSubmit(props.col.name)">
              <template #append>
                <v-icon class="search-icon" name="search" size="14" @click="() => onSearchSubmit(props.col.name)"
                        v-close-popup/>
              </template>
            </v-input>
          </q-menu>
        </template>
        <!-- Фильтрация -->
        <template v-else-if="props.col.filterable">
          <span class="v-table__th-icon">
            <v-icon name="filter" size="11"/>
          </span>
          <q-menu v-model="menuStates[props.col.name]">
            <div class="filter-menu">
              <q-list class="filter-menu__list">
                <q-item v-for="item in props.col.filters" :key="item.id">
                  <q-checkbox v-model="item.value" :label="item.label" color="primary-text" size="xs"
                              checked-icon="svguse:#icon-checkbox-short-filled"
                              unchecked-icon="svguse:#icon-checkbox-short"/>
                </q-item>
              </q-list>
              <button class="filter-menu__clear" @click="() => onFilterClear(props.col)">Очистить</button>
            </div>
          </q-menu>
        </template>
        <!-- Сортировка -->
        <template v-else-if="props.col.sortable">
          <span class="v-table__th-icon">
            <v-icon name="sort" size="11"/>
          </span>
        </template>
      </q-th>
    </template>

    <template #pagination="props">
      <div class="v-table__pagination">
        <v-button class="v-table__pagination-btn" icon="arrow-back" :icon-size="16" fit-width color="secondary"
                  @action="props.prevPage"/>
        <v-button class="v-table__pagination-btn" icon="arrow" :icon-size="16" fit-width color="secondary"
                  @action="props.nextPage"/>
      </div>
    </template>

    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData"/>
    </template>
  </q-table>
</template>
<script setup lang="ts">
import { VButton, VIcon, VInput } from '@base';
import { QTableProps } from 'quasar';
import { onMounted, reactive, ref } from 'vue';
import type { VTableColumn, VTableEmits, VTableProps, VTableSlots } from '@/components/ui/VTable/VTable.types';

const props = withDefaults(defineProps<VTableProps>(), {
  columns: () => [],
  rows: () => [],
});

const emit = defineEmits<VTableEmits>();
defineSlots<VTableSlots>();

const pagination = ref<NonNullable<QTableProps['pagination']>>({
  sortBy: undefined,
  descending: false,
  page: 1,
  rowsPerPage: 10,
  rowsNumber: 0,
});

const searchFilters = reactive<Record<string, string>>({});
const menuStates = reactive<Record<string, boolean>>({});

const getThClassesByCol = (col: VTableColumn) => ({
  'v-table__th--active':
    pagination.value.sortBy === col.field ||
    menuStates[col.name] ||
    searchFilters[col.name] ||
    col.filters?.find((f) => f.value),
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

const onSearchSubmit = (colName: string) => {
  menuStates[colName] = false;
  emit('onSearchUpdate', searchFilters);
};

const onFilterClear = (column: VTableColumn) => {
  menuStates[column.name] = false;
  column.filters?.forEach((f) => {
    f.value = false;
  });
};

onMounted(() => {
  props.columns.forEach((col) => {
    if (col.searchable) {
      searchFilters[col.name] = '';
    }
  });
});
</script>

<style scoped lang="scss">
.v-table {
  background-color: transparent;
  font-family: VelaSans, sans-serif;
  color: $dark-gray-70;

  .v-table__th {
    &:hover, &--active {
      color: $primary-text;

      .v-table__th-icon {
        color: $primary-text;
      }
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

  &__pagination {
    display: flex;
    gap: 12px;
  }

  &__pagination-btn {
    padding: 12px;
    height: 40px;
  }
}

:deep(.q-table) {
  border-spacing: 0 8px;

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

  tbody tr:hover {
    background-color: $primary-text-15;
  }
}

:deep(.search-input) {
  @include font(VelaSans, $font-size-p4, 1, 400);

  .q-field__control {
    border-radius: 4px !important;
    height: 30px;
  }

  .q-field__append {
    height: unset;
    color: $primary-text;
  }

  .q-field__native {
    padding-block: 8px;
    color: $primary-text;
  }

  .search-icon {
    cursor: pointer;
  }
}

.filter-menu {

  &__list {
    padding-bottom: 4px;
    margin-bottom: 4px;
    border-bottom: 1px solid $light-gray;

    :deep(.q-item) {
      padding: 2px 22px 2px 0;
      @include font(Golos, $font-size-p4, 1, 500);
      color: $primary-text;
      min-height: 30px;

      .q-checkbox:not(.disabled) .q-checkbox__inner:before {
        content: none;
      }
    }
  }

  &__clear {
    background-color: unset;
    border: none;
    height: 30px;
    @include font(Golos, $font-size-p4, 1, 500);
    padding: 8px;
    cursor: pointer;
    width: 100%;
    text-align: left;
    color: $primary-text;
  }
}
</style>