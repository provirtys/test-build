<template>
  <MainLayout>
    <template #main>
      <div class="task-search">
        <v-input v-model="searchValue" placeholder="Поиск" filled bg-color="white">
          <template v-slot:prepend>
            <q-icon name="search"/>
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
        icon-size="27"
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
import { computed, onMounted, ref } from 'vue';
import { useMainStore } from '@/stores/index.js';

const { currentPage, headerTitle } = storeToRefs(useMainStore());

const searchValue = ref('');
const selectedTaskID = ref(null);

const buttonDisabled = computed(() => {
  if (selectedTaskID.value !== null) return false;

  return true;
});

const selectTask = (id) => {
  selectedTaskID.value = id;
};

const openTaskDetailPage = () => {
  navigateTo('/?path=/docs/pages-taskdetailpage--docs');
};

onMounted(() => {
  currentPage.value = 'list';
  headerTitle.value = 'Список заданий';
});
</script>

<style lang="scss" scoped>
.task-search {
  margin-bottom: 20px;
}

</style>