import { VExpansionItem } from '@integrity/base-ui/src/components/ui/VExpansionItem/index.js';
import { computed, ref } from 'vue';
import { CodeList } from './index.js';

const codeItemsMock = [
  {
    id: 1,
    label: 'Код-1',
  },
  {
    id: 2,
    label: 'Код-2',
    status: 'new',
  },
  {
    id: 3,
    label: 'Код-3',
    status: 'new',
  },
  {
    id: 4,
    label: 'Код-4',
    status: 'new',
  },
  {
    id: 5,
    label: 'Код-5',
    status: 'new',
  },
  {
    id: 6,
    label: 'Код-6',
    status: 'deleted',
  },
  {
    id: 7,
    label: 'Код-7',
    status: 'deleted',
  },
  {
    id: 8,
    label: 'Код-8',
    status: 'deleted',
  },
  {
    id: 9,
    label: 'Код-9',
    status: 'deleted',
  },
];
/**
 *
 * */
export default {
  component: CodeList,
  argTypes: {
    items: {
      description: 'Коды для отображения',
    },
  },
  args: {
    items: codeItemsMock,
  },
};

const BaseComponent = (args) => ({
  components: { CodeList },
  setup() {
    const codeItems = ref(args.items);

    const itemCancelHandler = (item) => {
      codeItems.value = codeItems.value.filter((i) => i.id !== item.id);
    };

    return {
      codeItems,
      itemCancelHandler,
    };
  },
  template: `
    <code-list :items="codeItems" @on-item-cancel="itemCancelHandler"/>`,
});

export const Standard = BaseComponent.bind({});
Standard.args = {
  items: codeItemsMock,
};
