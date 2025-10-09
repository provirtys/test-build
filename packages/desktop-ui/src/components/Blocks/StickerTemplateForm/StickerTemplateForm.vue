<template>
  <div class="sticker-template-form">
    <q-form ref="formRef" class="sticker-template-form__form" @submit="onSubmit">
      <v-card title="Информация">
        <v-form-row>
          <v-input v-bind="getFieldProps('name')"/>
        </v-form-row>
        <v-form-row>
          <v-file-upload v-model="formData.file" required/>
        </v-form-row>
      </v-card>
      <div class="sticker-template-form__buttons">
        <v-button
          text-alignment="left"
          :icon="buttonConfig.icon"
          :icon-size="20"
          :loading
          icon-position="right"
          type="submit"
        >
          {{ buttonConfig.title }}
        </v-button>
      </div>
    </q-form>
  </div>
</template>

<script setup lang="ts">
import { VButton, VFileUpload, VInput } from '@base';
import { QForm } from 'quasar';
import { computed, reactive, ref } from 'vue';
import { VCard } from '@';
import {
  FieldSettings,
  StickerTemplateFormEmits,
  StickerTemplateFormFieldProps,
  StickerTemplateFormProps,
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
  },
  file: {
    modelValue: File,
  },
}));

const buttonConfig = computed(() => ({
  title: props.mode === 'new' ? 'Создать шаблон' : 'Сохранить шаблон',
  icon: props.mode === 'new' ? 'plus' : 'done',
}));

const getFieldProps: StickerTemplateFormFieldProps = (name) => {
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
}
</style>