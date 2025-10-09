<template>
    <div class="line-info">
      <v-card class="line-info__card" title="Общая информация">
        <v-description-list
          :items="descriptionList"
          term-font-size="16px"
          definition-font-size="16px"
          inline content-inline
          item-gap="8px"
          content-gap="24px"
          font-weight="normal"/>
        <v-button
          class="line-info__menu-btn"
          icon="dots-horizontal"
          height="xxs"
          :icon-size="16"
          fit-width
          border-radius="4px"
          color="secondary"
        >
      <template #menu>
        <q-menu class="button-menu" v-model="menuOpen" anchor="bottom right" self="top right" :offset="[0, 4]">
          <v-list :items="menuList"/>
        </q-menu>
      </template>
    </v-button>
      </v-card>
       <v-table
         class="modules-table"
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
import { VButton, VDescriptionList, type VDescriptionListItem } from '@base';
import { computed, ref } from 'vue';
import { ModuleItem, VCard, VList, VListItem, VTable, VTableEmitsRequest, type VTableProps } from '@';
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
  },
  {
    label: 'Название',
    name: 'name',
    field: 'name',
    align: 'left',
    searchable: true,
  },
];

const pagination = ref<NonNullable<VTableProps['pagination']>>({
  page: 1,
  rowsPerPage: 5,
  rowsNumber: 100,
  filterBy: {},
  searchBy: {},
});

const menuOpen = ref(false);

const menuList = computed<VListItem[]>(() => [
  {
    icon: 'pencil',
    label: 'Редактировать',
    handler: () => {
      emit('edit');
      menuOpen.value = false;
    },
  },
  {
    icon: 'trash',
    iconColor: 'primary',
    label: 'Удалить',
    topDivider: true,
    handler: () => {
      emit('delete');
      menuOpen.value = false;
    },
  },
]);

const onRequest = (data: VTableEmitsRequest) => {
  emit('navigate', data);
};
</script>

<style scoped lang="scss">
.line-info {
  position: relative;

  &__menu-btn {
    position: absolute;
    top: 4px;
    right: 4px;
    height: 40px;
  }
}
</style>