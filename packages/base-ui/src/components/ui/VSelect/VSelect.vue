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
        <template v-if="useChips">
          <q-chip v-if="scope.index < 3" class="v-select__chip" removable square color="primary-text-5"
                  text-color="dark-gray" icon-remove="close" @remove="() => unselectOption(scope.opt.value)">
            {{ scope.opt.label }}
            <span v-if="scope.opt.labelLight">{{ scope.opt.labelLight }}</span>
          </q-chip>
          <q-chip v-if="Array.isArray(modelValue) && modelValue.length > 3 && scope.index === modelValue.length - 1"
                  class="v-select__chip" removable square color="primary-text-5" text-color="dark-gray"
                  icon-remove="close" @remove="unselectLastOptions">
            +{{ modelValue.length - 3 }}
          </q-chip>
        </template>
        <q-item-label v-else>{{ scope.opt.label }} <span v-if="scope.opt.labelLight">{{ scope.opt.labelLight }}</span>
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
import type { VSelectEmits, VSelectProps, VSelectSlots } from '@/components/ui/VSelect/VSelect.types';

const props = withDefaults(defineProps<VSelectProps>(), {
  outlined: true,
  labelColor: 'dark-gray-55',
  dense: true,
  color: 'primary-text',
});

const emit = defineEmits<VSelectEmits>();

defineSlots<VSelectSlots>();

const searchValue = ref('');
const selectRef = ref<InstanceType<typeof QSelect> | null>(null);

const classList = computed(() => ({
  'v-select--static-label': props.staticLabel,
  'v-select--has-value': props.modelValue,
  'v-select--chips': props.useChips,
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

const unselectOption = (val: string) => {
  if (Array.isArray(props.modelValue)) {
    emit(
      'update:modelValue',
      props.modelValue.filter((opt) => {
        if (typeof opt === 'object') {
          return opt.value !== val;
        }

        return opt !== val;
      }),
    );
  } else if (props.modelValue.value === val) {
    emit('update:modelValue', null);
  }
};

const unselectLastOptions = () => {
  emit('update:modelValue', props.modelValue.slice(0, 3));
};
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

  &--chips {
    :deep(.q-field__native) {
      display: flex;
      gap: 4px;
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
    margin-top: 0;
  }

  :deep(.q-select__dropdown-icon) {
    scale: 0.7;
    width: 14px;
  }


  &__chip {
    @include fontAdaptive($font-size-p4, 1, 500);
    padding: 4px;
    margin: 0;

    :deep(.q-icon) {
      margin: 0 0 0 4px;
      font-size: 14px;
    }

    span {
      margin-left: 8px;
      color: $dark-gray-55;
    }
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
