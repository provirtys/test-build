<template>
  <q-table
    class="v-table"
    :columns
    :rows
    flat
    v-model:pagination="pagination"
    ref="tableRef"
    @request="onRequest"
  >
    <template #header-cell="props">
      <q-th :props="props" class="v-table__th" :class="getThClassesByCol(props.col)">
        {{ props.col.label }}
        <!-- Поиск -->
        <template v-if="props.col.searchable">
          <span class="v-table__th-icon">
            <v-icon name="search" size="11"/>
          </span>
          <q-menu class="q-pa-sm" v-model="menuStates[props.col.name]">
            <v-input
              class="search-input"
              v-model="pagination.searchBy![props.col.name]"
              outlined
              dense
              hide-bottom-space
              autofocus
              @change="() => onSearchSubmit(props.col.name)"
            >
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
                  <q-checkbox
                    v-model="item.value"
                    :label="item.label"
                    color="primary-text"
                    size="xs"
                    checked-icon="svguse:#icon-checkbox-short-filled"
                    unchecked-icon="svguse:#icon-checkbox-short"
                    @update:modelValue="() => onFilterItemUpdate(props.col)"
                  />
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

    <template #bottom="props">
      <div class="v-table__pagination">
        <v-button
          class="v-table__pagination-btn v-table__pagination-btn--lg"
          icon="arrow-back"
          :icon-size="16"
          fit-width color="secondary"
          :disabled="props.pagination.page === 1"
          @action="props.prevPage"
        />
        <v-button
          v-if="!props.isFirstPage"
          class="v-table__pagination-btn"
          fit-width
          color="plane"
          @action="props.firstPage()"
        >
          1
        </v-button>
        <v-button
          v-if=" props.pagination.page - 1 > 1"
          class="v-table__pagination-btn v-table__pagination-dots"
          fit-width color="plane"
          is-disabled
        >
          ...
        </v-button>
        <v-button
          class="v-table__pagination-btn v-table__current-page"
          fit-width
          color="secondary"
          @action="props.prevPage">
          {{ props.pagination.page }}
        </v-button>
        <v-button
          v-if="props.pagesNumber - props.pagination.page > 1"
          class="v-table__pagination-btn v-table__pagination-dots"
          fit-width
          color="plane"
          is-disabled
        >
          ...
        </v-button>
        <v-button
          v-if="!props.isLastPage"
          class="v-table__pagination-btn"
          fit-width
          color="plane"
          @action="props.lastPage()"
        >
          {{ props.pagesNumber }}
        </v-button>
        <v-button
          class="v-table__pagination-btn v-table__pagination-btn--lg"
          icon="arrow"
          :icon-size="16"
          fit-width color="secondary"
          :disabled="props.isLastPage"
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
import { QTable, QTableProps } from 'quasar';
import { onMounted, reactive, ref, watch } from 'vue';
import type {
  VTableColumn,
  VTableEmits,
  VTableEmitsRequest,
  VTablePagination,
  VTableProps,
  VTableSlots,
} from '@/components/ui/VTable/VTable.types';

const props = withDefaults(defineProps<VTableProps>(), {
  columns: () => [],
  rows: () => [],
});

const emit = defineEmits<VTableEmits>();
defineSlots<VTableSlots>();

const tableRef = ref<InstanceType<typeof QTable> | null>(null);

const pagination = defineModel<VTablePagination>('pagination', {
  default: {
    searchBy: '',
    filterBy: '',
  },
});

const menuStates = reactive<Record<string, boolean>>({});

const getThClassesByCol = (col: VTableColumn) => ({
  'v-table__th--active':
    pagination.value.sortBy === col.field ||
    menuStates[col.name] ||
    pagination.value.searchBy?.[col.name] ||
    col.filters?.find((f) => f.value),
  'v-table__th--sort-descending': pagination.value.sortBy === col.field && pagination.value.descending,
});

const onRequest: QTableProps['onRequest'] = (data) => {
  const typedData = data as VTableEmitsRequest;
  pagination.value = { ...typedData.pagination };
  emit('update:pagination', { ...typedData.pagination });
  emit('request', typedData);
};

const onSearchSubmit = (colName: string) => {
  menuStates[colName] = false;
  tableRef.value?.requestServerInteraction();
};

const onFilterClear = (column: VTableColumn) => {
  menuStates[column.name] = false;
  column.filters?.forEach((f) => {
    f.value = false;
    delete pagination.value.filterBy?.[column.name];
  });
  tableRef.value?.requestServerInteraction();
};

const onFilterItemUpdate = (column: VTableColumn) => {
  if (column.filters && pagination.value.filterBy) {
    pagination.value.filterBy[column.name] = column.filters.filter((f) => f.value).map((f) => f.id);
  }
  tableRef.value?.requestServerInteraction();
};

onMounted(() => {
  props.columns.forEach((col) => {
    if (col.searchable && pagination.value.searchBy) {
      pagination.value.searchBy[col.name] = '';
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
    align-items: center;
    gap: 12px;
  }

  .v-table__pagination-btn {
    padding: 0;
    width: 32px;
    height: 30px;
    @include font(Golos, $font-size-p4, 1, 500);

    &:disabled {
      opacity: 0.1 !important;
    }

    &--lg {
      padding: 12px;
      height: 40px;
      width: 40px;
    }
  }

  :deep(.v-table__current-page) {
    background-color: $primary-text-5;
    cursor: default;
  }

  &__pagination-dots {
    opacity: 0.1;
    cursor: default;
  }
}

:deep(.q-table) {
  border-spacing: 0 8px;

  thead tr {
    height: 35px;
  }

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

:deep(.q-table__bottom) {
  margin-left: auto;
  border-top: none;
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