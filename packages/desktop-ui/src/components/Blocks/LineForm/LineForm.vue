<template>
  <div class="line-form">
    <q-form ref="formRef" class="line-form__form" @submit="onSubmit">
      <v-card title="Общая информация">
        <v-form-row>
          <v-input v-bind="getFieldProps('name')" v-model="formData.name"/>
        </v-form-row>
      </v-card>
      <v-card class="line-form__module-card" v-for="(module, idx) in formData.modules" title="Модуль">
        <v-form-row columns="2">
          <v-input v-bind="getFieldProps('moduleName')" v-model="module.name"/>
          <v-input v-bind="getFieldProps('moduleIp')" v-model="module.ip"/>
        </v-form-row>
        <v-button
          class="line-form__delete-module"
          icon="trash"
          height="xxs"
          :icon-size="11"
          border-radius="4px"
          color="secondary"
          @action="() => onDeleteModule(idx)"
        />
      </v-card>
        <v-button
          class="line-form__add-module"
          color="secondary"
          height="xs"
          text-alignment="left"
          icon="plus"
          :icon-size="14"
          :loading
          icon-position="right"
          border-radius="4px"
          @action="onAddModule"
        >
          Добавить модуль
      </v-button>
      <v-button
        class="line-form__submit-form"
        text-alignment="left"
        :icon="buttonConfig.icon"
        :icon-size="20"
        :loading
        icon-position="right"
        type="submit"
        border-radius="4px"
      >
        {{ buttonConfig.title }}
      </v-button>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { VButton, VInput } from '@base';
import { QForm } from 'quasar';
import { computed, onMounted, reactive, ref } from 'vue';
import { VCard, VList } from '@';
import {
  FieldSettings,
  LineFormEmits,
  LineFormFieldProps,
  LineFormProps,
  ModuleItem,
} from '@/components/Blocks/LineForm/LineForm.types';
import VFormRow from '@/components/ui/VFormRow/VFormRow.vue';

const props = withDefaults(defineProps<LineFormProps>(), {
  line: () => ({
    name: '',
    modules: [
      {
        name: '',
        ip: '',
      },
    ],
  }),
  mode: 'new',
});

const emit = defineEmits<LineFormEmits>();

const formRef = ref<InstanceType<typeof QForm> | null>(null);

const formData = reactive({ ...props.line });

const buttonConfig = computed(() => ({
  title: props.mode === 'new' ? 'Создать линию' : 'Сохранить линию',
  icon: props.mode === 'new' ? 'plus' : 'done',
}));

const fieldSettings = computed<FieldSettings>(() => ({
  name: {
    label: 'Название линии',
    placeholder: 'Новая линия...',
    modelValue: formData.name,
    required: true,
  },
  moduleName: {
    label: 'Название модуля',
    placeholder: 'Модуль...',
    required: true,
  },
  moduleIp: {
    label: 'IP адрес',
    placeholder: '192.168.1.1',
    required: true,
  },
}));

const getFieldProps: LineFormFieldProps = (name) => {
  return {
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
    borderRadius: '4px',
    hideBottomSpace: true,
  };
};

const onAddModule = () => {
  formData.modules?.push({
    name: '',
    ip: '',
  });
};

const onDeleteModule = (idx: number) => {
  formData.modules?.splice(idx, 1);
};

const onSubmit = async () => {
  const isValid = await formRef.value?.validate();
  if (isValid) {
    emit('submit', {
      name: formData.name!,
      modules: formData.modules!,
    });
  }
};

onMounted(() => {
  if (props.line.modules?.length === 0) {
    formData.modules?.push({ name: '', ip: '' });
  }
});
</script>

<style scoped lang="scss">
.line-form {

  &__form {
    display: flex;
    flex-direction: column;
    gap: 32px;
    font-family: VelaSans, sans-serif;
  }

  &__grid {
    margin-bottom: 12px;
  }

  &__grid-title {
    @include fontAdaptive($font-size-p4, 1, 400);
    color: $dark-gray-70;
  }

  .v-input {
    font-family: VelaSans, sans-serif;

    :deep(.q-field__native) {

      &::-webkit-input-placeholder {
        color: $dark-gray-55;
      }
    }
  }

  &__module-card {
    position: relative;
  }

  &__delete-module {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 30px;
    height: 30px;
    justify-content: center;
  }

  &__add-module {
    height: 40px;
    padding: 12px;
    @include fontAdaptive($font-size-p3, 1, 500);
  }

  &__submit-form {
    height: 60px;
    padding: 20px;
  }
}
</style>