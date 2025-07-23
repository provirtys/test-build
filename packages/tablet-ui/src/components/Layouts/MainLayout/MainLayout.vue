<template>
  <q-layout class="main-layout">
    <div class="main-layout__header">
      <slot name="header"/>
      <status-bar action="logout"/>
    </div>
    <div class="main-layout__main">
      <div class="main-layout__content">
        <slot name="main"/>
      </div>
      <div class="main-layout__sidebar">
        <slot name="sidebar-top"/>
        <div class="main-layout__sidebar-bottom">
          <slot name="sidebar-bottom"/>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import { StatusBar } from '@tablet';
</script>

<style lang="scss" scoped>
.main-layout {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: $light-gray-55;
  height: 100vh;

  &.no-padding {
    padding: 0;
  }

  &__main {
    display: grid;
    grid-template-columns: 1fr 380px;
    transition: grid-template-columns 0.3s ease-in-out;
    overflow: auto;
    flex-grow: 1;
  }

  &__content {
    padding: 20px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__sidebar {
    padding: 20px;
    border-left: 1px solid $light-gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__sidebar-bottom {
    margin-top: auto;
  }
}
</style>
