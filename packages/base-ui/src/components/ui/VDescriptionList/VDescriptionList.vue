<template>
  <dl class="v-description-list" :class="classList">
    <div v-for="item in items" :key="item.slot || item.term" class="v-description-list__item">
      <dt class="v-description-list__term">{{ item.term }}</dt>
      <dd class="v-description-list__definition">
        <slot :name="item.slot || 'custom'">
          {{ item.definition }}
        </slot>
      </dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { VDescriptionListProps } from '@/components/ui/VDescriptionList/VDescriptionList.types';

const props = withDefaults(defineProps<VDescriptionListProps>(), {
  items: () => [],
  inline: false,
  isLight: false,
  alignCenter: false,
  termFontSize: '14px',
  definitionFontSize: '28px',
});

const classList = computed(() => ({
  'v-description-list--inline': props.inline,
  'v-description-list--light': props.isLight,
  'v-description-list--centered': props.alignCenter,
}));
</script>

<style lang="scss" scoped>
.v-description-list {
  display: grid;
  gap: 20px;

  &--inline {
    .v-description-list__item {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      min-height: 40px;
    }
  }

  &--light {
    .v-description-list__term, .v-description-list__definition {
      color: $light-gray-40
    }
  }

  &--centered &__definition {
    text-align: center;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__term {
    @include font('Golos', v-bind(termFontSize), 1, 500, -0.02em);
    color: $dark-gray-70;
  }

  &__definition {
    @include font('Golos', v-bind(definitionFontSize), 1, 500, -0.02em);
    color: $dark-gray;
  }
}
</style>
