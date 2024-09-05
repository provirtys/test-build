<template>
  <q-toolbar class="text-table-text q-mb-sm">
    <q-icon
        name="sym_o_refresh"
        :color="'table-text'"
        class="cursor-pointer"
        size="30px"
    >
      <q-tooltip class="bg-table-text">
        {{ t('storybook.table.update') }}
      </q-tooltip>
    </q-icon>
    <q-toolbar-title>{{nameTable}}</q-toolbar-title>
  </q-toolbar>

    <q-table
        class="no-box-shadow admin-table"
        title=""
        :rows="filteredRows"
        :columns="columns"
        row-key="id"
        virtual-scroll
        v-model:pagination="pagination"
        :rows-per-page-options="[0]"
        :card-style="{ color: 'var(secondary)' }"
        :no-data-label="t('storybook.table.noData')"
        hide-pagination
      >
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            {{ getStatus(props.value) }}
          </q-td>
        </template>
        <template v-slot:body-cell-updatedAt="props">
          <q-td :props="props">
            {{ props.value.toLocaleString('RU-ru') }}
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn
              dense
              round
              flat
              color="primary"
              @click="chooseRowToDelete(props)"
              icon="sym_o_close"
              size="16px"
            ></q-btn>
          </q-td>
        </template>
      </q-table>
</template>

<script setup>
import { computed } from 'vue'
import { setupI18n } from '../i18n.js'

const { t } = setupI18n()

let props = defineProps({
  /** Значение строк*/
  rows: { type: Array, default: () => [] },
  /** Значение колонок*/
  columns: { type: Array, default: () => [] },
  /** Название таблицы*/
  nameTable: {type: String, default: ''}
})

const filteredRows = computed(() => {
    return props.rows
})

function getStatus (val) {
  switch (val) {
    case 'new':
      return t('storybook.table.new')
    case 'cancel':
      return t('storybook.table.canceled')
    case 'labeling':
      return t('storybook.table.labeling')
    case 'ready':
      return t('storybook.table.ready')
    default:
      return val
  }
}

function chooseRowToDelete (props) {
    const index = filteredRows.value.findIndex(el => el.id === props.row.id)
    filteredRows.value.splice(index, 1)
}
</script>

<style lang="scss">
.dark-text {
  color: $dark-gray;
  font-size: $font-size-p4 !important;
}

.table-header {
  font-size: $font-size-p4 !important;
  color: $dark-gray-85;
}

.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.admin-table tr:nth-child(2n) {
    background: $light-gray-55;
}
.bg-table-text{
  background: $dark-gray;
}

.q-table th, .q-table td {
  padding: 7px $s-2 !important;
}
</style>
