<template>
  <MainLayout :header-status="headerStatus" :header-action="headerAction" title="Вода Артезианская 5 литров">
    <template #main>
      <table-attributes :rows="taskDetailRows"/>
    </template>
    <template #sidebar-top>
      <v-description-list class="task-statistics" :items="sideList"/>
      <v-button
        icon-right="cleaning"
        icon-size="28"
        size="sm"
        text-alignment="left"
        color="secondary"
        enable-hold
      >
        Сбросить статистику
      </v-button>
    </template>
    <template #sidebar-bottom>
      <v-alert class="task-alert" text="Сверьте информацию перед началом выполнения"/>
      <v-button
        icon-right="aggregation"
        :icon-size="27"
        text-alignment="left"
        enable-hold
        once
        @action="openAggregationPage"
      >Начать упаковку
      </v-button>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import { VAlert, VButton, VDescriptionList, type VDescriptionListItem } from '@integrity/base-ui';
import { navigateTo } from '@integrity/shared/utils';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import type { StatusBarActionProp, StatusBarStatusProp } from '@';
import { MainLayout, TableAttributes } from '@';
import { taskDetailRows } from '@/mocks/tasks.js';
import { useMainStore } from '@/stores';

const { isStatusReady } = storeToRefs(useMainStore());

const headerStatus = computed<StatusBarStatusProp>(() => ({
  type: isStatusReady ? 'success' : 'error',
  sync: true,
  active: false,
}));

const headerAction: StatusBarActionProp = {
  type: 'back',
  fn: () => navigateTo('/?path=/docs/pages-tasklistpage--docs'),
};

const sideList: VDescriptionListItem[] = [
  {
    term: 'Всего кодов маркировки',
    definition: '145',
  },
  {
    term: 'Всего упаковок',
    definition: '130',
  },
];

const openAggregationPage = () => navigateTo('/?path=/docs/pages-aggregationpage--docs');
</script>

<style lang="scss" scoped>
.task-statistics {
  margin-bottom: 20px;
}

.task-alert {
  margin-bottom: 20px;
}
</style>