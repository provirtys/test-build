<template>
  <div class="v-file-upload">
    <div class="v-file-upload__header">
      <v-icon v-if="required" class="text-primary" name="asterisk" size="10"/>
      <label class="v-file-upload__label">{{ label }}</label>
    </div>
    <div class="v-file-upload__container">
      <v-icon class="q-mb-lg" :class="iconClass" :name="config.icon" size="28"/>
      <p class="v-file-upload__formats">{{ config.hint }}</p>
      <input
        class="v-file-upload__input q-mb-lg hidden"
        ref="inputRef"
        type="file"
        :accept="acceptFormats"
        @change="onFileChange"
      />
      <v-button
        class="v-file-upload__button"
        v-bind="btnProps"
        @action="pickFile"
      >
        {{ config.buttonText }}
      </v-button>
    </div>
    <div class="v-file-upload__image-container">
      <img v-if="imageSrc" class="v-file-upload__image" :src="imageSrc" alt=""/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { VButton, VButtonProps, VIcon } from '@';
import type { Status, VFileUploadConfig, VFileUploadProps } from './VFileUpload.types';

const props = withDefaults(defineProps<VFileUploadProps>(), {
  formats: () => ['zpl', 'ezpl', 'txt'],
  label: 'Загрузить файл',
});

const selectedFile = defineModel<File>();

const inputRef = ref<HTMLInputElement>();
const status = ref<Status>('empty');
const imageSrc = ref(props.image);

const acceptFormats = computed(() => props.formats.map((f) => `.${f}`).join(','));
const allowedFormatsText = computed(() => {
  if (props.formats.length === 0) return '';
  if (props.formats.length === 1) return props.formats[0];
  return props.formats.slice(0, -1).join(', ') + ' или ' + props.formats[props.formats.length - 1];
});

const iconClass = computed(() => {
  switch (status.value) {
    case 'uploaded':
      return 'text-success';
    case 'error':
      return 'text-error';
    default:
      return 'text-primary-text';
  }
});

const config = computed<VFileUploadConfig>(() => {
  let res: VFileUploadConfig;

  switch (status.value) {
    case 'error':
      res = {
        icon: 'status-error',
        hint: `Неверный формат (${allowedFormatsText.value})`,
        buttonText: 'Выбрать файл',
      };
      break;
    case 'uploaded':
      res = {
        icon: 'done',
        hint: selectedFile.value?.name ?? '',
        buttonText: 'Выбрать другой файл',
      };
      break;
    default:
      res = {
        icon: 'upload',
        hint: `Файл в формате ${allowedFormatsText.value}`,
        buttonText: 'Выбрать файл',
      };
      break;
  }
  return res;
});

const btnProps: VButtonProps = {
  color: 'secondary',
  fontSize: '14px',
  height: '33px',
  iconSize: 12,
  padding: '8px',
  gap: '4px',
  borderRadius: '4px',
  fitWidth: true,
};

const pickFile = () => {
  if (!inputRef.value) return;
  inputRef.value.click();
};

const onFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  if (!input.files?.length) {
    if (!selectedFile.value) {
      selectedFile.value = undefined;
    }
    return;
  }

  const file = input.files[0];
  const ext = file.name.split('.').pop()?.toLowerCase() || '';
  if (!props.formats.includes(ext)) {
    input.value = '';
    selectedFile.value = undefined;
    status.value = 'error';
    return;
  }
  status.value = 'uploaded';
  selectedFile.value = file;
};

onMounted(() => {
  if (selectedFile.value) {
    status.value = 'uploaded';
  }
});
</script>

<style scoped lang="scss">
.v-file-upload {

  &__header {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-bottom: 4px;
  }

  &__label {
    @include font(VelaSans, $font-size-p4, 1, 400);
    color: $dark-gray-70;
    margin-bottom: 4px;
  }

  &__container {
    background-color: $primary-text-5;
    padding: 12px 10px 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='%2333333366' stroke-width='1' stroke-dasharray='4%2c 4' stroke-dashoffset='33' stroke-linecap='square'/%3e%3c/svg%3e");
    }
  }

  &__formats {
    @include font(VelaSans, $font-size-p3, 1, 500);
    color: $dark-gray-70;
  }

  &__image-container {
    text-align: center;
    margin-top: 20px;
  }

  &__image {
    max-width: 200px;
    object-fit: contain;
  }

  &__button {
    min-width: 161px;
    height: 30px;
  }
}
</style>