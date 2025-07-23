<template>
  <q-table
      class="v-table"
      row-key="name"
      flat
      virtual-scroll
      hide-pagination
      :rows="rows"
      :columns="columns"
      :rows-per-page-options="[0]"
      :no-data-label="t('storybook.table.noData')"
      :table-row-class-fn="() => ['q-tr--no-hover']"
  >
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </q-table>
</template>

<script setup>
import { setupI18n } from '@base/i18n.js';
import { QTable } from 'quasar';

const { t } = setupI18n();
const props = defineProps({
  rows: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>

.v-table {
  font-family: 'Golos',sans-serif;
  padding: 20px;
  border-radius: 8px;

  :deep(thead tr) {
    height: 43px;
  }

  :deep(tbody td) {
    height: 59px;
    color: $dark-gray;
    @include fontAdaptive(18px, 1.5, 400);
    letter-spacing: -0.02em;
    padding: 20px 12px 12px;
  }

  :deep(th) {
    color: $dark-gray-55;
    @include fontAdaptive(16px, 1.2, 400);
    letter-spacing: -0.02em;
    padding: 12px;
    vertical-align: baseline;
  }

  :deep(.q-table__bottom) {
    display: flex;
    justify-content: center;
    font-size: $font-size-p4;
    color: #909399;
  }

  //перенос слов на следующую строку
  .move-word {
    white-space: pre-wrap !important;
    word-break: break-all;
  }

  //скрыть текст многоточием
  .truncate-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 50px;
  }
}

</style>
