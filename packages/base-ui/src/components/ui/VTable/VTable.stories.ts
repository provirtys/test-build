import { VTable } from '@base';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import type { QTableColumn } from 'quasar';

type Story = StoryObj<typeof VTable>;

const baseRows = [
  {
    name: 'Наименование',
    value: 'Вода Артезианская 1 л.',
  },
  {
    name: 'GTIN',
    value: '029000000001381',
  },
  {
    name: 'Кол-во в упаковке',
    value: '6',
  },
];
const longRows = [
  {
    name: 'Lorem ipsum dolor sit amet consectetur.',
    value: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem.',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    value:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi.',
  },
  {
    name: 'Lorem ipsum dolor sit amet consectetur adipiscing.',
    value: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.',
  },
  {
    name: 'Lorem ipsum dolor sit amet.',
    value:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus.',
  },
];
const baseColumns: QTableColumn[] = [
  {
    label: 'Атрибут',
    align: 'left',
    field: 'name',
    headerClasses: 'base-table-header',
    classes: 'base-table-row',
    name: 'name',
  },
  {
    label: 'Значение',
    align: 'left',
    field: 'value',
    headerClasses: 'base-table-header',
    classes: 'base-table-row',
    name: 'value',
  },
];

const meta: Meta<typeof VTable> = {
  component: VTable,
};

export default meta;

export const Standard: Story = {
  args: {
    rows: baseRows,
    columns: baseColumns,
  },
};

export const Empty: Story = {
  args: {
    columns: baseColumns,
  },
};

export const TruncateText: Story = {
  args: {
    rows: [...baseRows, ...longRows],
    columns: [
      {
        label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        align: 'left',
        field: 'name',
        headerClasses: 'truncate-text',
        classes: 'truncate-text',
        name: 'name',
      },
      {
        label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien.',
        align: 'left',
        field: 'value',
        headerClasses: 'truncate-text',
        classes: 'truncate-text',
        name: 'value',
      },
    ],
  },
};

export const WordBreak: Story = {
  args: {
    rows: [...baseRows, ...longRows],
    columns: [
      {
        label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        align: 'left',
        field: 'name',
        headerClasses: 'move-word',
        classes: 'move-word',
        name: 'name',
      },
      {
        label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien.',
        align: 'left',
        field: 'value',
        headerClasses: 'move-word',
        classes: 'move-word',
        name: 'value',
      },
    ],
  },
};
