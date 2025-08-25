<template>
  <div class="card-selector" :class="classList">
    <v-card v-for="item in items" :key="item.title" class="card-selector__item" :bg-color @click="() => onSelect(item)">
      <div v-if="item.image" class="card-selector__image-container">
        <img class="card-selector__item-image" :src="item.image" :alt="item.title"/>
      </div>
      <div v-if="item.title" class="card-selector__item-title">{{ item.title }}</div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { VCard } from '@';
import {
  CardSelectorEmits,
  CardSelectorItem,
  CardSelectorProps,
} from '@/components/Blocks/CardSelector/CardSelector.types';

const props = withDefaults(defineProps<CardSelectorProps>(), {
  bigFont: false,
  colsCount: 1,
  itemPaddingX: '16px',
  itemPaddingY: '16px',
  bgColor: 'gray',
});

const emit = defineEmits<CardSelectorEmits>();

const classList = computed(() => ({
  'card-selector--big-font': props.bigFont,
}));

const onSelect = (item: CardSelectorItem) => {
  emit('select', item.id);
};
</script>

<style scoped lang="scss">
.card-selector {
  height: 100%;
  display: grid;
  gap: 12px;
  @include fontAdaptive($font-size-p1, 20px, 500, 0.01em);
  grid-template-columns: repeat(v-bind(colsCount), 1fr);
  grid-auto-rows: 1fr;

  &--big-font {
    font-size: $font-size-h6;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    padding-inline: v-bind(itemPaddingX);
    padding-block: v-bind(itemPaddingY);
    cursor: pointer;
  }

  &__image-container {
    text-align: center;
    flex-grow: 1;
    display: grid;
    place-items: center;
    max-width: 75%;
    margin-inline: auto;

    img {
      max-width: 100%;
    }
  }
}
</style>