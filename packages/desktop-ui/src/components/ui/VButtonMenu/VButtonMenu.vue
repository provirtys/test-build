<template>
  <v-button
    class="v-button-menu"
    :class="classList"
    icon="dots-horizontal"
    size="xxs"
    :icon-size="dense ? 12 : 14"
    border-radius="4px"
    color="secondary"
    fit-width
  >
    <template #menu>
      <q-menu v-model="menuOpen" anchor="bottom right" self="top right" :offset="[0, 4]">
        <v-list :items="menuItemsComputed"/>
      </q-menu>
    </template>
  </v-button>
</template>

<script setup lang="ts">
import { VButton } from '@base';
import { computed, ref } from 'vue';
import { VList } from '@';
import type { VButtonMenuProps } from './VButtonMenu.types';

const props = defineProps<VButtonMenuProps>();

const menuOpen = ref(false);

const menuItemsComputed = computed(() =>
  props.items?.map((item) => ({
    ...item,
    handler: () => {
      menuOpen.value = false;
      if (item.handler) {
        item.handler();
      }
    },
  })),
);

const classList = computed(() => ({
  'v-button-menu--dense': props.dense,
}));
</script>

<style scoped lang="scss">
.v-button-menu {
  width: 40px;
  height: 40px;
  justify-content: center;

  &--dense {
    width: 30px;
    height: 30px;
  }
}
</style>