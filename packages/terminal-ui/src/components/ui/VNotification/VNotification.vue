<template>
  <q-dialog class="v-notification" v-model="isOpen" seamless position="right">
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
          <v-button v-for="action in actions" :color="action.color" height="xs" @action="action.handler">{{
              action.text
            }}
          </v-button>
        </div>
        <v-icon name="close" size="16" class="v-notification__close-btn" v-close-popup/>
      </q-card>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import { VButton, VIcon } from '@base';
import { computed } from 'vue';
import type { VNotificationProps } from '@/components/ui/VNotification/VNotification.types';

const props = withDefaults(defineProps<VNotificationProps>(), {
  type: 'warning',
});

const isOpen = defineModel({ type: Boolean });

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
</script>

<style scoped lang="scss">
.v-notification {

  .v-notification__background {
    border-radius: 12px;
  }

  &__card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 440px;
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