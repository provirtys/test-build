import VButton from '@base/components/ui/VButton/VButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useMainStore } from '@/stores';
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
 * UI компонент для оповещения пользователя.
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
    type: 'info',
    text: 'Если вы вернётесь назад, все несохранённые данные и отсканированные коды будут утеряны.',
  },
  render: (args) => ({
    components: { VNotification, VButton },
    setup() {
      const notification = ref(true);

      const mainStore = useMainStore();
      const { notifications } = storeToRefs(mainStore);
      const { createNotification, removeNotification } = mainStore;

      const showNotification = (type: VNotificationColor | 'backward') => {
        if (type === 'backward') {
          createNotification({
            type: 'warning',
            text: 'Текст',
            title: 'Заголовок',
            modelValue: true,
            actions: [
              {
                handler() {
                  console.log('Нажата кнопка остаться');
                },
                text: 'Остаться',
                color: 'secondary',
              },
              {
                handler() {
                  console.log('Нажата кнопка Выйти');
                },
                text: 'Выйти',
              },
            ],
          });
        } else {
          createNotification({
            type: type,
            text: 'Текст уведомления',
            modelValue: true,
          });
        }
      };

      return {
        args,
        notification,
        notifications,
        createNotification,
        removeNotification,
        showNotification,
      };
    },
    template: `
      <div class="column q-gutter-md">
        <v-button @action="() => showNotification('info')" height="sm">Показать info</v-button>
        <v-button @action="() => showNotification('warning')" height="sm">Показать warning</v-button>
        <v-button @action="() => showNotification('error')" height="sm">Показать error</v-button>
        <v-button @action="() => showNotification('success')" height="sm">Показать success</v-button>
        <v-button @action="() => showNotification('backward')" height="sm">Показать backward</v-button>
        <template v-for="n in notifications">
          <v-notification v-bind="n" @update:modelValue="() => removeNotification(n)"/>
        </template>
      </div>`,
  }),
};
export default meta;

export const ErrorState: Story = {};
