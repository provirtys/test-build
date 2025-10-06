<template>
  <div class="sticker-template-form">
    <q-form ref="formRef" class="sticker-template-form__form">
      <v-card title="Информация">
        <v-form-row>
          <v-input v-bind="getFieldProps('name')"/>
        </v-form-row>
        <v-form-row>
          <v-select v-bind="getFieldProps('gtin')"/>
        </v-form-row>
        <v-form-row>
          <v-file-upload v-model="formData.file"/>
        </v-form-row>
      </v-card>
      <div class="sticker-template-form__buttons">
        <v-button
          text-alignment="left"
          :icon="buttonConfig.icon"
          :icon-size="20"
          icon-position="right"
          :loading
          @action="onSubmit"
        >
          {{ buttonConfig.title }}
        </v-button>
      </div>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { VButton, VFileUpload, VInput, VSelect } from '@base';
import { QForm } from 'quasar';
import { computed, reactive, ref } from 'vue';
import { VCard } from '@';
import {
  FieldSettings,
  SelectFieldKey,
  SelectFieldsKeys,
  StickerTemplateFormEmits,
  StickerTemplateFormFieldProps,
  StickerTemplateFormProps,
  StickerTemplateItem,
} from '@/components/Blocks/StickerTemplateForm/StickerTemplateForm.types';
import VFormRow from '@/components/ui/VFormRow/VFormRow.vue';

const props = withDefaults(defineProps<StickerTemplateFormProps>(), {
  mode: 'new',
});

const emit = defineEmits<StickerTemplateFormEmits>();

const formRef = ref<InstanceType<typeof QForm> | null>(null);

const formData = reactive({ ...props.sticker });

const fieldSettings = computed<FieldSettings>(() => ({
  name: {
    label: 'Название шаблона',
    placeholder: 'Новый шаблон',
    modelValue: formData.name,
    required: true,
    disable: props.mode === 'edit',
  },
  gtin: {
    outsideLabel: 'GTIN к которым применяется шаблон',
    label: 'Выберите GTIN',
    modelValue: formData.gtin,
    required: true,
    multiple: true,
    useChips: true,
  },
  file: {
    modelValue: File,
  },
}));

const buttonConfig = computed(() => ({
  title: props.mode === 'new' ? 'Создать шаблон' : 'Сохранить шаблон',
  icon: props.mode === 'new' ? 'plus' : 'done',
}));

const isSelectFieldKey = (name: keyof StickerTemplateItem): name is SelectFieldKey => {
  return SelectFieldsKeys.includes(name as SelectFieldKey);
};

const getFieldProps: StickerTemplateFormFieldProps = (name) => {
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
      useChips: fieldSettings.value[name]?.useChips,
      multiple: fieldSettings.value[name]?.multiple,
      rules: (fieldSettings.value[name]?.required && [(val) => val.length || 'Выберите значение']) || [],
      options: props.options ? props.options[name] : [],
      'onUpdate:modelValue': (val) => {
        formData[name] = val;
      },
    };
  }

  return {
    modelValue: fieldSettings.value[name]?.modelValue,
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
    disable: fieldSettings.value[name].disable,
    'onUpdate:modelValue': (val) => {
      formData[name] = val;
    },
  };
};

const onSubmit = async () => {
  const isValid = await formRef.value?.validate();
  if (isValid) {
    emit('submit', {
      name: formData.name!,
      gtin: formData.gtin!,
      file: formData.file!,
    });
  }
};
</script>

<style scoped lang="scss">
.sticker-template-form {
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

  &__multilayered {
    margin-top: 18px;
    height: 40px;
  }

  &__quantity-card {
    color: $dark-gray-70;
    border-radius: 4px;

    span {
      color: $dark-gray;
    }

    :deep(.v-card__content) {
      display: flex;
      align-items: center;
      gap: 4px;
      @include fontAdaptive($font-size-p3, 1, 400);
    }

  }
}
</style>