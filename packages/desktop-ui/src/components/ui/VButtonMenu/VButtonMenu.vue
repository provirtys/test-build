<template>
  <v-button
    class="v-button-menu"
    icon="dots-horizontal"
    height="xxs"
    :icon-size="16"
    border-radius="4px"
    color="secondary"
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

const position = computed(() => (props.positionAbsolute ? 'absolute' : 'relative'));
</script>

<style scoped lang="scss">
.v-button-menu {
  position: v-bind(position);
  top: 4px;
  right: 4px;
  width: 40px;
  height: 40px;
}
</style>