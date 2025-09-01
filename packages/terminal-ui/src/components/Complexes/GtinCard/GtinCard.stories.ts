import VButton from '@base/components/ui/VButton/VButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, ref } from 'vue';
import type { CodeEl } from '@/types/entity';
import type { GtinCardMode } from './GtinCard.types';
import { GtinCard } from './index';

type Story = StoryObj<typeof GtinCard>;

const codesMock: CodeEl[] = [
  {
    id: 'code-1',
    label: 'Код-1',
  },
  {
    id: 'code-2',
    label: 'Код-2',
  },
  {
    id: 'code-3',
    label: 'Код-3',
  },
  {
    id: 'code-4',
    label: 'Код-4',
  },
  {
    id: 'code-5',
    label: 'Код-5',
  },
  {
    id: 'code-6',
    label: 'Код-6',
  },
  {
    id: 'code-7',
    label: 'Код-7',
  },
  {
    id: 'code-8',
    label: 'Код-8',
  },
  {
    id: 'code-9',
    label: 'Код-9',
  },
];

const modes: Record<GtinCardMode, string> = {
  filling: 'Добавление кодов',
  viewing: 'Просмотр кодов',
  'package-adding': 'Добавление кодов в упаковку',
  'package-removing': 'Удаление кодов из упаковки',
  'moving-adding': 'Перемещение: добавление',
  'moving-removing': 'Перемещение: удаление',
};

const meta: Meta<typeof GtinCard> = {
  component: GtinCard,
  argTypes: {
    mode: {
      description: 'Режим работы: `aggregation`, `changing`, `repackaging`, `info`',
      options: Object.keys(modes),
      control: {
        type: 'select',
        labels: modes,
      },
    },
    dense: {
      description: 'Уменьшить размер элементов',
    },
  },
  args: {
    id: '029000000001381',
    title: 'Вода Артезианская 5 литров',
    mode: 'filling',
    codes: codesMock,
    dense: false,
  },
};
export default meta;

export const AggregationMode: Story = {
  args: {
    mode: 'filling',
  },
  render: (args) => ({
    components: { GtinCard, VButton },
    setup() {
      let curCodeIdx = 10;

      const codeList = ref<CodeEl[]>(args.codes ? [...args.codes] : []);

      const bindingArgs = computed(() => {
        const { codes, ...rest } = args;

        return {
          ...rest,
          codes: codeList.value,
        };
      });

      const addCode = () => {
        codeList.value?.push({
          id: `code-${curCodeIdx}`,
          label: `Код-${curCodeIdx}`,
        });
        curCodeIdx++;
      };

      const deleteFirstCode = () => {
        codeList.value?.shift();
      };

      const deleteCodeById = (id: CodeEl['id']) => {
        codeList.value = codeList.value?.filter((code) => code.id !== id);
      };

      return {
        bindingArgs,
        addCode,
        deleteFirstCode,
        deleteCodeById,
      };
    },
    template: `
      <v-button height="xxs" color="primary" fit-width style="position: absolute; top: 10px; right: 120px"
                @action="addCode">Добавить код
      </v-button>
      <v-button height="xxs" color="primary" fit-width style="position: absolute; top: 10px; right: 10px"
                @action="deleteFirstCode">Удалить код
      </v-button>
      <GtinCard v-bind="bindingArgs" @remove-code="deleteCodeById"/>
    `,
  }),
};
