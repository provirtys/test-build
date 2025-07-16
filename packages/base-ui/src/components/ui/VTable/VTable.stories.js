import { VTable } from '@base';

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
const baseColumns = [
  {
    label: 'Атрибут',
    align: 'left',
    field: 'name',
    headerClasses: 'base-table-header',
    classes: 'base-table-row',
  },
  {
    label: 'Значение',
    align: 'left',
    field: 'value',
    headerClasses: 'base-table-header',
    classes: 'base-table-row',
  },
];

export default {
  component: VTable,
};

export const Standard = {
  args: {
    rows: baseRows,
    columns: baseColumns,
  },
};

export const Empty = {
  args: {
    columns: baseColumns,
  },
};

export const TruncateText = {
  args: {
    rows: [...baseRows, ...longRows],
    columns: [
      {
        label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        align: 'left',
        field: 'name',
        headerClasses: 'truncate-text',
        classes: 'truncate-text',
      },
      {
        label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien.',
        align: 'left',
        field: 'value',
        headerClasses: 'truncate-text',
        classes: 'truncate-text',
      },
    ],
  },
};

export const WordBreak = {
  args: {
    rows: [...baseRows, ...longRows],
    columns: [
      {
        label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
        align: 'left',
        field: 'name',
        headerClasses: 'move-word',
        classes: 'move-word',
      },
      {
        label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien.',
        align: 'left',
        field: 'value',
        headerClasses: 'move-word',
        classes: 'move-word',
      },
    ],
  },
};
