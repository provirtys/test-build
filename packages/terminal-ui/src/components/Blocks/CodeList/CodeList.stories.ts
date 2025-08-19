import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import type { CodeItemProps } from '@/components/Elements/CodeItem/CodeItem.types';
import { CodeList } from './index';

type Story = StoryObj<typeof CodeList>;

const codeItemsMock: CodeItemProps[] = [
  {
    id: '1',
    label: 'Код-1',
    status: 'unchanged',
  },
  {
    id: '2',
    label: 'Код-2',
    status: 'new',
  },
  {
    id: '3',
    label: 'Код-3',
    status: 'new',
  },
  {
    id: '4',
    label: 'Код-4',
    status: 'new',
  },
  {
    id: '5',
    label: 'Код-5',
    status: 'new',
  },
  {
    id: '6',
    label: 'Код-6',
    status: 'deleted',
  },
  {
    id: '7',
    label: 'Код-7',
    status: 'deleted',
  },
  {
    id: '8',
    label: 'Код-8',
    status: 'deleted',
  },
  {
    id: '9',
    label: 'Код-9',
    status: 'deleted',
  },
];

const meta: Meta<typeof CodeList> = {
  component: CodeList,
  argTypes: {
    items: {
      description: 'Коды для отображения',
    },
  },
  args: {
    items: codeItemsMock,
  },
  render: (args) => ({
    components: { CodeList },
    setup() {
      const codeItems = ref(args.items);

      const itemCancelHandler = (id: string) => {
        codeItems.value = codeItems.value.filter((i) => i.id !== id);
      };

      return {
        codeItems,
        itemCancelHandler,
      };
    },
    template: `
    <code-list :items="codeItems" @on-item-cancel="itemCancelHandler"/>`,
  }),
};
export default meta;

export const Standard: Story = {};
