<template>
  <MainLayout>
    <template #main>
      <table-attributes :rows="taskDetailRows"/>
    </template>
    <template #sidebar-top>
      <v-description-list class="task-statistics" :items="sideList"/>
      <v-button
        icon="cleaning"
        icon-size="28"
        icon-position="right"
        height="sm"
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
        icon="aggregation"
        icon-size="27"
        icon-position="right"
        text-alignment="left"
        enable-hold
        once
        @action="openAggregationPage"
      >Начать упаковку
      </v-button>
    </template>
  </MainLayout>
</template>

<script setup>
import { navigateTo } from '@integrity/base-ui/src/utils/navigation.js';
import { taskDetailRows } from '@mocks/tasks.js';
import { MainLayout, TableAttributes, VAlert, VButton, VDescriptionList } from '@tablet';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useMainStore } from '@/stores/index.js';

const { currentPage, headerTitle } = storeToRefs(useMainStore());

const sideList = [
  {
    term: 'Всего кодов маркировки',
    definition: 145,
  },
  {
    term: 'Всего упаковок',
    definition: 130,
  },
];

const openAggregationPage = () => navigateTo('/?path=/docs/pages-aggregationpage--docs');

onMounted(() => {
  currentPage.value = 'detail';
  headerTitle.value = 'Вода Артезианская 5 литров';
});
</script>

<style lang="scss" scoped>
.task-statistics {
  margin-bottom: 20px;
}

.task-alert {
  margin-bottom: 20px;
}
</style>