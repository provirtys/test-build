<template>
  <q-table
    class="v-table"
    v-bind="bindingProps"
    v-model:pagination="pagination"
    ref="tableRef"
  >
    <template #header-cell="props">
      <q-th
        :props="props"
        class="v-table__th"
        :class="getThClassesByCol(props.col)"
      >
        {{ props.col.label }}
        <!-- Поиск -->
        <template v-if="props.col.searchable">
          <span class="v-table__th-icon">
            <v-icon
              name="search"
              size="10"
            />
          </span>
          <q-menu
            class="q-pa-sm"
            v-model="menuStates[props.col.name]"
          >
            <v-input
              class="search-input"
              v-model="pagination!.searchBy![props.col.name]"
              outlined
              dense
              hide-bottom-space
              autofocus
              @change="() => onSearchSubmit(props.col.name)"
            >
              <template #append>
                <v-icon
                  class="cursor-pointer text-primary-text-40 q-mr-sm"
                  :class="pagination!.searchBy![props.col.name].length ? '' : 'invisible'"
                  name="close"
                  size="14"
                  @click="pagination!.searchBy![props.col.name] = ''"
                />
                <v-icon
                  class="cursor-pointer"
                  name="search"
                  size="14"
                  v-close-popup
                  @click="() => onSearchSubmit(props.col.name)"
                />
              </template>
            </v-input>
          </q-menu>
        </template>
        <!-- Фильтрация -->
        <template v-else-if="props.col.filter?.active">
          <span class="v-table__th-icon">
            <v-icon
              name="filter"
              size="10"
            />
          </span>
          <q-menu v-model="menuStates[props.col.name]">
            <div class="filter-menu">
              <q-list class="filter-menu__list">
                <q-item
                  v-for="item in props.col.filter.list"
                  :key="item.id"
                >
                  <q-checkbox
                    v-model="item.value"
                    :label="item.label"
                    class="full-width"
                    color="primary-text"
                    size="xs"
                    checked-icon="svguse:#icon-checkbox-short-filled"
                    unchecked-icon="svguse:#icon-checkbox-short"
                    @update:modelValue="() => onFilterItemUpdate(props.col)"
                  />
                </q-item>
              </q-list>
              <button
                class="filter-menu__clear"
                @click="() => onFilterClear(props.col)"
              >Очистить</button>
            </div>
          </q-menu>
        </template>
        <!-- Фильтрация по дате -->
        <template v-else-if="props.col.dateFilter?.active">
          <span class="v-table__th-icon">
            <v-icon
              name="calendar-today"
              size="10"
            />
          </span>
          <q-menu v-model="menuStates[props.col.name]">
            <div class="dates-wrapper flex">
              <v-date v-model="pagination!.dateFilter!.from" flat/>
              <v-date
                v-if="props.col.dateFilter?.multiple"
                v-model="pagination!.dateFilter!.to"
                flat
              />
            </div>
          </q-menu>
        </template>
        <!-- Сортировка -->
        <template v-else-if="props.col.sortable">
          <span class="v-table__th-icon">
            <v-icon
              name="sort"
              size="10"
            />
          </span>
        </template>
      </q-th>
    </template>

    <template #bottom="props">
      <div class="v-table__pagination">
        <v-button
          class="v-table__pagination-btn v-table__pagination-btn--lg"
          icon="arrow-back"
          size="sm"
          fit-width
          color="secondary"
          :disable="props.pagination.page === 1"
          @action="props.prevPage"
        />
        <v-button
          v-if="!props.isFirstPage"
          class="v-table__pagination-btn"
          size="xs"
          fit-width
          color="plain"
          @action="props.firstPage()"
        >
          1
        </v-button>
        <v-button
          v-if="props.pagination.page - 1 > 1"
          class="v-table__pagination-btn v-table__pagination-dots"
          fit-width
          size="xs"
          color="plain"
          disable
        >
          ...
        </v-button>
        <v-button
          class="v-table__pagination-btn v-table__current-page"
          fit-width
          size="xs"
          color="secondary"
        >
          {{ props.pagination.page }}
        </v-button>
        <v-button
          v-if="props.pagesNumber - props.pagination.page > 1"
          class="v-table__pagination-btn v-table__pagination-dots"
          fit-width
          size="xs"
          color="plain"
          disable
        >
          ...
        </v-button>
        <v-button
          v-if="!props.isLastPage"
          class="v-table__pagination-btn"
          fit-width
          size="xs"
          color="plain"
          @action="props.lastPage()"
        >
          {{ props.pagesNumber }}
        </v-button>
        <v-button
          class="v-table__pagination-btn v-table__pagination-btn--lg"
          icon="arrow"
          size="sm"
          fit-width
          color="secondary"
          :disable="props.isLastPage"
          @action="props.nextPage"
        />
      </div>
    </template>

    <template #no-data>
      <v-pagination :model-value="{ page: 1, totalEl: 1, elPerPage: 1 }"/>
    </template>

    <template
      v-for="(_, name) in $slots"
      :key="name"
      #[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </q-table>
