import { AggregationPage } from '@tablet';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useMainStore } from '@/stores/index.js';

export default {
  component: AggregationPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    inPackageCurrent: {
      description: 'Количество отсканированных кодов на текущем шаге',
      control: 'number',
    },
    inPackageError: {
      description: 'Количество ошибочных кодов на текущем шаге',
      control: 'number',
    },
    inPackageTotal: {
      description: 'Количество кодов в упаковке',
      control: 'number',
    },
    codesTotal: {
      description: 'Общее количество отсканированных кодов',
      control: 'number',
    },
    inQueue: {
      description: 'Количество кодов, находящихся в очереди',
      control: 'number',
    },
    packagesTotal: {
      description: 'Общее количество агрегированных упаковок',
      control: 'number',
    },
    hasError: {
      description: 'Состояние ошибки',
      control: 'boolean',
    },
    headerStatusReady: {
      description: 'Статус `Готово`',
      control: 'boolean',
    },
  },
  args: {
    inPackageCurrent: 0,
    inPackageError: 0,
    inPackageTotal: 0,
    codesTotal: 0,
    inQueue: 0,
    packagesTotal: 0,
    hasError: false,
    headerStatusReady: false,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

const BaseComponent = (args) => ({
  components: { AggregationPage },
  setup() {
    const { isStatusReady } = storeToRefs(useMainStore());
    watch(
      () => args.headerStatusReady,
      (val) => {
        isStatusReady.value = val;
      },
      {
        immediate: true,
      },
    );

    return {
      args,
    };
  },
  template: `<aggregation-page v-bind="args" />`,
});

export const Standard = BaseComponent.bind({});
