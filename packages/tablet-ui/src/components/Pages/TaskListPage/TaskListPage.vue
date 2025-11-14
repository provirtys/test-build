<template>
  <MainLayout :header-status="headerStatus" :header-action="headerAction" title="Список заданий">
    <template #main>
      <div class="task-search">
        <v-input v-model="searchValue" placeholder="Поиск" filled bg-color="white" dense>
          <template v-slot:prepend>
            <q-icon name="search" size="16px"/>
          </template>
        </v-input>
      </div>
      <task-list :tasks="tasksWithGTIN" always-show-backgrounds :is-vertical="true" @on-task-select="selectTask"/>
    </template>
    <template #sidebar-bottom>
      <v-button
        enable-hold
        once
        border-radius="0"
        icon-right="aggregation"
        text-alignment="left"
        :disable="buttonDisabled"
        :icon-size="27"
        @action="openTaskDetailPage"
      >
        Выбрать задачу
      </v-button>
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import { VButton } from '@base';
import { navigateTo } from '@base/utils/navigation';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { MainLayout, TaskList } from '@';
import { tasksWithGTIN } from '@/mocks/tasks';
import { useMainStore } from '@/stores';

const { isStatusReady } = storeToRefs(useMainStore());

const searchValue = ref('');
const selectedTaskID = ref('');

const buttonDisabled = computed(() => selectedTaskID.value === null);

const headerStatus = computed(() => ({
  type: isStatusReady ? 'success' : 'error',
  sync: true,
  active: false,
}));

const headerAction = {
  type: 'logout',
  fn: () => {},
};

const selectTask = (id: string) => {
  selectedTaskID.value = id;
};

const openTaskDetailPage = () => {
  navigateTo('/?path=/docs/pages-taskdetailpage--docs');
};
</script>

<style lang="scss" scoped>
.task-search {
  margin-bottom: 20px;
}

</style>