<template>
  <div class="gtin-card">
    <div class="gtin-card__container">
      <div class="gtin-card__title">{{ title }}</div>
      <v-button
        class="gtin-card__gtin-btn"
        color="secondary"
        text-alignment="left"
        height="sm"
        icon="arrow-forward-sharp"
        :icon-size="23"
        icon-position="right"
      >
        GTIN: {{ id }}
      </v-button>
      <div class="gtin-card__count-cards">
        <div v-if="showChangesCards" class="gtin-card__changes-cards">
          <v-card :bg-color="isAddingMode ? 'gray' : 'white'">
            <v-description-list :items="[{term: 'Добавлено', definition: `+${addedCodes.length}`}]"/>
          </v-card>
          <v-card :bg-color="!isAddingMode ? 'gray' : 'white'">
            <v-description-list :items="[{term: 'Удалено', definition: `-${removedCodes.length}`}]"/>
          </v-card>
        </div>
        <v-card v-if="movingCodesValue" bg-color="gray">
          <v-description-list :items="[{term: 'Количество изменений', definition: movingCodesValue}]"/>
        </v-card>
        <v-card>
          <v-description-list :items="[{term: 'Количество', definition: codes?.length}]"/>
        </v-card>
      </div>
      <div class="gtin-card__codes" v-if="codesToShow">
        <code-list :items="codesToShow" :label="codesTitle" :cancelable="mode !== 'viewing'"
                   @onItemCancel="removeCode"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VButton } from '@base';
import { VDescriptionList } from '@base/components/ui/VDescriptionList';
import { computed } from 'vue';
import { CodeItemProps, CodeList, VCard } from '@';
import { GTINCardEmits, GTINCardProps } from '@/components/Complexes/GTINCard/GTINCard.types';
import { CodeEl } from '@/types/entity';

const props = defineProps<GTINCardProps>();

const emit = defineEmits<GTINCardEmits>();

const codesTitle = computed(() => {
  if (props.mode === 'filling' || props.mode === 'viewing') return 'Коды в упаковке';

  if (props.mode === 'package-adding') return 'Добавленные коды';

  if (props.mode === 'package-removing') return 'Удаленные коды';

  return 'Перемещенные коды';
});

const movingCodesValue = computed(() => {
  if (props.mode !== 'moving-adding' && props.mode !== 'moving-removing') return;

  return `${props.mode === 'moving-adding' ? '+' : '-'}${removedCodes.value.length}`;
});

const isAddingMode = computed(() => props.mode === 'package-adding');

const showChangesCards = computed(() => props.mode === 'package-adding' || props.mode === 'package-removing');

const removedCodes = computed<CodeItemProps[] | []>(() =>
  initialCodes
    .filter((code) => !props.codes?.find((c) => c.id === code.id))
    .map((code) => ({
      ...code,
      status: 'deleted',
    })),
);

let initialCodes: CodeEl[] = props.codes ? [...props.codes] : [];

const addedCodes = computed<CodeItemProps[]>(
  () =>
    props.codes
      ?.filter((code) => !initialCodes?.find((c) => c.id === code.id))
      .map((code) => ({
        ...code,
        status: 'new',
      })) || [],
);

const codesToShow = computed<CodeItemProps[]>(() => {
  if (!props.codes) return [];

  let res: CodeItemProps[] = [];

  switch (props.mode) {
    case 'filling':
      res = [...initialCodes, ...addedCodes.value];
      break;
    case 'viewing':
      res = [...props.codes];
      break;
    case 'package-adding':
      res = [...addedCodes.value];
      break;
    case 'package-removing':
      res = [...removedCodes.value];
      break;
    case 'moving-removing':
      res = [...removedCodes.value];
      break;
    case 'moving-adding':
      res = removedCodes.value.map((code) => ({
        ...code,
        status: 'new',
      }));
      break;
  }

  return res.reverse();
});

const removeCode = (id: CodeEl['id']) => {
  emit('removeCode', id);
};
</script>

<style scoped lang="scss">
.gtin-card {

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px
  }

  &__title {
    @include fontAdaptive($font-size-h5, 1, 500, 0.01em);
    color: $dark-gray-70;
  }

  &__count-cards {
    display: grid;
    gap: 12px;
  }

  &__changes-cards {
    display: grid;
    gap: 12px;
    grid-auto-flow: column;
  }
}
</style>