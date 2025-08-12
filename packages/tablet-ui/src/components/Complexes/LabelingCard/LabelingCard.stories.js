import { VButton } from '@base';
import { setupI18n } from '@integrity/base-ui/src/i18n.js';
import { computed } from 'vue';
import { LabelingCard } from './index.js';

const currentTimestamp = Date.now();

/** Компонент карточки маркировки */
export default {
  components: { VButton },
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
  },
};

const BaseComponent = (args) => ({
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
});

/** Прогресс маркировки */
export const Progress = BaseComponent.bind({});
Progress.args = {
  showProgressBadge: false,
  showProgressPie: true,
  showRepeat: false,
  codeInfo: {
    labeled: 50,
    total: 120,
    time: currentTimestamp,
    code: 'wv985fjs934',
    position: 10,
  },
};

/** Идет агрегация */
export const goAggregation = BaseComponent.bind({});
goAggregation.args = {
  showProgressBadge: true,
  showProgressPie: false,
  showRepeat: false,
  codeInfo: {
    labeled: 50,
    total: 120,
    time: currentTimestamp,
    code: 'wv985fjs934',
    position: 10,
  },
};

/** Повторная маркировка */
export const repeatAggregation = BaseComponent.bind({});
repeatAggregation.args = {
  showProgressBadge: true,
  showProgressPie: false,
  showRepeat: true,
  codeInfo: {
    labeled: 50,
    total: 120,
    time: currentTimestamp,
    code: 'wv985fjs934',
    position: 10,
  },
};

/** Начало агрегации с кнопками */
export const WithButtonsSlot1 = BaseComponent.bind({});
WithButtonsSlot1.args = {
  showProgressBadge: false,
  showProgressPie: true,
  showRepeat: false,
  codeInfo: {
    labeled: 50,
    total: 120,
    time: currentTimestamp,
    code: 'wv985fjs934',
    position: 10,
  },
  buttons: 1,
};
/**Идет агрегация - Брак маркировки/Повторить маркировку */
export const WithButtonsSlot2 = BaseComponent.bind({});
WithButtonsSlot2.args = {
  showProgressBadge: false,
  showProgressPie: true,
  showRepeat: false,
  codeInfo: {
    labeled: 50,
    total: 120,
    time: currentTimestamp,
    code: 'wv985fjs934',
    position: 10,
  },
  buttons: 2,
};
/** Идет агрегация с повторной маркировкой - Брак маркировки/Повторить маркировку */
export const WithButtonsSlot3 = BaseComponent.bind({});
WithButtonsSlot3.args = {
  showProgressBadge: false,
  showProgressPie: true,
  showRepeat: true,
  codeInfo: {
    labeled: 50,
    total: 120,
    time: currentTimestamp,
    code: 'wv985fjs934',
    position: 10,
  },
  buttons: 2,
};
/** Брак маркировки - Сканировать */
export const WithButtonsSlot4 = BaseComponent.bind({});
WithButtonsSlot4.args = {
  showProgressBadge: false,
  showProgressPie: true,
  showRepeat: false,
  codeInfo: {
    labeled: 50,
    total: 120,
    time: currentTimestamp,
    code: 'wv985fjs934',
    position: 10,
  },
  buttons: 3,
};
/** Брак маркировки - Подтвердить */
export const WithButtonsSlot5 = BaseComponent.bind({});
WithButtonsSlot5.args = {
  showProgressBadge: false,
  showProgressPie: true,
  showRepeat: false,
  codeInfo: {
    labeled: 50,
    total: 120,
    time: currentTimestamp,
    code: 'wv985fjs934',
    position: 10,
  },
  buttons: 4,
};
/** Завершение агрегации */
export const WithButtonsSlot6 = BaseComponent.bind({});
WithButtonsSlot6.args = {
  showProgressBadge: false,
  showProgressPie: true,
  showRepeat: false,
  codeInfo: {
    labeled: 50,
    total: 120,
    time: currentTimestamp,
    code: 'wv985fjs934',
    position: 10,
  },
  buttons: 5,
};
