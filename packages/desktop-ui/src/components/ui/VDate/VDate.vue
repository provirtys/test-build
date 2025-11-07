<template>
  <div class="v-date">
    <q-date
      class="v-date"
      v-bind="bindingProps"
      v-model="modelValue"
    >
      <template v-if="$slots.default" #default>
        <slot/>
      </template>
    </q-date>
  </div>
</template>

<script setup lang="ts">
import langRu from 'quasar/lang/ru';
import { computed } from 'vue';
import type { QDateLocale, VDateProps, VDateSlots } from './VDate.types';

const modelValue = defineModel();

const props = withDefaults(defineProps<VDateProps>(), {
  minimal: true,
  mask: 'DD-MM-YYYY',
  locale: () =>
    (Object.keys(langRu.date) as (keyof QDateLocale)[]).reduce((res, key) => {
      if (['days', 'daysShort', 'months', 'monthsShort'].includes(key)) {
        res[key] = langRu.date[key];
      }
      return res;
    }, {} as QDateLocale),
  firstDayOfWeek: 1,
});

defineSlots<VDateSlots>();

const bindingProps = computed<VDateProps>(() => props);
</script>

<style scoped lang="scss">
.v-date {
  :deep(.q-date) {
    width: 228px;
    min-width: 228px;

    .q-date__calendar {
      min-height: unset;
    }

    .q-date__view {
      padding: 4px;
    }

    .q-date__navigation {
      height: 33px;
      margin-bottom: 8px;
      color: $dark-gray-70;
      font-family: VelaSans, sans-serif;
      display: grid;
      grid-template-columns: 1fr auto auto 1fr;
      grid-auto-flow: column;
    }

    .q-date__arrow {
      color: $primary-text;
    }

    .q-date__arrow + .q-date__arrow {
      background-color: crimson;
      display: none;

      ~ .q-date__arrow {
        background-color: blue;
        display: none;
      }
    }

    :not(.q-date__arrow) + .q-date__arrow {
      order: 1;
      justify-content: flex-end;
    }

    .q-date__calendar-weekdays {
      border-bottom: 1px solid $light-gray;
      height: 24px;
      margin-bottom: 8px;

      > div {
        opacity: 1;
        width: auto !important;
      }
    }

    .q-date__calendar-days {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;

      .q-date__calendar-item {

        &--fill {
          @include font(Golos, $font-size-p4, 1.2, 500);
          color: $primary-text-10;
          visibility: visible;
        }

        .q-btn__content {
          @include font(Golos, $font-size-p4, 1.2, 500);
        }
      }
    }

    .q-date__calendar-days-container {
      min-height: unset;
    }

    .q-date__calendar-item {
      @include font(VelaSans, $font-size-p5, 1, 500);
      color: $dark-gray-70;
      flex-basis: 28px;
      width: 28px !important;
      height: 33px !important;

      button {
        border-radius: 4px;
      }
    }
  }
}
</style>