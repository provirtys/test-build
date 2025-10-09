<template>
  <v-card class="box-template-card-detail" title="Общая информация">
    <v-description-list
      class="box-template-card-detail__list"
      :items="descriptionList"
      term-font-size="16px"
      definition-font-size="16px"
      inline content-inline
      item-gap="8px"
      content-gap="24px"
      font-weight="normal"
    />
    <info-grid class="box-template-card-detail__grid" :x :y height="212px"/>
    <v-button
      class="box-template-card-detail__menu-btn"
      icon="dots-horizontal"
      height="xxs"
      :icon-size="16"
      fit-width
      border-radius="4px"
      color="secondary"
    >
      <template #menu>
        <q-menu class="button-menu" v-model="menuOpen" anchor="bottom right" self="top right" :offset="[0, 4]">
          <v-list :items="menuList"/>
        </q-menu>
      </template>
    </v-button>
  </v-card>
</template>

<script setup lang="ts">
import { VButton, VDescriptionList, VDescriptionListItem } from '@base';
import { computed, ref } from 'vue';
import { InfoGrid, VCard, VList, VListItem } from '@';
import type { BoxTemplateCardDetailEmits, BoxTemplateCardDetailProps } from './BoxTemplateCardDetail.types';

const props = defineProps<BoxTemplateCardDetailProps>();

const emit = defineEmits<BoxTemplateCardDetailEmits>();

const menuOpen = ref(false);

const descriptionList = computed<VDescriptionListItem[]>(() => [
  {
    term: 'Название',
    definition: props.name,
  },
  {
    term: 'Кол-во',
    definition: +props.x * +props.y * (props.layers ?? 1),
  },
  {
    term: 'Матрица',
    definition: `${props.x}x${props.y}`,
  },
  {
    term: 'Слоев',
    definition: props.layers ?? 1,
  },
]);

const menuList = computed<VListItem[]>(() => [
  {
    icon: 'pencil',
    label: 'Редактировать',
    handler: () => {
      emit('edit');
      menuOpen.value = false;
    },
  },
  {
    icon: 'archive',
    label: 'Экспортировать',
    handler: () => {
      emit('export');
      menuOpen.value = false;
    },
  },
  {
    icon: 'trash',
    iconColor: 'primary',
    label: 'Удалить',
    topDivider: true,
    handler: () => {
      emit('delete');
      menuOpen.value = false;
    },
  },
]);
</script>

<style scoped lang="scss">
.box-template-card-detail {
  position: relative;

  &__list {
    margin-bottom: 20px;
  }

  &__menu-btn {
    position: absolute;
    top: 4px;
    right: 4px;
    height: 40px;
  }
}

:global(.button-menu) {
  min-width: 200px;
}
</style>