</template>
<script setup lang="ts">
import { VIcon, VInput } from '@base';
import { QTable, QTableProps } from 'quasar';
import { computed, nextTick, onMounted, reactive, ref } from 'vue';
import { VButton } from '@';
import { VDate } from '@/components/ui/VDate';
import { VPagination } from '@/components/ui/VPagination';
import type {
  VTableColumn,
  VTableEmits,
  VTableEmitsRequest,
  VTablePagination,
  VTableProps,
  VTableSlots,
} from '@/components/ui/VTable/VTable.types';

const pagination = defineModel<VTablePagination>('pagination');

const props = withDefaults(defineProps<VTableProps>(), {
  columns: () => [],
  rows: () => [],
});

const emit = defineEmits<VTableEmits>();

defineSlots<VTableSlots>();

const menuStates = reactive<Record<string, boolean>>({});

const tableRef = ref<InstanceType<typeof QTable> | null>(null);

const tableFilter = computed(() => {
  if (!pagination.value || pagination.value.rowsNumber) return null;

  return JSON.stringify({
    ...pagination.value.searchBy,
    ...pagination.value.filterBy,
    ...pagination.value.dateFilter,
  });
});

const bindingProps = computed<QTableProps>(() => {
  return {
    ...props,
    rows: props.rows,
    columns: props.columns,
    flat: true,
    filter: tableFilter.value,
    filterMethod: tableFilterMethod,
    onRequest,
    onRowClick: (...args) => emit('rowClick', ...args),
  };
});

const tableFilterMethod = (rows: typeof props.rows, filter: string) => {
  if (!pagination.value) return rows;
  const filterObj = JSON.parse(filter);

  if (pagination.value.rowsNumber || !Object.keys(filterObj).length) return rows;

  return rows.filter((row) => {
    for (const filterKey of Object.keys(filterObj)) {
      const needleCol = props.columns.find((c) => c.field === filterKey);
      if (!needleCol) return true;

      if (needleCol.searchable && filterObj[filterKey]) {
        if (typeof row[filterKey] === 'object') {
          return Object.keys(row[filterKey]).some((field) =>
            row[filterKey][field].toLowerCase().includes(filterObj[filterKey].toLowerCase()),
          );
        } else if (!row[filterKey].toLowerCase().includes(filterObj[filterKey].toLowerCase())) {
          return false;
        }
      }

      if (needleCol.filter?.active && !filterObj[filterKey].includes(row[filterKey]['id'])) {
        return false;
      }
    }
    return true;
  });
};

const getThClassesByCol = (col: VTableColumn) => ({
  'v-table__th--active':
    pagination.value?.sortBy === col.field ||
    menuStates[col.name] ||
    pagination.value?.searchBy?.[col.name] ||
    col.filter?.list?.find((f) => f.value),
  'v-table__th--sort-descending': pagination.value?.sortBy === col.field && pagination.value?.descending,
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
  column.filter?.list?.forEach((f) => {
    f.value = false;
    delete pagination.value?.filterBy?.[column.name];
  });
  tableRef.value?.requestServerInteraction();
};

const onFilterItemUpdate = (column: VTableColumn) => {
  if (column.filter?.active && pagination.value?.filterBy) {
    pagination.value.filterBy[column.name] = column.filter?.list.filter((f) => f.value).map((f) => f.id);

    if (!pagination.value.filterBy[column.name].length) {
      delete pagination.value.filterBy[column.name];
    }
  }
  tableRef.value?.requestServerInteraction();
};

onMounted(async () => {
  if (!pagination.value) return;

  await nextTick();
  props.columns.forEach((col) => {
    if (pagination.value) {
      if (col.searchable) {
        if (!pagination.value.searchBy) {
          pagination.value.searchBy = {};
        }
        pagination.value.searchBy[col.name] = '';
        menuStates[col.name] = false;
      }

      if (col.dateFilter?.active && !pagination.value.dateFilter) {
        pagination.value.dateFilter = {
          from: '',
          to: '',
        };
        menuStates[col.name] = false;
      }

      if (col.filter?.active) {
        menuStates[col.name] = false;
      }
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

    &:hover,
    &--active {
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
    color: $dark-gray-85;
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
    border: unset;
    height: unset;
    padding: 4px 8px 15px;

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

.dates-wrapper {
  padding: 8px;

  :deep(.v-date:nth-child(2)) {
    border-left: 1px solid $light-gray;
  }
}
</style>