<template>
  <dl class="v-description-list" :class="classList">
    <div v-for="item in items" :key="item.slot || item.term" class="v-description-list__item"
         :class="{'v-description-list__item--inlined': inline && !Array.isArray(item.definition)}">
      <dt class="v-description-list__term" :class="item.termClasses">{{ item.term }}</dt>
      <dd class="v-description-list__definition" :class="item.definitionClasses">
        <template v-if="!Array.isArray(item.definition)">
        <slot :name="item.slot || 'custom'">
          {{ item.definition }}
        </slot>
        </template>
        <template v-else-if="Array.isArray(item.definition)">
          <v-description-list
            :items="item.definition"
            :inline
            :is-light
            :align-center
            :term-font-size
            :definitionFontSize
          />
        </template>
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
  contentInline: false,
  itemGap: '12px',
  contentGap: '20px',
  fontWeight: 'bold',
});

const classList = computed(() => ({
  'v-description-list--inline': props.inline,
  'v-description-list--light': props.isLight,
  'v-description-list--align-centered': props.alignCenter,
  'v-description-list--justify-centered': props.justifyCenter,
  'v-description-list--bordered': props.bordered,
  'v-description-list--content-inline': props.contentInline,
  'v-description-list--font-bold': props.fontWeight,
}));

const bindingFontWeight = computed(() => (props.fontWeight === 'normal' ? 400 : 500));
</script>

<style lang="scss" scoped>
.v-description-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: v-bind(contentGap);

  &--inline {
    .v-description-list__item--inlined {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &--light {
    .v-description-list__term, .v-description-list__definition {
      color: $light-gray-40
    }
  }

  &--justify-centered {
    justify-content: center;
  }

  &--align-centered &__definition {
    text-align: center;
  }

  &--bordered {
    .v-description-list__item:not(:last-child) {
      border-bottom: 1px solid $light-gray;
      padding-bottom: 5px;
    }
  }

  &--content-inline {
    flex-direction: row;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: v-bind(itemGap);
  }

  &__term {
    @include font('Golos', v-bind(termFontSize), 1, v-bind(bindingFontWeight), -0.02em);
    color: $dark-gray-70;
  }

  &__definition {
    @include font('Golos', v-bind(definitionFontSize), 1, v-bind(bindingFontWeight), -0.02em);
    color: $dark-gray;

    .v-description-list__term {
      font-size: smaller;
    }
  }

  .v-description-list {
    padding-left: 20px;
    gap: 12px;
  }
}
</style>
