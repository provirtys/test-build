<template>
    <div class="line-info">
      <v-card class="line-info__card" title="Общая информация" :menu-items="menuList">
        <v-description-list
          :items="descriptionList"
          term-font-size="16px"
          definition-font-size="16px"
          inline content-inline
          item-gap="8px"
          content-gap="24px"
          font-weight="normal"/>
      </v-card>
       <v-table
         :columns
         :rows="modules"
         v-model:pagination="pagination"
         @request="onRequest"
       >
        <template #body-cell-ip="props">
          <q-td style="width: 140px" :props="props">{{ props.row.ip }}</q-td>
        </template>
        <template #body-cell-name="props">
          <q-td class="text-primary-text" :props="props">
            <b class="text-weight-medium">{{ props.row.name }}</b>
          </q-td>
        </template>
      </v-table>
    </div>
</template>

<script setup lang="ts">
import { VDescriptionList, type VDescriptionListItem } from '@base';
import { computed, ref } from 'vue';
import { ModuleItem, VCard, VListItem, VTable, VTableEmitsRequest, VTablePagination, type VTableProps } from '@';
import type { LineInfoProps, VLineInfoEmits } from './LineInfo.types';

const props = defineProps<LineInfoProps>();

const emit = defineEmits<VLineInfoEmits>();

const descriptionList = computed<VDescriptionListItem[]>(() => [
  {
    term: 'Название',
    definition: props.name,
  },
  {
    term: 'ID',
    definition: props.id,
  },
  {
    term: 'Состояние',
    definition: props.status,
  },
]);

const columns: (VTableProps['columns'][number] & { field: keyof ModuleItem })[] = [
  {
    label: 'IP',
    name: 'ip',
    field: 'ip',
    align: 'left',
    searchable: true,
    style: 'width: 100px; min-width: 100px; max-width: 100px;',
    headerStyle: 'width: 100px; min-width: 100px; max-width: 100px;',
  },
  {
    label: 'Название',
    name: 'name',
    field: 'name',
    align: 'left',
    searchable: true,
  },
];

const pagination = ref<NonNullable<VTablePagination>>({
  page: 1,
  rowsPerPage: 5,
});

const menuList = computed<VListItem[]>(() => [
  {
    icon: 'pencil',
    label: 'Редактировать',
    handler: () => {
      emit('edit');
    },
  },
  {
    icon: 'trash',
    iconColor: 'primary',
    label: 'Удалить',
    topDivider: true,
    handler: () => {
      emit('delete');
    },
  },
]);

const onRequest = (data: VTableEmitsRequest) => {
  emit('navigate', data);
};
</script>

<style scoped lang="scss">
</style>