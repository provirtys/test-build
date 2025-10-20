<template>
  <v-card class="box-template-card-detail" title="Общая информация" :menu-items="menuList">
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
  </v-card>
</template>

<script setup lang="ts">
import { VDescriptionList, VDescriptionListItem } from '@base';
import { computed } from 'vue';
import { InfoGrid, VCard, VListItem } from '@';
import type { BoxTemplateCardDetailEmits, BoxTemplateCardDetailProps } from './BoxTemplateCardDetail.types';

const props = defineProps<BoxTemplateCardDetailProps>();

const emit = defineEmits<BoxTemplateCardDetailEmits>();

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
    },
  },
  {
    icon: 'archive',
    label: 'Экспортировать',
    handler: () => {
      emit('export');
    },
  },
  {
    icon: 'trash',
    iconColor: 'primary',
    label: 'Удалить',
    topDivider: true,
    handler: () => {
      emit('delete');
    },
  },
]);
</script>

<style scoped lang="scss">
.box-template-card-detail {

  &__list {
    margin-bottom: 20px;
  }
}
</style>