<template>
  <q-dialog class="v-notification" ref="dialogRef" @hide="onDialogHide" :seamless position="bottom">
    <div class="v-notification__background" :class="backgroundClasses">
      <q-card class="v-notification__card" flat>
        <div class="v-notification__header">
          <v-icon :name="iconName" size="22" :class="iconColor"/>
          <div class="v-notification__title">{{ headerTitle }}</div>
        </div>
        <div v-if="text" class="v-notification__text">
          {{ text }}
        </div>
        <div v-if="actions?.length" class="v-notification__actions">
          <v-button :color="actions[0].color" size="xs" @action="onDialogCancel">
            {{ actions[0].text }}
          </v-button>
          <v-button :color="actions[1].color" size="xs" @action="onDialogOK">
            {{ actions[1].text }}
          </v-button>
        </div>
        <v-icon name="close" size="16" class="v-notification__close-btn" v-close-popup/>
      </q-card>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import { VButton, VIcon } from '@integrity/base-ui';
import { useDialogPluginComponent } from 'quasar';
import { computed, onMounted } from 'vue';
import type { VNotificationProps } from './index';

const props = withDefaults(defineProps<VNotificationProps>(), {
  type: 'warning',
});

defineEmits([...useDialogPluginComponent.emits]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent();

const backgroundClasses = computed(() => [`bg-${props.type}`]);

const iconColor = computed(() => [`text-${props.type}`]);

const baseTitle = computed(() => {
  switch (props.type) {
    case 'info':
      return 'Информация';
    case 'warning':
      return 'Внимание!';
    case 'error':
      return 'Ошибка';
    case 'success':
      return 'Успешно';
  }
});

const headerTitle = computed(() => props.title || baseTitle.value);

const iconName = computed(() => {
  switch (props.type) {
    case 'info':
    case 'error':
      return 'alert';
    case 'warning':
      return 'alert-triangle';
    case 'success':
      return 'done';
  }
});

onMounted(() => {
  if (props.timeout) {
    setTimeout(() => {
      dialogRef.value?.hide();
    }, props.timeout);
  }
});
</script>

<style scoped lang="scss">
.v-notification {

  .v-notification__background {
    position: relative;
    bottom: 10px;
    max-width: calc(100vw - 40px);
    width: 440px !important;
    border-radius: 12px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
  }

  &__header {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  &__title {
    @include fontAdaptive($font-size-p1, 1, 500, 0.01em)
  }

  &__text {
    @include fontAdaptive($font-size-p3, 1.5, 400, 0.01em);
    color: $dark-gray-85;
  }

  &__actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;

    :deep(.v-button__text) {
      font-size: $font-size-p3;
    }
  }

  &__close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
    color: $primary-text;
  }
}
</style>