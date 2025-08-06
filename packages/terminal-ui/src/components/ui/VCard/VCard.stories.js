import { VCard } from './index.js';

const white = 'white';
const gray = 'gray';

const colors = { white, gray };
/**
 * UI компонент карточки. Контент отображается через слот. Поддерживает выбор цвета заднего фона.
 * */
export default {
  component: VCard,
  argTypes: {
    bgColor: {
      description: 'Цвет заднего фона',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: {
          white: 'Белый',
          gray: 'Серый',
        },
      },
    },
  },
  args: {
    bgColor: white,
  },
};

const BaseComponent = (args) => ({
  components: { VCard },
  setup() {
    return {
      args,
    };
  },
  template: `
    <v-card v-bind="args">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aut consequatur cumque excepturi exercitationem numquam placeat quisquam repellendus, totam.
    </v-card>`,
});

export const White = BaseComponent.bind({});

export const Gray = BaseComponent.bind({});
Gray.args = {
  bgColor: 'gray',
};
