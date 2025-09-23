<template>
  <div class="main-layout">
    <div v-if="$slots.sidebar" class="main-layout__sidebar">
      <slot name="sidebar"/>
    </div>
    <div v-if="$slots.header" class="main-layout__header">
      <slot name="header"/>
    </div>
    <div v-if="$slots.content" class="main-layout__content">
      <slot name="content"/>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.main-layout {
  display: grid;
  grid-template-areas:
    'sidebar header'
    'sidebar content';
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  gap: 32px 24px;
  padding: 12px;
  background-color: $light-gray-55;

  &__sidebar {
    grid-area: sidebar;
  }

  &__header {
    grid-area: header;
    min-height: 49px;
    display: flex;
    align-items: flex-end;
  }

  &__content {
    grid-area: content;
  }
}
</style>