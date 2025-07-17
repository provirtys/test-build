import { VButton } from '@base';
import { Notify } from 'quasar';
import { expect, userEvent, waitFor } from 'storybook/test';

/** Пример того, как можно создать уведомление. Необходимо вызвать Notify.create с типом `error`   */
export default {
  component: Notification,
};

const BaseComponent = (args) => ({
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
    <v-button height="xs" text-alignment="center" @action="createNotification">Показать сообщение</v-button>`,
});

export const Standard = BaseComponent.bind({});
Standard.args = {
  type: 'error',
  message: '{{Статус/описание ошибки}}',
};

Standard.play = async ({ canvas }) => {
  await userEvent.click(canvas.getByRole('button'));

  await waitFor(() => {
    const el = document.querySelector('.main-notification');
    expect(el).toBeVisible();
  });
};
