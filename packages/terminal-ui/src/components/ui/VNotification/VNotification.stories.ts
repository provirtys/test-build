import VButton from '@base/components/ui/VButton/VButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useNotificationStore } from '@/stores/notification/store';
import { VNotification } from './index';
import type { VNotificationColor } from './VNotification.types';

type Story = StoryObj<typeof VNotification>;

const types: Record<VNotificationColor, string> = {
  info: 'Синий',
  error: 'Красный',
  success: 'Зеленый',
  warning: 'Желтый',
};

/**
 * UI компонент для оповещения пользователя. Поддерживает 4 цветовых палитры и вывод кнопок в нижней части элемента.
 * Пример использования см. в stores/notification/store.ts
 * */
const meta: Meta<typeof VNotification> = {
  component: VNotification,
  argTypes: {
    type: {
      description: 'Тип уведомления',
      options: Object.keys(types),
      control: {
        type: 'select',
        labels: types,
      },
    },
  },
  args: {
    title: '',
    actions: [],
    type: 'info',
    text: 'Текст уведомления',
    timeout: 0,
  },
  render: (args) => ({
    components: { VNotification, VButton },
    setup() {
      const notification = ref(true);

      const notificationStore = useNotificationStore();
      const { notifications } = storeToRefs(notificationStore);
      const { createNotification, createConfirmationNotification, removeNotification } = notificationStore;

      const showNotification = () => {
        createNotification(args);
      };

      return {
        args,
        notification,
        notifications,
        createNotification,
        createConfirmationNotification,
        removeNotification,
        showNotification,
      };
    },
    template: `
      <div class="column q-gutter-md">
        <v-button @action="showNotification" height="sm">Показать уведомление</v-button>
        <v-button @action="createConfirmationNotification" height="sm">Показать уведомление для подтверждения выхода
        </v-button>
        <template v-for="n in notifications" :key="n.id">
          <v-notification v-bind="n" @update:modelValue="() => removeNotification(n.id)"/>
        </template>
      </div>`,
  }),
};
export default meta;

export const CallButtons: Story = {};
