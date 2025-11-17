<template>
  <div class="status-timeline">
    <template v-for="(item, idx) in items" :key="item.id">
      <div class="status-timeline__item">
        <span class="status-timeline__item-color" :class="`bg-${item.color || 'success'}`"></span>
        <div class="status-timeline__item-info">
          <p class="status-timeline__item-name">{{ item.name }}</p>
          <div v-if="item.links?.length" class="status-timeline__item-links">
            <v-button
              v-for="link in item.links"
              :key="link.href"
              color="secondary"
              size="xs"
              icon-right="download"
              fit-width
              :href="link.href"
              target="_blank"
            >
              {{ link.text }}
            </v-button>
          </div>
          <p class="status-timeline__item-label">{{ item.label }}</p>
        </div>
      </div>
      <span v-if="idx < items.length - 1" class="status-timeline__divider"></span>
    </template>
  </div>
</template>

<script setup lang="ts">
import { VButton } from '@';
import type { StatusTimelineProps } from '@/components/Elements/StatusTimeline/StatusTimeline.types';

defineProps<StatusTimelineProps>();
</script>

<style scoped lang="scss">
.status-timeline {
  display: flex;
  flex-direction: column;

  &__item {
    display: flex;
    align-items: center;
  }

  &__item-color {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    grid-row: span 2;
    margin-right: 10px;
  }

  &__item-info {
    padding-block: 5px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__item-name {
    @include font(VelaSans, $font-size-p3, 1, 500);
    color: $dark-gray;
    margin-bottom: 4px;
  }

  &__item-links {
    display: flex;
    gap: 8px;
    margin-left: 8px;
  }

  &__item-label {
    @include font(VelaSans, $font-size-p5, 1, 400);
    color: $dark-gray-70;
    margin: 0;
    flex: 0 0 100%;
  }

  &__divider {
    width: 0px;
    border-left: 1px solid $dark-gray-40;
    margin-left: 12px;
    flex: 1 1 32px;
  }

  :deep(.v-button) {
    height: 30px;

    .q-btn__content {
      gap: 4px;
    }
  }
}
</style>