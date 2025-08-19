import { VButton } from '@base';
import { setupI18n } from '@base/i18n';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed } from 'vue';
import { LabelingCard } from './index';

type Story = StoryObj<typeof LabelingCard>;

const currentTimestamp = Date.now();

/** Компонент карточки маркировки */
const meta: Meta<typeof LabelingCard> = {
  component: LabelingCard,
  argTypes: {
    showProgressBadge: {
      description: 'Идет агрегация',
    },
    showProgressPie: {
      description: 'Прогресс',
    },
    showRepeat: {
      description: 'Повторная маркировка',
    },
    codeInfo: {
      description: 'Информация по объекту',
    },
    buttons: {
      description: 'Отображаемые кнопки',
      options: [0, 1, 2, 3, 4, 5],
      control: {
        type: 'select',
        labels: {
          0: 'Нет',
          1: 'Сканировать/Начать агрегацию',
          2: 'Повторить маркировку/Брак маркировки',
          3: 'Сканировать',
          4: 'Подтвердить',
          5: 'Сканировать/Закончить агрегацию',
        },
      },
    },
  },
  args: {
    buttons: 0,
    codeInfo: {
      labeled: 50,
      total: 120,
      time: currentTimestamp,
      code: 'wv985fjs934',
      position: 10,
    },
  },
  render: (args) => ({
    components: { MarkingCard: LabelingCard, VButton },
    setup() {
      const bindingArgs = computed(() => args);
      const { t } = setupI18n();

      return {
        bindingArgs,
        t,
      };
    },
    template: `
      <marking-card v-bind="bindingArgs">
        <template v-if="bindingArgs.buttons" #buttons>
          <template v-if="bindingArgs.buttons === 1">
            <v-button
                icon="scan"
                icon-position="right"
                is-radius
                text-alignment="left"
                color="red"
            >
              {{ t('scan') }}
            </v-button>
            <v-button
                is-radius
                text-alignment="left"
            >
              {{ t('startAggregation') }}
            </v-button>
          </template>
          <template v-else-if="bindingArgs.buttons === 2">
            <v-button
                icon="restart"
                icon-position="right"
                is-radius
                text-alignment="left"
                color="red"
            >
              {{ t('repeatLabeling') }}
            </v-button>
            <v-button
                icon="bad"
                icon-position="right"
                is-radius
                text-alignment="left"
                color="secondary"
            >
              {{ t('labelingDefect') }}
            </v-button>
          </template>
          <template v-else-if="bindingArgs.buttons === 3">
            <v-button
                icon="scan"
                icon-position="right"
                is-radius
                text-alignment="left"
                color="red"
            >
              {{ t('scan') }}
            </v-button>
          </template>
          <template v-else-if="bindingArgs.buttons === 4">
            <v-button
                icon="done"
                icon-position="right"
                is-radius
                text-alignment="left"
                color="red"
            >
              {{ t('confirm') }}
            </v-button>
          </template>
          <template v-else-if="bindingArgs.buttons === 5">
            <v-button
                icon="scan"
                icon-position="right"
                is-radius
                text-alignment="left"
                color="red"
            >
              {{ t('scan') }}
            </v-button>
            <v-button
                icon="aggregation"
                icon-position="right"
                is-radius
                text-alignment="left"
            >
              {{ t('finishAggregation') }}
            </v-button>
          </template>
        </template>
      </marking-card>`,
  }),
};
export default meta;

/** Прогресс маркировки */
export const Progress: Story = {
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false,
  },
};

/** Идет агрегация */
export const goAggregation: Story = {
  args: {
    showProgressBadge: true,
    showProgressPie: false,
    showRepeat: false,
  },
};

/** Повторная маркировка */
export const repeatAggregation: Story = {
  args: {
    showProgressBadge: true,
    showProgressPie: false,
    showRepeat: true,
  },
};

/** Начало агрегации с кнопками */
export const WithButtonsSlot1: Story = {
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false,
    buttons: 1,
  },
};

/**Идет агрегация - Брак маркировки/Повторить маркировку */
export const WithButtonsSlot2: Story = {
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false,
    buttons: 2,
  },
};

/** Идет агрегация с повторной маркировкой - Брак маркировки/Повторить маркировку */
export const WithButtonsSlot3: Story = {
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: true,
    buttons: 2,
  },
};

/** Брак маркировки - Сканировать */
export const WithButtonsSlot4: Story = {
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false,
    buttons: 3,
  },
};

/** Брак маркировки - Подтвердить */
export const WithButtonsSlot5: Story = {
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false,
    buttons: 4,
  },
};

/** Завершение агрегации */
export const WithButtonsSlot6: Story = {
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false,
    buttons: 5,
  },
};
