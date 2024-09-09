<script setup>
import { setupI18n } from '../i18n.js';
import { QTable } from 'quasar';
import 'quasar/dist/quasar.css';

const { t } = setupI18n();
let props = defineProps({
  /** Значение строк*/
  rows: {
    type: Array,
    default: () => [],
  },
  /** Значение колонок*/
  columns: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="height-table">
    <div class="full-height">
      <q-table
        class="no-box-shadow my-table"
        title=""
        :rows="props.rows"
        :columns="props.columns"
        row-key="name"
        virtual-scroll
        v-model:pagination="pagination"
        :rows-per-page-options="[0]"
        :table-header-style="{ color: 'var(--q-primary)' }"
        :card-style="{ color: 'var(secondary)' }"
        :no-data-label="t('storybook.table.noData')"
        hide-pagination
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/css/main.scss';

//стили для надписи пустой таблицы
.q-table__bottom {
  display: flex;
  justify-content: center;
  //48px - высота header-ячейки в таблице, элемент занимает все пространство, кроме высоты верхней ячейки
  height: calc(100% - $l-2);

  font-size: $font-size-p4;
  color: #909399;
}

//Заполняет цветом всю высоту экрана
.height-table {
  height: 100%;
  background: #fff;
  border-radius: $d-0;
}

.q-table tr {
  width: 100%;
}

.q-table th,
.q-table td {
  padding: $s-1 10px;
  font-size: $font-size-p4;
}

.q-table tbody td {
  font-size: $font-size-p4;

  //перенос слов на следующую строку работает переписывает все
  //white-space: pre-wrap; word-break: break-all;
}

//стиль для таблицы q-table
.my-table {
  height: 100%;
  max-height: 100%;
  background: #fff;
}

.base-table-header {
  color: #909399;
  text-align: left;
  font-weight: normal;
}

.base-table-row {
  color: #606266;
  font-family: Ubuntu-regular, serif;
}

.text-medium {
  font-family: Ubuntu-medium, serif;
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
</style>
