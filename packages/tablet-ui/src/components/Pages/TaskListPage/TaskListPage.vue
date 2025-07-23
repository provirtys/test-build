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
      >
        Выбрать задачу
      </v-button>
    </template>
  </MainLayout>
</template>

<script setup>
import { MainLayout, TaskList, VButton, VInput } from '@tablet';
import { taskWithGTIN } from '@tablet/mocks/tasks.js';
import { computed, ref } from 'vue';

const searchValue = ref('');
const selectedTaskID = ref(null);

const buttonDisabled = computed(() => {
  if (selectedTaskID.value !== null) return false;

  return true;
});

const selectTask = (id) => {
  selectedTaskID.value = id;
};
</script>

<style lang="scss" scoped>
.task-search {
  margin-bottom: 20px;
}

</style>