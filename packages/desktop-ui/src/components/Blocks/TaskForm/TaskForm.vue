<template>
  <div class="task-form">
    <q-form ref="formRef" class="task-form__form" @submit="onSubmit">
      <v-card title="Общая информация">
        <v-form-row columns="2">
          <v-input v-bind="getFieldProps('name')" v-model="formData.name"/>
          <v-select v-bind="getFieldProps('gtin')" v-model="formData.gtin"/>
        </v-form-row>
        <v-form-row columns="2">
          <v-input v-bind="getFieldProps('dateStart')" v-model="formData.dateStart"/>
          <v-input v-bind="getFieldProps('timeStart')" v-model="formData.timeStart"/>
        </v-form-row>
        <v-form-row columns="2">
          <v-input v-bind="getFieldProps('total')" v-model="totalValue"/>
          <v-select v-bind="getFieldProps('line')" v-model="formData.line"/>
        </v-form-row>
        <v-form-row columns="2">
          <v-input v-bind="getFieldProps('comment')" v-model="formData.comment"/>
          <v-input v-bind="getFieldProps('privateComment')" v-model="formData.privateComment"/>
        </v-form-row>
      </v-card>
      <v-card title="Сериализация">
        <v-form-row>
          <v-select v-bind="getFieldProps('sticker')" v-model="formData.sticker"/>
        </v-form-row>
      </v-card>
      <v-card title="Агрегация">
        <v-form-row columns="2">
          <v-select v-bind="getFieldProps('box')" v-model="formData.box"/>
          <v-input v-bind="getFieldProps('boxTotal')" v-model="boxTotalValue">
            <template #prepend v-if="boxAlert.show">
              <v-icon class="text-warning" name="alert-triangle" size="16"/>
            </template>
          </v-input>
        </v-form-row>
        <q-field
          v-if="boxAlert.show"
          class="box-alert"
          v-model="boxAlertValue"
          :rules="boxAlertRules"
          no-error-icon
          reactive-rules
        >
          <template #control>
            <v-card color="warning" padding-x="12px" padding-y="12px">
              <v-icon class="text-warning" name="alert-triangle" size="20"/>
              <p class="box-alert__text">{{ boxAlert.text }}
                <span v-if="boxAlert.count" class="text-dark-gray">{{ boxAlert.count }}</span>
              </p>
                <v-checkbox-button
                  v-if="boxAlert.showCheckbox"
                  label="Подтвердить"
                  v-model="boxAlertValue"
                  height="xxs"
                  bg-always-filled
                  fit-width
                  border="4px"
                  border-color="transparent"
                  :rules="[(val: any) => val || 'Тест']"
                />
            </v-card>
          </template>
        </q-field>
      </v-card>
      <div class="task-form__buttons">
        <v-button
          color="secondary"
          text-alignment="left"
          icon="page"
          :icon-size="20"
          icon-position="right"
          :loading="loadingStates?.submitting"
          name="draftBtn"
          type="submit"
        >
          Сохранить как черновик
        </v-button>
        <v-button
          icon="plus"
          text-alignment="left"
          :icon-size="20"
          icon-position="right"
          :loading="loadingStates?.submitting"
          type="submit"
        >
          Создать задачу
        </v-button>
      </div>
    </q-form>
  </div>
</template>
<script setup lang="ts">
import { VButton, VCheckboxButton, VIcon, VInput, VSelect } from '@base';
import { QForm } from 'quasar';
import { computed, reactive, ref, watch } from 'vue';
import { VCard } from '@';
import {
  BoxAlert,
  FormInputKey,
  FormSelectKey,
  TaskFormEmits,
  TaskFormProps,
  TaskItem,
} from '@/components/Blocks/TaskForm/TaskForm.types';
import VFormRow from '@/components/ui/VFormRow/VFormRow.vue';
import { FormInputProps, FormInputSettings, FormSelectProps, FormSelectSettings } from '@/types/formFields';

const props = withDefaults(defineProps<TaskFormProps>(), {
  mode: 'new',
  task: () => ({
    id: '',
    name: '',
    gtin: undefined,
    dateStart: '',
    timeStart: '',
    total: undefined,
    line: undefined,
    comment: '',
    privateComment: '',
    sticker: undefined,
    box: undefined,
    boxTotal: undefined,
  }),
});

const emit = defineEmits<TaskFormEmits>();

let boxCapacity = 0;

const formData = reactive({ ...props.task });

const formRef = ref<InstanceType<typeof QForm> | null>(null);

const boxAlertValue = ref(false);

const SelectFieldKeys: FormSelectKey[] = ['gtin', 'line', 'box', 'sticker'];

const formSettings = computed<FormInputSettings<FormInputKey> & FormSelectSettings<FormSelectKey>>(() => ({
  name: {
    label: 'Название задачи',
    placeholder: 'Новая задача',
    required: true,
  },
  gtin: {
    outsideLabel: 'GTIN',
    label: 'Выберите GTIN',
    required: true,
    loading: props.loadingStates?.gtin,
  },
  dateStart: {
    label: 'Дата начала',
    type: 'date',
  },
  timeStart: {
    label: 'Время начала',
    type: 'time',
    placeholder: '12:30',
  },
  total: {
    label: 'Кол-во',
    required: true,
    displayNumberWithDelimiter: true,
  },
  line: {
    outsideLabel: 'Линия',
    label: 'Выберите линию',
    required: true,
    loading: props.loadingStates?.line,
  },
  comment: {
    label: 'Комментарий к задаче',
    placeholder: 'Ваш комментарий к задаче...',
    type: 'textarea',
    counter: true,
  },
  privateComment: {
    label: 'Приватный комментарий',
    placeholder: 'Приватный комментарий, который виден только вам...',
    type: 'textarea',
    counter: true,
  },
  sticker: {
    outsideLabel: 'Шаблон этикетки',
    label: 'Выбрать шаблон...',
    required: true,
    loading: props.loadingStates?.sticker,
  },
  box: {
    outsideLabel: 'Шаблон упаковки',
    label: 'Выбрать шаблон...',
    required: true,
    loading: props.loadingStates?.box,
  },
  boxTotal: {
    label: 'Кол-во упаковок',
    displayNumberWithDelimiter: true,
  },
}));

