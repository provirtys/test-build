<template>
  <aside class="main-sidebar" :class="classList">
    <nav class="main-sidebar__nav">
      <ul class="main-sidebar__list">
        <li
          v-for="item in items"
          :key="item.label"
          class="main-sidebar__item"
          :class="{'main-sidebar__item--active': item.active}"
          @click="item.handler"
        >
          <div class="main-sidebar__item-icon">
            <v-icon v-if="item.icon" :name="item.icon" size="24"/>
            <span v-if="item.notificationsCount && item.notificationsCount > 0"
                  class="main-sidebar__item-notifications">{{ item.notificationsCount }}</span>
          </div>
          <span class="main-sidebar__item-label">{{ item.label }}</span>
        </li>
      </ul>
    </nav>
    <div class="main-sidebar__bottom">
      <div v-if="!isDense">
        <v-description-list :items="computedBottomDescriptionList" v-bind="descriptionListProps"/>
      </div>
      <v-icon v-if="!isDense" class="text-primary" name="integrity-logo" height="19" width="108"/>
      <v-button class="main-sidebar__toggler" icon="arrow-menu-close" :icon-size="12" height="xxs" color="secondary"
                @action="toggleDense"/>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { VButton, VDescriptionList, VDescriptionListProps, VIcon } from '@base';
import { computed, ref } from 'vue';
import { MainSidebarProps } from '@/components/Layouts/MainSidebar/MainSidebar.types';

const props = defineProps<MainSidebarProps>();

const isDense = ref(false);

const classList = computed(() => ({
  'main-sidebar--dense': isDense.value,
}));

const computedBottomDescriptionList = computed(() =>
  props.bottomDescriptionList?.map((item) => ({
    ...item,
    termClasses: ['text-primary-text-70', 'q-pl-xs'],
    definitionClasses: 'text-dark-gray-55',
  })),
);

const toggleDense = () => {
  isDense.value = !isDense.value;
};

const descriptionListProps = computed<Omit<VDescriptionListProps, 'items'>>(() => ({
  termFontSize: '12px',
  definitionFontSize: '12px',
  inline: true,
  contentInline: true,
  itemGap: '4px',
  contentGap: '8px',
}));
</script>

<style scoped lang="scss">
.main-sidebar {
  background-color: $light-gray-70;
  width: 160px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  transition: width 0.3s ease;
  overflow: hidden;

  &--dense {
    width: 48px;

    .main-sidebar__item {
      height: 53px;
    }

    .main-sidebar__item-label {
      display: none;
    }

    .main-sidebar__toggler {
      transform: rotate(180deg);
    }
  }

  &__item {
    display: flex;
    gap: 12px;
    padding: 12px;
    justify-content: flex-start;
    align-items: center;
    height: 53px;
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

  &__item-icon {
    position: relative;
  }

  &__item-notifications {
    position: absolute;
    top: -4px;
    left: 100%;
    transform: translate(-7px, -50%);
    height: 16px;
    padding-inline: 5.25px;
    border-radius: 16px;
    background-color: $info;
    color: $secondary;
    @include font(Golos, $font-size-p6, 1, 500);
    display: flex;
    align-items: center;
  }

  &__bottom {
    padding: 0 8px 8px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: auto;
    align-items: center;

    :deep(.q-btn__content) {
      justify-content: center;
    }
  }

  .main-sidebar__toggler {
    height: 30px;
    border-radius: 4px;
  }
}
</style>