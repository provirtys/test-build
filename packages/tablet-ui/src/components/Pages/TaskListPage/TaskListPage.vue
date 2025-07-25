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
      <task-list :tasks="taskWithGTIN" always-show-backgrounds :is-vertical="true" @on-task-select="selectTask"/>
    </template>
    <template #sidebar-bottom>
      <v-button
        enable-hold
        once is-rounded
        icon-position="right"
        icon="aggregation"
        text-alignment="left"
        :is-disabled="buttonDisabled"
        :icon-size="27"
        @action="openTaskDetailPage"
      >
        Выбрать задачу
      </v-button>
    </template>
  </MainLayout>
</template>

<script setup>
import { navigateTo } from '@base/utils/navigation.js';
import { MainLayout, TaskList, VButton, VInput } from '@tablet';
import { taskWithGTIN } from '@tablet/mocks/tasks.js';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import { useMainStore } from '@/stores/index.js';

const { isStatusReady } = storeToRefs(useMainStore());

const searchValue = ref('');
const selectedTaskID = ref(null);

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

const selectTask = (id) => {
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