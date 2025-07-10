import { VButton } from '@base';
import { Notify } from 'quasar';

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
    template: `<v-button height="xs" text-alignment="center" @click="createNotification">Показать сообщение</v-button>`,
});

export const Standard = BaseComponent.bind({});
Standard.args = {
    type: 'error',
    message: '{{Статус/описание ошибки}}',
};
