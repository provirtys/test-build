import { VButton } from '@base';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { QNotifyOptions } from 'quasar';
import { Notify } from 'quasar';
import { expect, userEvent, waitFor } from 'storybook/test';

type Story = StoryObj;

/** Пример того, как можно создать уведомление. Необходимо вызвать Notify.create с типом `error`   */
const meta: Meta<QNotifyOptions> = {
  render: (args) => ({
    components: { VButton },
    setup() {
      const createNotification = () => {
        Notify.create({
          type: args.type,
          message: args.message,
        });
      };
      return {
        createNotification,
      };
    },
    template: `
    <v-button text-alignment="center" @action="createNotification">Показать сообщение</v-button>`,
  }),
};
export default meta;

export const Standard: Story = {
  args: {
    type: 'error',
    message: '{{Статус/описание ошибки}}',
  },
  play: async ({ canvas }) => {
    await userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      const el = document.querySelector('.main-notification');
      expect(el).toBeVisible();
    });
  },
};
