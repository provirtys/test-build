import { sleep } from '@integrity/base-ui/src/utils/sleep.js';
import { AggregationPage } from '@tablet/pages.js';
import { storeToRefs } from 'pinia';
import { expect, waitFor } from 'storybook/test';
import { watch } from 'vue';
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
  template: `
    <aggregation-page v-bind="args"/>`,
});

export const Standard = BaseComponent.bind({});

export const WithError = BaseComponent.bind({});

WithError.args = {
  inPackageCurrent: 2,
  inPackageTotal: 6,
};

WithError.play = async ({ args }) => {
  const sidebar = document.querySelector('.main-layout__sidebar');

  expect(window.getComputedStyle(sidebar).backgroundColor).toBe('rgba(211, 20, 28, 0.85)');

  const sidebarAlert = sidebar.querySelector('.v-alert');
  const sidebarAlertDescription = sidebar.querySelector('.alert-description');
  const sidebarButton = sidebar.querySelector('button');

  await expect(sidebarAlert.textContent).toBe('Не все коды подтверждены');
  await expect(sidebarAlertDescription.textContent).toBe('Печатать код неполной упаковки');
  await expect(sidebarButton).not.toBeDisabled();

  await sleep(1000);

  await waitFor(() => {
    args.inPackageCurrent = 6;
  });

  await expect(window.getComputedStyle(sidebar).backgroundColor).toBe('rgba(0, 0, 0, 0)');
  await expect(sidebarAlert).not.toBeVisible();
  await expect(sidebarAlertDescription).not.toBeVisible();
  await expect(sidebarButton).toBeDisabled();
};
