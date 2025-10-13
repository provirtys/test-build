import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { Notify, QTd } from 'quasar';
import { ref } from 'vue';
import { PieProgress } from '@';
import type { VTableColumn, VTableEmitsRequest } from './VTable.types';
import VTable from './VTable.vue';

type Story = StoryObj<typeof VTable>;

type ColFields = {
  id?: string;
  gtin?: {
    name: string;
    number: string;
  };
  line?: {
    id: string;
    name: string;
    labels: string[];
  };
  quantity?: number;
  error?: number;
  reject?: number;
  runtime?: string;
  statusPercentage?: number;
};
const columns: (VTableColumn & { field: keyof ColFields })[] = [
  {
    label: 'ID',
    name: 'id',
    field: 'id',
    align: 'left',
    searchable: true,
  },
  {
    label: 'Продукция/GTIN',
    name: 'gtin',
    field: 'gtin',
    align: 'left',
    searchable: true,
  },
  {
    label: 'Линия',
    name: 'line',
    field: 'line',
    align: 'left',
    filterable: true,
    filters: [
      {
        id: 'line1',
        label: 'Линия 1',
        value: false,
      },
      {
        id: 'line2',
        label: 'Линия 2',
        value: false,
      },
      {
        id: 'line3',
        label: 'Линия 3',
        value: false,
      },
    ],
  },
  {
    label: 'Кол-во',
    name: 'quantity',
    field: 'quantity',
    align: 'left',
    sortable: true,
  },
  {
    label: 'Ошибок',
    name: 'error',
    field: 'error',
    align: 'left',
    sortable: true,
  },
  {
    label: 'Брак',
    name: 'reject',
    field: 'reject',
    align: 'left',
    sortable: true,
  },
  {
    label: 'Время выполнения',
    name: 'runtime',
    field: 'runtime',
    align: 'left',
    sortable: true,
  },
  {
    label: 'Статус',
    name: 'statusPercentage',
    field: 'statusPercentage',
    align: 'left',
    sortable: true,
  },
];

const rows: ColFields[] = [
  {
    id: 'MPK37',
    gtin: {
      name: 'Вода минеральная 2 л.',
      number: '029000000001381',
    },
    line: {
      id: 'line1',
      name: 'Линия 1',
      labels: ['Сериализация', 'Агрегация'],
    },
    quantity: 100000,
    error: 0,
    reject: 0,
    runtime: '1ч 02мин.',
    statusPercentage: 58,
  },
  {
    id: 'MPK38',
    gtin: {
      name: 'Вода минеральная 2 л.',
      number: '029000000001381',
    },
    line: {
      id: 'line3',
      name: 'Линия 3',
      labels: ['Агрегация'],
    },
    quantity: 100,
    error: 0,
    reject: 0,
    runtime: '1ч 02мин.',
    statusPercentage: 99,
  },
  {
    id: 'MPK57',
    gtin: {
      name: 'Вода минеральная 2 л.',
      number: '029000000001381',
    },
    line: {
      id: 'line2',
      name: 'Линия 2',
      labels: ['Сериализация'],
    },
    quantity: 5000000,
    error: 3,
    reject: 1,
    runtime: '1ч 02мин.',
    statusPercentage: 5,
  },
  {
    id: 'MPK39',
    gtin: {
      name: 'Вода минеральная 2 л.',
      number: '029000000001381',
    },
    line: {
      id: 'line1',
      name: 'Линия 1',
      labels: ['Сериализация', 'Агрегация'],
    },
    quantity: 12000000,
    error: 7,
    reject: 42,
    runtime: '1ч 02мин.',
    statusPercentage: 12,
  },
  {
    id: 'MPK40',
    gtin: {
      name: 'Вода минеральная 2 л.',
      number: '029000000001381',
    },
    line: {
      id: 'line3',
      name: 'Линия 3',
      labels: ['Агрегация'],
    },
    quantity: 500,
    error: 0,
    reject: 12,
    runtime: '1ч 02мин.',
    statusPercentage: 80,
  },
  {
    id: 'MPK41',
    gtin: {
      name: 'Вода минеральная 2 л.',
      number: '029000000001381',
    },
    line: {
      id: 'line1',
      name: 'Линия 1',
      labels: ['Сериализация', 'Агрегация'],
    },
    quantity: 10000,
    error: 0,
    reject: 57,
    runtime: '1ч 02мин.',
    statusPercentage: 10,
  },
];

