<template>
  <q-table
    class="sticky-header-table no-box-shadow base-style"
    title=""
    :rows="props.rows"
    :columns="props.columns"
    row-key="name"
    v-model:pagination="pagination"
    :rows-per-page-options="[0]"
    :table-header-style="{ color: 'var(--q-primary)' }"
    :card-style="{ color: 'var(secondary)' }"
    :no-data-label="t('noData')"
    hide-pagination
  />
  <!--    вариант с пустой табл-->
  <!--    <div v-if="rows.length == 0" class="empty-table">пустая таблица</div>-->
</template>

<script setup>
let props = defineProps({
  /** Значение строк*/
  rows: { type: Array, default: () => [] },
  /** Значение колонок*/
  columns: { type: Array, default: () => [] },
});
</script>

<style lang="scss">
.q-table__bottom--nodata {
  padding-top: $s-3;
}

//Контент таблицы скроллится, заглавие таблицы - header остается на месте
.sticky-header-table {
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    background: $light-gray-40;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
    font-family: Golos UI;
  }

  thead tr:last-child th {
    top: $l-2;
  }

  thead tr:first-child th {
    top: 0;
  }

  tbody {
    scroll-margin-top: $l-2;
  }
}

//стили для надписи пустой таблицы
.q-table__bottom {
  display: flex;
  justify-content: center;
  //48px - высота header-ячейки в таблице, элемент занимает все пространство, кроме высоты верхней ячейки
  height: calc(100% - $l-2);

  font-size: 16px;
  color: $dark-gray-55;
}

//Заполняет цветом всю высоту экрана
.height-table {
  height: 100%;
  background: $light-gray-40;
  border-radius: $d-1;
}

.q-table thead,
.q-table tr,
.q-table th,
.q-table td {
  border-color: $light-gray;
}

.q-table tr {
  width: 100%;
}

.q-table th,
.q-table td {
  font-size: $s-2;
  padding: 14px $s-1;
}

.q-table tbody td {
  font-size: 18px;
  height: 59px;
  font-family: 'Golos UI-medium';
  padding: $s-3 $s-1 $s-1;
}

//стиль для таблицы q-table
.base-style {
  height: fit-content;
  max-height: 100%;
  background: $light-gray-40;

  border-radius: $d-1;
  padding: $s-3;
}

.base-table-header {
  color: $dark-gray-55;
  text-align: left;
}

.base-table-row {
  color: $dark-gray;
}

.gray-text {
  color: $dark-gray-55;
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

//горизонтальный скролл ячейки
.scroll-text {
  white-space: nowrap;
  overflow-x: auto;
  max-width: 50px;
}
</style>
