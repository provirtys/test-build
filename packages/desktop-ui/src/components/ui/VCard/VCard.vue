<template>
  <div class="v-card" :class="classList">
    <h3 v-if="title" class="v-card__title">{{ title }}</h3>
    <div v-if="$slots.default" class="v-card__content">
      <slot/>
    </div>
      <v-button
        v-if="menuItemsComputed && menuItemsComputed.length"
        class="v-card__menu-btn"
        icon="dots-horizontal"
        height="xxs"
        :icon-size="16"
        fit-width
        border-radius="4px"
        color="secondary"
      >
        <template #menu>
          <q-menu class="button-menu" v-model="menuOpen" anchor="bottom right" self="top right" :offset="[0, 4]">
            <v-list :items="menuItemsComputed"/>
          </q-menu>
        </template>
      </v-button>
  </div>
</template>

<script setup lang="ts">
import { VButton } from '@base';
import { computed, ref } from 'vue';
import type { VCardProps } from '@/components/ui/VCard/VCard.types';
import { VList } from '@/components/ui/VList';

const props = withDefaults(defineProps<VCardProps>(), {
  stretch: true,
  paddingX: '20px',
  paddingY: '20px',
});

const menuOpen = ref(false);

const classList = computed(() => ({
  'v-card--stretch': props.stretch,
  [`bg-${props.color}-10`]: props.color,
  'v-card--flex': props.isFlex,
}));

const menuItemsComputed = computed(() =>
  props.menuItems?.map((item) => ({
    ...item,
    handler: () => {
      menuOpen.value = false;
      if (item.handler) {
        item.handler();
      }
    },
  })),
);
</script>

<style scoped lang="scss">
.v-card {
  padding-inline: v-bind(paddingX);
  padding-block: v-bind(paddingY);
  background-color: $light-gray-40;
  border-radius: 8px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  &--stretch {
    width: 100%;
  }

  &--flex {
    .v-card__content {
      display: flex;
      align-items: center;
    }
  }

  &__title {
    @include font(Golos, $font-size-p1, 1, 500);
    color: $dark-gray-70;
  }

  &__menu-btn {
    position: absolute;
    top: 4px;
    right: 4px;
    height: 40px;
  }
}
</style>