const meta: Meta<typeof VTable> = {
  component: VTable,
  args: {
    rows: rows,
    columns: columns,
    pagination: {
      sortBy: null,
      descending: false,
      page: 1,
      rowsPerPage: 2,
      rowsNumber: 20,
      filterBy: {},
      searchBy: {},
    },
  },
};

export default meta;

export const Standard: Story = {
  render: (args) => ({
    components: { VTable, QTd, PieProgress },
    setup() {
      const onRequest = (data: VTableEmitsRequest) => {
        console.log('ON REQUEST = ', data.pagination);
        argsModel.value.pagination = data.pagination;
      };
      const argsModel = ref({ ...args });

      return {
        argsModel,
        onRequest,
      };
    },
    template: `
      <v-table :columns="argsModel.columns"
               :rows="argsModel.rows"
               v-model:pagination="argsModel.pagination"
               @request="onRequest">
        <template #body-cell-gtin="props">
          <q-td :props="props">{{ props.value.name }}<span>{{ props.value.number }}</span></q-td>
        </template>
        <template #body-cell-line="props">
          <q-td :props="props">{{ props.value.name }}<span v-for="l in props.value.labels" :key="l">{{ l }}</span>
          </q-td>
        </template>
        <template #body-cell-quantity="props">
          <q-td :props="props">{{ props.value.toLocaleString() }}</q-td>
        </template>
        <template #body-cell-reject="props">
          <q-td :props="props">{{ props.value }}
            <span>{{ parseFloat(((props.value / props.row.quantity) * 100).toFixed(2)) + '%' }}</span></q-td>
        </template>
        <template #body-cell-statusPercentage="props">
          <q-td :props="props">
            <pie-progress :value="props.value" color="warning" size="14" border-width="1"/>
            {{ props.value + '%' }}
          </q-td>
        </template>
      </v-table>
    `,
  }),
};

export const ClientPagination: Story = {
  args: {
    rows: rows,
    columns: columns,
    pagination: {
      sortBy: null,
      descending: false,
      page: 1,
      rowsPerPage: 2,
      filterBy: {},
      searchBy: {},
    },
  },
  render: (args) => ({
    components: { VTable, QTd, PieProgress, Notify },
    setup() {
      const onRequest = (data: VTableEmitsRequest) => {
        console.log('ON REQUEST = ', data.pagination);
        argsModel.value.pagination = data.pagination;
      };
      const argsModel = ref({ ...args });

      const onRowClick = (_: any, row: ColFields) => {
        Notify.create({
          message: `Нажатие по ${row.id}`,
        });
      };

      return {
        argsModel,
        onRequest,
        onRowClick,
      };
    },
    template: `
      <v-table :columns="argsModel.columns"
               :rows="argsModel.rows"
               v-model:pagination="argsModel.pagination"
               @rowClick="onRowClick">
        <template #body-cell-gtin="props">
          <q-td :props="props">{{ props.value.name }}<span>{{ props.value.number }}</span></q-td>
        </template>
        <template #body-cell-line="props">
          <q-td :props="props">{{ props.value.name }}<span v-for="l in props.value.labels" :key="l">{{ l }}</span>
          </q-td>
        </template>
        <template #body-cell-quantity="props">
          <q-td :props="props">{{ props.value.toLocaleString() }}</q-td>
        </template>
        <template #body-cell-reject="props">
          <q-td :props="props">{{ props.value }}
            <span>{{ parseFloat(((props.value / props.row.quantity) * 100).toFixed(2)) + '%' }}</span></q-td>
        </template>
        <template #body-cell-statusPercentage="props">
          <q-td :props="props">
            <pie-progress :value="props.value" color="warning" size="14" border-width="1"/>
            {{ props.value + '%' }}
          </q-td>
        </template>
      </v-table>
    `,
  }),
};
