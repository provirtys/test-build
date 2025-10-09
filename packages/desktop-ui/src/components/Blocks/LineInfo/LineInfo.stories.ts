import type { Meta, StoryObj } from '@storybook/vue3-vite';
import LineInfo from './LineInfo.vue';

type Story = StoryObj<typeof LineInfo>;

/** Компонент просмотра информации по линии. <br/>
 * Эмитит 3 события: <br/>
 * `edit` - при нажатии на пункт Редактировать  <br/>
 * `delete` - при нажатии на пункт Удалить  <br/>
 * `navigate` - при нажатии кнопки навигации таблицы с модулями  */
const meta: Meta<typeof LineInfo> = {
  component: LineInfo,
  argTypes: {
    id: {
      description: 'ID линиии',
    },
    name: {
      description: 'Название линии',
    },
    status: {
      description: 'Состояние линии (напр. Готов к работе)',
    },
  },
  args: {
    id: '',
    name: '',
    status: '',
    modules: [],
  },
};

export default meta;

export const Standard: Story = {
  args: {
    name: 'Линия 1',
    id: 'МРК37',
    status: 'Готова к работе',
    modules: [
      {
        ip: '192.168.1.1',
        name: 'Агрегация 1',
      },
      {
        ip: '192.168.1.2',
        name: 'Сериализация 1',
      },
      {
        ip: '192.168.1.1',
        name: 'Агрегация 2',
      },
      {
        ip: '192.168.1.2',
        name: 'Сериализация 2',
      },
      {
        ip: '192.168.1.1',
        name: 'Агрегация 3',
      },
    ],
    onNavigate: (data: any) => {
      console.log(data);
    },
  },
};
