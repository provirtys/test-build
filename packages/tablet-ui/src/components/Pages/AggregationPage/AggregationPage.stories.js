import { AggregationPage } from '@tablet/pages.js';
import { storeToRefs } from 'pinia';
import { computed, watch } from 'vue';
import { useMainStore } from '@/stores/index.js';

/**
 * Страница с информацией об агрегировании. <br>
 * В левой части находится изображение с камеры. <br>
 * В правой - статистика по агрегации текущего выбранного задания: <br>
 * **- В упаковке** - текущее число сканированных кодов / текущее количество ошибочных кодов и общее количество кодов одной упаковке. <br>
 * **- Всего кодов маркировки** - количество кодов отсканированных у выбранного задания, включая те которые находятся в очереди. <br>
 * **- В очереди** - количество упаковок, которые находятся в очереди <br>
 * **- Всего упаковок** - количество успешно агрегированных упаковок. Сюда не включаются упаковки, которые находятся в очереди. <br><br>
 *
 * Если количество отсканированных кодов меньше, чем количество кодов в упаковке, то оператору показывается предупреждающее сообщение и кнопка для подтверждения разблокируется. <br>
 * Если количество отсканированных кодов равно количеству кодов в упаковке, то данная группа кодов собирается в один "виртуальный" агрегат и добавляется в очередь. <br><br>
 *
 * При двойном нажатии на изображение с камеры, оно открывается во весь экран, закрывая сайдбар. Закрыть его можно, нажав на кнопку в углу блока с изображением или сделав двойное нажатие снова <br>
 *
 */

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

    const bindingArgs = computed(() => {
      const { hasError, ...restArgs } = args;

      return restArgs;
    });

    const sideBarHasError = computed(() => {
      if (args.hasError) return args.hasError;

      return args.inPackageCurrent > 0 && args.inPackageCurrent < args.inPackageTotal;
    });
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
      bindingArgs,
      sideBarHasError,
    };
  },
  template: `
    <aggregation-page v-bind="bindingArgs" :has-error="sideBarHasError"/>`,
});

export const Standard = BaseComponent.bind({});
