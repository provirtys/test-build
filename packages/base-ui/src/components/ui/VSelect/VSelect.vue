<template>
  <div class="v-select" :class="classList">
    <div class="v-select__outside">
      <v-icon v-if="required" name="asterisk" size="10" class="text-primary"/>
      <p v-if="outsideLabel" class="v-select__outside-label">{{ outsideLabel }}</p>
    </div>
    <q-select v-bind="props" :options="optionsToShow" ref="selectRef" :popup-content-class="popupContentClass">
      <template v-if="useSearch" #before-options>
        <div class="v-select__search-container">
          <v-input class="v-select__search-input" v-model="searchValue" outlined dense placeholder="Поиск"
                   color="primary-text-40">
            <template #prepend>
              <v-icon class="text-primary-text" name="search" size="12"/>
            </template>
          </v-input>
        </div>
        <q-item v-if="optionsToShow?.length === 0">
          <q-item-section class="text-grey">
            Нет результатов
          </q-item-section>
        </q-item>
      </template>
      <template v-slot:selected-item="scope">
        <q-item-label class="">{{ scope.opt.label }} <span v-if="scope.opt.labelLight">{{ scope.opt.labelLight }}</span>
        </q-item-label>
      </template>
      <template #option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section>
            <q-item-label class="">{{ scope.opt.label }} <span v-if="scope.opt.labelLight" class="text-dark-gray-55">{{
                scope.opt.labelLight
              }}</span></q-item-label>
          </q-item-section>
        </q-item>
      </template>
      <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
        <slot :name="name" v-bind="slotData"/>
      </template>
    </q-select>
  </div>
</template>

<script setup lang="ts">
import { VIcon, VInput } from '@base';
import { QSelect } from 'quasar';
import { computed, ref } from 'vue';
import type { VSelectProps, VSelectSlots } from '@/components/ui/VSelect/VSelect.types';

const props = withDefaults(defineProps<VSelectProps>(), {
  outlined: true,
  labelColor: 'dark-gray-55',
  dense: true,
  color: 'primary-text',
});

defineSlots<VSelectSlots>();

const searchValue = ref('');
const selectRef = ref<InstanceType<typeof QSelect> | null>(null);

const classList = computed(() => ({
  'v-select--static-label': props.staticLabel,
  'v-select--has-value': props.modelValue,
}));

const optionsToShow = computed(() => {
  const res = props.options?.filter((o) => o.label.toLowerCase().includes(searchValue.value.toLowerCase()));

  if (res?.length === 0) {
    return [
      {
        label: 'Нет результатов',
        value: null,
        disable: true,
      },
    ];
  }
  return res;
});

const popupContentClass = computed(() => {
  let res = 'v-select__menu';
  if (props.optionsDense) {
    res += ' v-select__menu--options-dense';
  }

  return res;
});
</script>

<style lang="scss" scoped>

.v-select {

  &--static-label {
    :deep(.q-field__label) {
      transform: unset;
    }

    :deep(.q-field--labeled) {
      .q-field__control-container {
        padding-top: 0;
      }

      .q-field__native {
        padding-bottom: 0;
      }
    }

    &.v-select--has-value {
      :deep(.q-field__label) {
        display: none;
      }
    }
  }

  &__outside {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 4px;
  }

  &__outside-label {
    @include font(VelaSans, $font-size-p4, 1, 400);
    color: $dark-gray-70;
    margin: 0;
  }

  &__search-container {
    padding: 8px;
    border-bottom: 1px solid $light-gray;
    position: sticky;
    top: 0;
    background: white;
    z-index: 1;

    :deep(.q-field__control), :deep(.q-field__prepend) {
      height: 30px;
    }
  }

  &__search-input {

    :deep(.q-field) {
      padding-bottom: 0;
    }

    :deep(.q-field__control:after) {
      border-width: 1px;
    }
  }

  :deep(.q-field__control:after) {
    border-width: 1px;
  }

  :deep(.q-field__label), :deep(.q-item__label) {
    font-size: 16px;
  }

  :deep(.q-select__dropdown-icon) {
    scale: 0.7;
    width: 14px;
  }
}

:global(.v-select__menu) {
  max-height: 250px;
}

:global(.v-select__menu .q-item) {
  font-weight: 500;
}

:global(.v-select__menu--options-dense .q-item) {
  padding: 8px;
  min-height: 30px;
}

:global(.v-select__menu--options-dense .q-item__label) {
  line-height: 1 !important;
}
</style>
