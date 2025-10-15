<template>
  <div class="task-form">
    <q-form ref="formRef" class="task-form__form" @submit="onSubmit">
      <v-card title="Общая информация">
        <v-form-row columns="2">
          <v-input v-bind="getFieldProps('name')"/>
          <v-select v-bind="getFieldProps('gtin')"/>
        </v-form-row>
        <v-form-row columns="2">
          <v-input v-bind="getFieldProps('dateStart')"/>
          <v-input v-bind="getFieldProps('timeStart')"/>
        </v-form-row>
        <v-form-row columns="2">
          <v-input v-bind="getFieldProps('total')"/>
          <v-select v-bind="getFieldProps('line')"/>
        </v-form-row>
        <v-form-row columns="2">
          <v-input v-bind="getFieldProps('comment')"/>
          <v-input v-bind="getFieldProps('privateComment')"/>
        </v-form-row>
      </v-card>
      <v-card title="Сериализация">
        <v-form-row>
          <v-select v-bind="getFieldProps('sticker')"/>
        </v-form-row>
      </v-card>
      <v-card title="Агрегация">
        <v-form-row columns="2">
          <v-select v-bind="getFieldProps('box')"/>
          <v-input v-bind="getFieldProps('boxTotal')"/>
        </v-form-row>
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
import { VButton, VInput, VSelect } from '@base';
import { QForm } from 'quasar';
import { computed, reactive, ref } from 'vue';
import { VCard } from '@';
import {
  FieldSettings,
  GetFieldProps,
  SelectFieldKey,
  SelectFieldsKeys,
  TaskFormEmits,
  TaskFormProps,
  TaskItem,
} from '@/components/Blocks/TaskForm/TaskForm.types';
import VFormRow from '@/components/ui/VFormRow/VFormRow.vue';

const props = withDefaults(defineProps<TaskFormProps>(), {
  mode: 'new',
  task: () => ({
    id: '',
    name: '',
    gtin: undefined,
    dateStart: '',
    timeStart: '',
    quantity: undefined,
    line: undefined,
    comment: '',
    privateComment: '',
    labelTemplate: undefined,
    packageTemplate: undefined,
    packageCount: undefined,
  }),
});

const emit = defineEmits<TaskFormEmits>();

const formRef = ref<InstanceType<typeof QForm> | null>(null);

const formData = reactive({ ...props.task });

const fieldSettings = computed<FieldSettings>(() => ({
  name: {
    label: 'Название задачи',
    placeholder: 'Новая задача',
    modelValue: formData.name,
    required: true,
  },
  gtin: {
    outsideLabel: 'GTIN',
    label: 'Выберите GTIN',
    modelValue: formData.gtin,
    required: true,
    loading: props.loadingStates?.gtin,
  },
  dateStart: {
    label: 'Дата начала',
    modelValue: formData.dateStart,
    type: 'date',
  },
  timeStart: {
    label: 'Время начала',
    modelValue: formData.timeStart,
    type: 'time',
    placeholder: '12:30',
  },
  total: {
    label: 'Кол-во',
    modelValue: formData.total,
    required: true,
    displayNumberWithDelimiter: true,
  },
  line: {
    outsideLabel: 'Линия',
    label: 'Выберите линию',
    modelValue: formData.line,
    required: true,
    loading: props.loadingStates?.line,
  },
  comment: {
    label: 'Комментарий к задаче',
    modelValue: formData.comment,
    placeholder: 'Ваш комментарий к задаче...',
    type: 'textarea',
    counter: true,
  },
  privateComment: {
    label: 'Приватный комментарий',
    modelValue: formData.privateComment,
    placeholder: 'Приватный комментарий, который виден только вам...',
    type: 'textarea',
    counter: true,
  },
  sticker: {
    outsideLabel: 'Шаблон этикетки',
    label: 'Выбрать шаблон...',
    modelValue: formData.sticker,
    required: true,
    loading: props.loadingStates?.sticker,
  },
  box: {
    outsideLabel: 'Шаблон упаковки',
    label: 'Выбрать шаблон...',
    modelValue: formData.box,
    required: true,
    loading: props.loadingStates?.box,
  },
  boxTotal: {
    label: 'Кол-во упаковок',
    modelValue: formData.boxTotal,
    displayNumberWithDelimiter: true,
  },
}));

const isSelectFieldKey = (name: keyof TaskItem): name is SelectFieldKey => {
  return SelectFieldsKeys.includes(name as SelectFieldKey);
};

const getFieldProps: GetFieldProps = (name) => {
  if (isSelectFieldKey(name)) {
    return {
      modelValue: fieldSettings.value[name]?.modelValue,
      outsideLabel: fieldSettings.value[name]?.outsideLabel,
      label: fieldSettings.value[name]?.label,
      staticLabel: true,
      required: fieldSettings.value[name]?.required,
      outlined: true,
      labelOutside: true,
      dense: true,
      optionsDense: true,
      mapOptions: true,
      emitValue: true,
      rules:
        (fieldSettings.value[name]?.required && [
          () => fieldSettings.value[name].modelValue?.length || 'Выберите значение',
        ]) ||
        [],
      options: props.options ? props.options[name] : [],
      loading: fieldSettings.value[name]?.loading,
      lazyRules: 'ondemand',
      'onUpdate:modelValue': (val) => {
        formData[name] = val;
      },
    };
  }

  return {
    modelValue:
      name !== 'total'
        ? fieldSettings.value[name]?.modelValue
        : fieldSettings.value[name]?.modelValue?.toLocaleString('ru'),
    label: fieldSettings.value[name].label,
    placeholder: fieldSettings.value[name].placeholder,
    required: fieldSettings.value[name].required,
    outlined: true,
    labelOutside: true,
    labelOnBorder: false,
    dense: true,
    labelColor: 'dark-gray-70',
    color: 'primary-text',
    fontSize: '16px',
    type: fieldSettings.value[name].type || 'text',
    maxlength: 120,
    counter: fieldSettings.value[name].counter,
    displayNumberWithDelimiter: fieldSettings.value[name].displayNumberWithDelimiter,
    lazyRules: 'ondemand',
    'onUpdate:modelValue': (val) => {
      formData[name] = val;
    },
  };
};

const onSubmit = async (e: Event | SubmitEvent) => {
  const event = e as SubmitEvent;
  const submitterName = (event.submitter as HTMLButtonElement)?.name;
  if (submitterName === 'draftBtn') {
    emit('draft', formData);
  } else {
    emit('submit', formData);
  }
};
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
</style>