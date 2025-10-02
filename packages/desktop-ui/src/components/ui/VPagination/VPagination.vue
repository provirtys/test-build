<template>
  <div v-if="pagination" class="v-pagination">
    <v-button
      class="v-pagination__btn v-pagination__btn--lg"
      icon="arrow-back"
      :icon-size="16"
      fit-width
      color="secondary"
      :disabled="pagination.page === 1"
      @action="onPrev"/>
    <v-button
      v-if="pagination.page !== 1"
      class="v-pagination__btn"
      fit-width color="plane"
      @action="onFirst"
    >
      1
    </v-button>
    <v-button
      v-if="pagination.page - 1 > 1"
      class="v-pagination__btn v-pagination-dots"
      fit-width color="plane"
      @action="() => goToPage(Math.floor((1+pagination.page)/2))"
    >
      ...
    </v-button>
    <v-button
      class="v-pagination__btn v-pagination__btn--current"
      fit-width
      color="secondary"
    >
      {{ pagination.page }}
    </v-button>
    <v-button
      v-if="totalPages - pagination.page > 1"
      class="v-pagination__btn v-pagination-dots"
      fit-width
      color="plane"
      @action="() => goToPage(Math.floor((totalPages+pagination.page)/2))"
    >
      ...
    </v-button>
    <v-button
      v-if="pagination.page !== totalPages"
      class="v-pagination__btn"
      fit-width color="plane"
      @action="onLast"
    >
      {{ totalPages }}
    </v-button>
    <v-button
      class="v-pagination__btn v-pagination__btn--lg"
      icon="arrow"
      :icon-size="16"
      fit-width
      color="secondary"
      :disabled="pagination.page >= totalPages"
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
    emit('request', pagination.value.page - 1);
  }
};

const onNext = () => {
  if (pagination.value) {
    emit('request', pagination.value.page + 1);
  }
};

const onFirst = () => {
  if (pagination.value) {
    emit('request', 1);
  }
};

const onLast = () => {
  if (pagination.value) {
    emit('request', totalPages.value);
  }
};

const goToPage = (pageNumber: number) => {
  if (pagination.value) {
    pagination.value.page = pageNumber;
  }
};
</script>

<style scoped lang="scss">
.v-pagination {
  display: flex;
  align-items: center;
  gap: 12px;

  .v-pagination__btn {

    padding: 0;
    width: 32px;
    height: 30px;
    @include font(Golos, $font-size-p4, 1, 500);

    &--lg {
      padding: 12px;
      height: 40px;
      width: 40px;
    }

    &--current {
      background-color: $primary-text-5;
      cursor: default;
    }
  }
}
</style>