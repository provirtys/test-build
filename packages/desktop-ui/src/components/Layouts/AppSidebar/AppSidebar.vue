<template>
  <aside class="app-sidebar" :class="classList">
    <nav class="app-sidebar__nav">
      <ul class="app-sidebar__list">
        <li
          v-for="item in items"
          :key="item.label"
          class="app-sidebar__item"
          :class="{'app-sidebar__item--active': item.active}"
          @click="item.handler"
        >
          <v-icon v-if="item.icon" :name="item.icon" size="24"/>
          <span class="app-sidebar__item-label">{{ item.label }}</span>
        </li>
      </ul>
    </nav>
    <div class="app-sidebar__bottom">
      <v-icon v-if="!isDense" class="text-primary" name="integrity-logo" height="15" width="88"/>
      <v-button class="app-sidebar__toggler" icon="arrow-menu-close" :icon-size="12" height="xxs" color="secondary"
                @action="toggleDense"/>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { VButton, VIcon } from '@base';
import { computed, ref } from 'vue';
import { AppSidebarProps } from '@/components/Layouts/AppSidebar/AppSidebar.types';

defineProps<AppSidebarProps>();

const isDense = ref(false);

const classList = computed(() => ({
  'app-sidebar--dense': isDense.value,
}));

const toggleDense = () => {
  isDense.value = !isDense.value;
};
</script>

<style scoped lang="scss">
.app-sidebar {
  background-color: $light-gray-70;
  width: 112px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  transition: width 0.3s ease;

  &--dense {
    width: 52px;

    .app-sidebar__item {
      height: 62px;
    }

    .app-sidebar__item-label {
      display: none;
    }

    .app-sidebar__toggler {
      transform: rotate(180deg);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    height: 92px;
    color: $primary-text-70;
    cursor: pointer;
    transition: height 0.3s ease;

    &--active {
      background-color: $primary-text-10;
      color: $primary-text;
    }
  }

  &__item-label {
    @include font(Golos, $font-size-p3, 1.2, 400);
    color: inherit;
  }

  &__bottom {
    padding: 0 4px 4px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: auto;
    align-items: center;

    :deep(.q-btn__content) {
      justify-content: center;
    }
  }

  .app-sidebar__toggler {
    height: 30px;
    border-radius: 4px;
  }
}
</style>