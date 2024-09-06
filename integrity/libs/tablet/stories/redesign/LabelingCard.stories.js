import LabelingCard from '../../components/redesign/LabelingCard.vue';

const dataMatrix = 'DataMatrix';
const code128 = 'Code128';

const verified = 'verified';
const broken = 'broken';
const none = 'none';
const synced = 'synced';

const info = 'info';
const success = 'success';
const error = 'error';
const warning = 'warning';

const codeTypes = { dataMatrix, code128 };
const statuses = { verified, synced, broken, none };
const colors = { info, warning, success, error };
/** Компонент карточки маркировки */
export default {
  title: 'TabletUI-redesign/LabelingCard',
  component: LabelingCard,
  tags: ['autodocs'],
  argTypes: {
    isAggregationVisible: {
      description: 'Идет агрегация',
    },
    isAuto: {
      description: 'Автоматическая маркировка',
    },
    codeInfo: {
      description: 'Информация по объекту',
    },
    isCodes: {
      description: 'Статус кода',
    },
    isScan: {
      description: 'Статус кода',
    },
    status1: {
      description: 'Статус',
      options: Object.keys(statuses),
      mapping: codeTypes,
      control: {
        type: 'radio',
        labels: {
          none: 'none',
          synced: 'synced',
          verified: 'verified',
          broken: 'broken',
        },
      },
    },
    codeType1: {
      description: 'Тип кода',
      options: Object.keys(codeTypes),
      mapping: codeTypes,
      control: {
        type: 'radio',
        labels: {
          DataMatrix: 'dataMatrix',
          Code128: 'Code128',
        },
      },
    },
    color1: {
      description: 'Иконка статуса',
      options: Object.keys(colors),
      mapping: colors,
      control: {
        type: 'radio',
        labels: {
          info: 'Info',
          success: 'Success',
          error: 'Error',
          warning: 'Warning',
        },
      },
    },
    secondCode: {
      description: 'Количество кодов',
      options: [true, false],
      control: { type: 'radio' },
    },
    status2: {
      description: 'Статус',
      options: Object.keys(statuses),
      mapping: codeTypes,
      control: {
        type: 'radio',
        labels: {
          none: 'none',
          synced: 'synced',
          verified: 'verified',
          broken: 'broken',
        },
      },
    },
    codeType2: {
      description: 'Тип кода',
      options: Object.keys(codeTypes),
      mapping: codeTypes,
      control: {
        type: 'radio',
        labels: {
          DataMatrix: 'dataMatrix',
          Code128: 'Code128',
        },
      },
    },
    color2: {
      description: 'Иконка статуса',
      options: Object.keys(colors),
      mapping: colors,
      control: {
        type: 'radio',
        labels: {
          info: 'Info',
          success: 'Success',
          error: 'Error',
          warning: 'Warning',
        },
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'light', value: '#ededed' },
        { name: 'light-gray-55', value: '#f1f1f1' },
        { name: 'light-gray', value: '#D9D9D9' },
      ],
    },
  },
};

/** Прогресс маркировки */
export const Progress = {
  args: {
    isAggregationVisible: false,
    isAuto: true,
    isCodes: true,
    isScan: false,
    codeInfo: {
      labeled: 50,
      total: 120,
      ts: '12:11:12',
      code: 'wv985fjs934',
      position: 10,
    },
  },
};

/** Идет агрегация */
export const goAggregation = {
  args: {
    isAggregationVisible: true,
    isAuto: true,
    isCodes: true,
    isScan: false,
    codeInfo: {
      labeled: 50,
      total: 120,
      ts: '12:11:12',
      code: 'wv985fjs934',
      position: 10,
    },
  },
};

/** Повторная маркировка */
export const Print = {
  args: {
    isAggregationVisible: false,
    isAuto: false,
    isCodes: true,
    isScan: true,
    codeInfo: {
      labeled: 50,
      total: 120,
      ts: '12:11:12',
      code: 'wv985fjs934',
      position: 10,
    },
  },
};