const boxAlert = computed<BoxAlert>(() => {
  if (!formData.total || !formData.boxTotal || formData.total % boxCapacity === 0 || boxAlertValue.value) return {};

  if (formData.total < boxCapacity) {
    return {
      show: true,
      text: 'Общее кол-во кодов должно быть не меньше кол-ва кодов в упаковке',
    };
  }

  const newCount = formData.total - boxCapacity * (formData.boxTotal - 1);

  return {
    count: newCount,
    show: newCount > 0,
    text: 'Кол-во в последней упаковке',
    showCheckbox: true,
  };
});

const boxTotalValue = computed({
  get() {
    return formData.boxTotal;
  },
  set(val) {
    formData.boxTotal = val;
    boxAlertValue.value = false;

    if (formData.box) {
      formData.total = (val ?? 0) * boxCapacity;
    }
  },
});

const totalValue = computed({
  get() {
    return formData.total || 100000;
  },
  set(val) {
    formData.total = val;
    boxAlertValue.value = false;

    if (formData.box) {
      formData.boxTotal = getBoxTotal();
    }
  },
});

const boxAlertRules = computed(() => [
  (val: boolean) => {
    if (!boxAlert.value.show) return true;

    if (boxAlert.value.showCheckbox) return val || 'Подтвердите действие';

    return 'Увеличьте общее кол-во кодов';
  },
]);

const isSelectFieldKey = (name: keyof TaskItem): name is FormSelectKey => {
  return SelectFieldKeys.includes(name as FormSelectKey);
};

const getFieldProps: FormInputProps<FormInputKey> & FormSelectProps<FormSelectKey> = (name) => {
  if (isSelectFieldKey(name)) {
    return {
      outsideLabel: formSettings.value[name]?.outsideLabel,
      label: formSettings.value[name]?.label,
      staticLabel: true,
      required: formSettings.value[name]?.required,
      outlined: true,
      labelOutside: true,
      dense: true,
      optionsDense: true,
      mapOptions: true,
      emitValue: true,
      rules: formSettings.value[name]?.required ? [(val) => (val && val.length > 0) || 'Выберите значение'] : [],
      options: props.options ? props.options[name] : [],
      loading: formSettings.value[name]?.loading,
      lazyRules: 'ondemand',
    };
  }

  return {
    label: formSettings.value[name].label,
    placeholder: formSettings.value[name].placeholder,
    required: formSettings.value[name].required,
    outlined: true,
    labelOutside: true,
    labelOnBorder: false,
    dense: true,
    labelColor: 'dark-gray-70',
    color: 'primary-text',
    fontSize: '16px',
    type: formSettings.value[name].type || 'text',
    maxlength: 120,
    counter: formSettings.value[name].counter,
    displayNumberWithDelimiter: formSettings.value[name].displayNumberWithDelimiter,
    lazyRules: 'ondemand',
  };
};

const getBoxTotal = () => {
  if (!formData.total) return 0;

  let newBoxTotal = formData.total / boxCapacity;
  if (!Number.isInteger(newBoxTotal)) {
    newBoxTotal = Math.ceil(newBoxTotal);
  }
  return newBoxTotal;
};

const onSubmit = async (e: Event | SubmitEvent) => {
  if (boxAlert.value.show) return;

  const event = e as SubmitEvent;
  const submitterName = (event.submitter as HTMLButtonElement)?.name;

  if (submitterName === 'draftBtn') {
    emit('draft', formData);
  } else {
    emit('submit', formData);
  }
};

watch(
  () => formData.box,
  (newBox) => {
    if (newBox) {
      const needleBox = props.options?.box.find((b) => b.value === newBox);
      if (needleBox && formData.total) {
        boxCapacity = needleBox.perBox;
        boxAlertValue.value = false;
        formData.boxTotal = getBoxTotal();
      }
    }
  },
);
</script>

<style scoped lang="scss">
.task-form {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    font-family: VelaSans, sans-serif;
  }

  .v-input {
    font-family: VelaSans, sans-serif;

    :deep(.q-field__native) {

      &::-webkit-input-placeholder {
        color: $dark-gray-55;
      }
    }

    :deep(.q-field__control) {
      border-radius: 4px;
    }
  }

  &__buttons {
    display: flex;
    gap: 12px;

    .v-button {
      height: 60px;
      padding: 20px;
      border-radius: 4px;
    }
  }
}

.box-alert {
  padding-bottom: 0;

  &__text {
    margin: 0 0 0 8px;
    @include font(VelaSans, $font-size-p3, 1, 400);
    color: $dark-gray-70;
    flex-grow: 1;
  }

  :deep(.v-card__content) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  :deep(.q-field__control) {
    min-height: unset;

    &:before, &:after {
      content: unset;
    }
  }

  :deep(.q-field__bottom) {
    padding-top: 0;
  }
}
</style>