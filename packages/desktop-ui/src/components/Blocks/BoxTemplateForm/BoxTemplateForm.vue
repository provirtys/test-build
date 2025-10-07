<template>
  <div class="box-template-form">
    <q-form ref="formRef" class="box-template-form__form">
      <v-card title="Информация">
        <v-form-row>
          <v-input v-bind="getFieldProps('name')"/>
        </v-form-row>
        <v-form-row class="box-template-form__grid">
          <span class="box-template-form__grid-title">Кол-во</span>
          <info-grid :x="formData.x || 5" :y="formData.y || 3" height="212px"/>
        </v-form-row>
        <v-form-row columns="2">
          <v-input v-bind="getFieldProps('x')"/>
          <v-input v-bind="getFieldProps('y')"/>
        </v-form-row>
        <v-form-row columns="2">
          <v-checkbox-button
            class="box-template-form__multilayered"
            v-model="formData.multilayered"
            height="xs" label="Многослойный"
            border="4px"
            border-color="border-color"
            is-plane
            bg-always-filled
          />
          <v-input :style="{'opacity': formData.multilayered ? 1 : 0.2}" v-bind="getFieldProps('layers')"/>
        </v-form-row>
        <v-card v-if="productsQuantity" class="box-template-form__quantity-card" color="info" padding-x="12px"
                padding-y="12px">
          <v-icon class="text-info" name="alert-rounded" size="16"/>
          Общее кол-во изделий <span>{{ productsQuantity }}</span>
        </v-card>
      </v-card>
      <div class="box-template-form__buttons">
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
import { VButton, VCheckboxButton, VIcon, VInput } from '@base';
import { QForm } from 'quasar';
import { computed, reactive, ref, watch } from 'vue';
import { InfoGrid, VCard } from '@';
import {
  BoxTemplateFormEmits,
  BoxTemplateFormFieldProps,
  BoxTemplateFormProps,
  FieldSettings,
} from '@/components/Blocks/BoxTemplateForm/BoxTemplateForm.types';
import VFormRow from '@/components/ui/VFormRow/VFormRow.vue';

const props = withDefaults(defineProps<BoxTemplateFormProps>(), {
  mode: 'new',
  box: () => ({
    name: '',
    gtin: [],
    x: undefined,
    y: undefined,
    layers: undefined,
  }),
});

const emit = defineEmits<BoxTemplateFormEmits>();

const formRef = ref<InstanceType<typeof QForm> | null>(null);

const formData = reactive({ ...props.box, multilayered: !!props.box.layers && props.box.layers !== 1 });

const fieldSettings = computed<FieldSettings>(() => ({
  name: {
    label: 'Название шаблона',
    placeholder: 'Новый шаблон',
    modelValue: formData.name,
    required: true,
  },
  x: {
    label: 'X',
    modelValue: formData.x,
    type: 'number',
    placeholder: '5',
    required: true,
  },
  y: {
    label: 'Y',
    modelValue: formData.y,
    type: 'number',
    placeholder: '3',
    required: true,
  },
  layers: {
    label: 'Кол-во слоев',
    modelValue: formData.layers,
    type: 'number',
    placeholder: '3',
    disable: !formData.multilayered,
  },
}));

const productsQuantity = computed(() => {
  if (!formData.x || !formData.y) return 0;

  return formData.x * formData.y * (formData.layers ?? 1);
});

const buttonConfig = computed(() => ({
  title: props.mode === 'new' ? 'Создать шаблон' : 'Сохранить шаблон',
  icon: props.mode === 'new' ? 'plus' : 'done',
}));

const getFieldProps: BoxTemplateFormFieldProps = (name) => ({
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
  maxlength: 120,
  min: name === 'layers' ? 1 : 0,
  disable: fieldSettings.value[name].disable,
  'onUpdate:modelValue': (val) => {
    formData[name] = val;
  },
});

const onSubmit = async () => {
  const isValid = await formRef.value?.validate();
  if (isValid) {
    emit('submit', {
      name: formData.name!,
      x: Number(formData.x),
      y: Number(formData.y),
      layers: formData.layers ? Number(formData.layers) : 1,
    });
  }
};

watch(
  () => formData.multilayered,
  (val) => {
    formData.layers = val ? 1 : undefined;
  },
);
</script>

<style scoped lang="scss">
.box-template-form {
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