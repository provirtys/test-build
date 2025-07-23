<template>
  <MainLayout>
    <template #main>
      <table-attributes :rows="taskDetailRows"/>
    </template>
    <template #sidebar-top>
      <h2 class="task-name">Вода Артезианская 5 литров</h2>
    </template>
    <template #sidebar-bottom>

    </template>
  </MainLayout>
</template>

<script setup>
import { taskDetailRows } from '@mocks/tasks.js';
import { MainLayout, TableAttributes } from '@tablet';
</script>

<style lang="scss" scoped>
.task-name {
  @include font('Golos', $font-size-p1, 1.5, 500, -0.02em);
  color: $dark-gray;
  margin-bottom: 8px;
}

</style>