import VButton from '@base/components/ui/VButton/VButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { createConfirmNotification, createNotification } from '@/utils/notification';
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
    seamless: true,
  },
  render: (args) => ({
    components: { VNotification, VButton },
    setup() {
      return {
        args,
        createNotification,
        createConfirmNotification,
      };
    },
    template: `
      <div class="column q-gutter-md">
        <v-button @action="() => createNotification(args)" height="sm">Показать уведомление</v-button>
        <v-button @action="() => createNotification({...args, timeout: 1000})" height="sm">Показать уведомление с
          автоматическим закрытием
        </v-button>
        <v-button @action="createConfirmNotification" height="sm">Показать уведомление с подтверждением
        </v-button>
      </div>`,
  }),
};
export default meta;

export const CallButtons: Story = {};
