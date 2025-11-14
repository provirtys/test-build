<template>
  <div v-if="pagination" class="v-pagination">
    <v-button
      class="v-pagination__btn v-pagination__btn--lg"
      icon="arrow-back"
      fit-width
      color="secondary"
      size="sm"
      :disable="pagination.page === 1"
      border-radius="4px"
      @action="onPrev"/>
    <v-button
      v-if="pagination.page !== 1"
      class="v-pagination__btn"
      fit-width
      color="plain"
      border-radius="4px"
      size="xs"
      @action="onFirst"
    >
      1
    </v-button>
    <v-button
      v-if="pagination.page - 1 > 1"
      class="v-pagination__btn v-pagination__dots"
      fit-width
      color="plain"
      size="xs"
      disable
      border-radius="4px"
    >
      ...
    </v-button>
    <v-button
      class="v-pagination__btn v-pagination__btn--current"
      fit-width
      color="secondary"
      size="xs"
      border-radius="4px"
    >
      {{ pagination.page }}
    </v-button>
    <v-button
      v-if="totalPages - pagination.page > 1"
      class="v-pagination__btn v-pagination__dots"
      fit-width
      color="plain"
      disable
      size="xs"
      border-radius="4px"
    >
      ...
    </v-button>
    <v-button
      v-if="pagination.page !== totalPages"
      class="v-pagination__btn"
      fit-width
      color="plain"
      size="xs"
      border-radius="4px"
      @action="onLast"
    >
      {{ totalPages }}
    </v-button>
    <v-button
      class="v-pagination__btn v-pagination__btn--lg"
      icon="arrow"
      :icon-size="16"
      fit-width
      size="sm"
      color="secondary"
      :disable="pagination.page >= totalPages"
      border-radius="4px"
      @action="onNext"/>
  </div>
</template>

<script setup lang="ts">
import { VButton } from '@base';
import { computed } from 'vue';
import { VPaginationEmits, VPaginationModel } from './VPagination.types';

const pagination = defineModel<VPaginationModel>();

const emit = defineEmits<VPaginationEmits>();

const totalPages = computed(() =>
  pagination.value ? Math.ceil(pagination.value.totalEl / pagination.value.elPerPage) : 0,
);

const onPrev = () => {
  if (pagination.value) {
    emit('navigate', {
      type: 'prev',
      page: pagination.value.page - 1,
    });
  }
};

const onNext = () => {
  if (pagination.value) {
    emit('navigate', {
      type: 'next',
      page: pagination.value.page + 1,
    });
  }
};

const onFirst = () => {
  if (pagination.value) {
    emit('navigate', {
      type: 'first',
      page: 1,
    });
  }
};

const onLast = () => {
  if (pagination.value) {
    emit('navigate', {
      type: 'last',
      page: totalPages.value,
    });
  }
};
</script>

<style scoped lang="scss">
.v-pagination {
  display: flex;
  align-items: center;
  gap: 12px;

  .v-pagination__btn {

    width: 32px;
    @include font(Golos, $font-size-p4, 1, 500);

    &--lg {
      width: 40px;
    }

    &--current {
      background-color: $primary-text-5;
      cursor: default;
    }

    &:disabled {
      opacity: 0.1 !important;
    }
  }

  &__dots {
    cursor: default;
  }
}
</style>