<template>
  <v-card class="sticker-template-card-detail" title="Общая информация" :menu-items="menuList">
    <v-description-list
      class="sticker-template-card-detail__list"
      :items="descriptionList"
      term-font-size="16px"
      definition-font-size="16px"
      inline content-inline
      item-gap="8px"
      content-gap="24px"
      font-weight="normal"
    />
    <vue-flow
      class="sticker-template-card-detail__image-container"
      v-model:nodes="nodes"
      fit-view-on-init
      :min-zoom="0.7"
      :max-zoom="3"
    >
      <Background pattern-color="#e9e9e9" :gap="10" :size="4"/>
      <template #node-image>
        <img class="sticker-template-card-detail__image" :src="base64Image"
             :alt="name"/>
      </template>
    </vue-flow>
  </v-card>
</template>

<script setup lang="ts">
import { VDescriptionList, VDescriptionListItem } from '@base';
import { Background } from '@vue-flow/background';
import { type Node, VueFlow } from '@vue-flow/core';
import { computed, ref } from 'vue';
import { VCard, VListItem } from '@';
import type { StickerTemplateCardDetailEmits, StickerTemplateCardDetailProps } from './StickerTemplateCardDetail.types';
import '@vue-flow/core/dist/style.css';

const props = defineProps<StickerTemplateCardDetailProps>();
const emit = defineEmits<StickerTemplateCardDetailEmits>();

const descriptionList = computed<VDescriptionListItem[]>(() => [
  {
    term: 'Название',
    definition: props.name,
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

const nodes = ref<Node[]>([
  {
    id: '1',
    type: 'image',
    position: { x: 250, y: 5 },
    draggable: false,
  },
]);
</script>

<style scoped lang="scss">
.sticker-template-card-detail {

  &__image-container {
    height: 220px;
  }

  &__image {
    height: 190px;
  }

  &__list {
    margin-bottom: 20px;
  }
}
</style>