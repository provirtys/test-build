<template>
  <MainLayout>
    <template #main>
      <div class="image-container" @dblclick="toggleSidebar">
        <img src="@assets/images/aggregation.png"/>
      </div>
    </template>
    <template #sidebar-top>
      <h2 class="task-name" :class="titleClasses">Вода Артезианская 5 литров</h2>
      <v-description-list
        :items="aggregationStatisticsList"
        inline
        :is-light="hasError"
        align-center
      >
        <template #inPackage>
          <numeric-ratio
            :value="inPackageStatistics.current"
            :secondary-value="inPackageError > 0 ? inPackageError : null"
            :total="inPackageStatistics.total"
            :is-light="hasError"
          />
        </template>
      </v-description-list>
    </template>
    <template #sidebar-bottom>
      <template v-if="hasError">
        <v-alert
          text="Не все коды подтверждены"
          color="error"
          is-background-white
        />
        <p class="alert-description">Печатать код неполной упаковки</p>
      </template>
      <v-button
        text-alignment="left"
        icon="finish-aggregation"
        icon-position="right"
        icon-size="30"
        enable-hold
      >
        Подтвердить код неполной упаковки
      </v-button>
    </template>
  </MainLayout>
</template>

<script setup>
import { VAlert } from '@integrity/base-ui/src/components/ui/VAlert/index.js';
import { MainLayout, NumericRatio, VButton, VDescriptionList } from '@tablet';
import { storeToRefs } from 'pinia';
import { computed, onMounted, watch } from 'vue';
import { useMainStore } from '@/stores/index.js';

const { sidebarHasError, isFullscreen, currentPage, headerTitle } = storeToRefs(useMainStore());

const props = defineProps({
  inPackageCurrent: {
    type: Number,
    default: 0,
    required: false,
  },
  inPackageError: {
    type: Number,
    default: 0,
    required: false,
  },
  inPackageTotal: {
    type: Number,
    default: 0,
    required: false,
  },
  codesTotal: {
    type: Number,
    default: 0,
    required: false,
  },
  inQueue: {
    type: Number,
    default: 0,
    required: false,
  },
  packagesTotal: {
    type: Number,
    default: 0,
    required: false,
  },
  hasError: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const aggregationStatisticsList = computed(() => [
  {
    term: 'В упаковке',
    slot: 'inPackage',
  },
  {
    term: 'Всего кодов маркировки',
    definition: props.codesTotal,
  },
  {
    term: 'В очереди',
    definition: props.inQueue,
  },
  {
    term: 'Всего упаковок',
    definition: props.packagesTotal,
  },
]);

const inPackageStatistics = computed(() => ({
  current: props.inPackageCurrent,
  error: props.inPackageError,
  total: props.inPackageTotal,
}));

const titleClasses = computed(() => ({
  'task-name--light': props.hasError,
}));

const toggleSidebar = () => {
  isFullscreen.value = !isFullscreen.value;
};

watch(
  () => props.hasError,
  (val) => {
    sidebarHasError.value = val;
  },
  {
    immediate: true,
  },
);

onMounted(() => {
  currentPage.value = 'aggregation';
  headerTitle.value = 'Вода Артезианская 5 литров';
});
</script>

<style lang="scss" scoped>
.task-name {
  @include font('Golos', $font-size-p1, 1.5, 500, -0.02em);
  color: $dark-gray;
  margin-bottom: 8px;

  &--light {
    color: $light-gray-40;
  }
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}

.alert-description {
  @include font('Golos', $font-size-p4, 1.3, 400);
  margin-bottom: 28px;
  color: $light-gray-40;
}

:deep(.v-description-list__definition) {
  min-width: 110px;
}

:deep(.v-alert) {
  margin-bottom: 16px;
}
</style>