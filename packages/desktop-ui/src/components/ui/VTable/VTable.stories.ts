import type { ExtendedArgs, ExtendedMeta, ExtendedStory } from '@integrity/shared/types/story';
import { timestampToFormattedDate } from '@integrity/shared/utils';
import { Notify, QTd } from 'quasar';
import { ref } from 'vue';
import { PieProgress } from '@';
import type { VTableColumn, VTableEmitsRequest, VTablePagination } from './VTable.types';
import VTable from './VTable.vue';
import './style.scss';

type AdditionalArgs = {
  clientPagination?: boolean;
  pagination?: VTablePagination;
};

type Meta = ExtendedMeta<typeof VTable, AdditionalArgs>;
type Args = ExtendedArgs<typeof VTable, AdditionalArgs>;
type Story = ExtendedStory<typeof VTable, AdditionalArgs>;

type ColFields = {
  startDate?: number;
  completeDate?: number;
  'start-complete-dates'?: number;
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
type DateObject = {
  date: string;
  time: string;
};
const columns: VTableColumn[] = [
  {
    label: 'Создание',
    name: 'startDate',
    field: 'startDate',
    align: 'left',
    dateFilter: {
      active: true,
    },
  },
  {
    label: 'Создание - Завершение',
    name: 'startCompleteDates',
    field: 'startCompleteDates',
    align: 'left',
    dateFilter: {
      active: true,
      multiple: true,
    },
  },
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
    filter: {
      active: true,
      list: [
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
    startDate: 1762423000000,
    completeDate: 1762509400000,
    id: 'MPK37',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line1', name: 'Линия 1', labels: ['Сериализация', 'Агрегация'] },
    quantity: 100000,
    error: 0,
    reject: 0,
    runtime: '1ч 02мин.',
    statusPercentage: 58,
  },
  {
    startDate: 1762682200000,
    completeDate: 1762768600000,
    id: 'MPK38',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line3', name: 'Линия 3', labels: ['Агрегация'] },
    quantity: 100,
    error: 0,
    reject: 0,
    runtime: '1ч 02мин.',
    statusPercentage: 99,
  },
  {
    startDate: 1763287000000,
    completeDate: undefined,
    id: 'MPK39',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line2', name: 'Линия 2', labels: ['Сериализация'] },
    quantity: 5000000,
    error: 3,
    reject: 1,
    runtime: '1ч 02мин.',
    statusPercentage: 5,
  },
  {
    startDate: 1763891800000,
    completeDate: 1763978200000,
    id: 'MPK40',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line1', name: 'Линия 1', labels: ['Сериализация', 'Агрегация'] },
    quantity: 12000000,
    error: 7,
    reject: 42,
    runtime: '1ч 02мин.',
    statusPercentage: 12,
  },
  {
    startDate: 1764496600000,
    completeDate: undefined,
    id: 'MPK41',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line3', name: 'Линия 3', labels: ['Агрегация'] },
    quantity: 500,
    error: 0,
    reject: 12,
    runtime: '1ч 02мин.',
    statusPercentage: 80,
  },
  {
    startDate: 1765101400000,
    completeDate: 1765187800000,
    id: 'MPK42',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line1', name: 'Линия 1', labels: ['Сериализация', 'Агрегация'] },
    quantity: 10000,
    error: 0,
    reject: 57,
    runtime: '1ч 02мин.',
    statusPercentage: 10,
  },
  {
    startDate: 1765706200000,
    completeDate: undefined,
    id: 'MPK43',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line2', name: 'Линия 2', labels: ['Сериализация'] },
    quantity: 3000,
    error: 1,
    reject: 0,
    runtime: '1ч 02мин.',
    statusPercentage: 45,
  },
  {
    startDate: 1766311000000,
    completeDate: 1766397400000,
    id: 'MPK44',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line3', name: 'Линия 3', labels: ['Агрегация'] },
    quantity: 750,
    error: 0,
    reject: 5,
    runtime: '1ч 02мин.',
    statusPercentage: 60,
  },
  {
    startDate: 1766915800000,
    completeDate: undefined,
    id: 'MPK45',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line1', name: 'Линия 1', labels: ['Сериализация', 'Агрегация'] },
    quantity: 45000,
    error: 2,
    reject: 7,
    runtime: '1ч 02мин.',
    statusPercentage: 30,
  },
  {
    startDate: 1767520600000,
    completeDate: 1767607000000,
    id: 'MPK46',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line2', name: 'Линия 2', labels: ['Сериализация'] },
    quantity: 9000,
    error: 1,
    reject: 2,
    runtime: '1ч 02мин.',
    statusPercentage: 95,
  },
  {
    startDate: 1768125400000,
    completeDate: undefined,
    id: 'MPK47',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line3', name: 'Линия 3', labels: ['Агрегация'] },
    quantity: 380,
    error: 0,
    reject: 0,
    runtime: '1ч 02мин.',
    statusPercentage: 88,
  },
  {
    startDate: 1768730200000,
    completeDate: 1768816600000,
    id: 'MPK48',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line1', name: 'Линия 1', labels: ['Сериализация', 'Агрегация'] },
    quantity: 47000,
    error: 3,
    reject: 6,
    runtime: '1ч 02мин.',
    statusPercentage: 47,
  },
  {
    startDate: 1769335000000,
    completeDate: undefined,
    id: 'MPK49',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line2', name: 'Линия 2', labels: ['Сериализация'] },
    quantity: 5500,
    error: 1,
    reject: 3,
    runtime: '1ч 02мин.',
    statusPercentage: 50,
  },
  {
    startDate: 1769939800000,
    completeDate: 1770026200000,
    id: 'MPK50',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line3', name: 'Линия 3', labels: ['Агрегация'] },
    quantity: 250,
    error: 0,
    reject: 1,
    runtime: '1ч 02мин.',
    statusPercentage: 75,
  },
  {
    startDate: 1770544600000,
    completeDate: 1770631000000,
    id: 'MPK51',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line1', name: 'Линия 1', labels: ['Сериализация', 'Агрегация'] },
    quantity: 15000,
    error: 0,
    reject: 2,
    runtime: '1ч 02мин.',
    statusPercentage: 84,
  },
  {
    startDate: 1771149400000,
    completeDate: undefined,
    id: 'MPK52',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line2', name: 'Линия 2', labels: ['Сериализация'] },
    quantity: 800,
    error: 1,
    reject: 0,
    runtime: '1ч 02мин.',
    statusPercentage: 90,
  },
  {
    startDate: 1771754200000,
    completeDate: 1771840600000,
    id: 'MPK53',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line3', name: 'Линия 3', labels: ['Агрегация'] },
    quantity: 600,
    error: 0,
    reject: 0,
    runtime: '1ч 02мин.',
    statusPercentage: 97,
  },
  {
    startDate: 1772359000000,
    completeDate: undefined,
    id: 'MPK54',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line1', name: 'Линия 1', labels: ['Сериализация', 'Агрегация'] },
    quantity: 3500,
    error: 2,
    reject: 3,
    runtime: '1ч 02мин.',
    statusPercentage: 41,
  },
  {
    startDate: 1772963800000,
    completeDate: 1773040200000,
    id: 'MPK55',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line2', name: 'Линия 2', labels: ['Сериализация'] },
    quantity: 12000,
    error: 1,
    reject: 4,
    runtime: '1ч 02мин.',
    statusPercentage: 79,
  },
  {
    startDate: 1773568600000,
    completeDate: undefined,
    id: 'MPK56',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line3', name: 'Линия 3', labels: ['Агрегация'] },
    quantity: 550,
    error: 0,
    reject: 2,
    runtime: '1ч 02мин.',
    statusPercentage: 86,
  },
  {
    startDate: 1774173400000,
    completeDate: 1774259800000,
    id: 'MPK57',
    gtin: { name: 'Вода минеральная 2 л.', number: '029000000001381' },
    line: { id: 'line1', name: 'Линия 1', labels: ['Сериализация', 'Агрегация'] },
    quantity: 4000,
    error: 3,
    reject: 5,
    runtime: '1ч 02мин.',
    statusPercentage: 33,
  },
];

const getDateObject = (ms?: number): DateObject => {
  const res: DateObject = {
    date: '—',
    time: '—',
  };

  if (typeof ms === 'number') {
    const dateArr = timestampToFormattedDate(ms).split(' ');

    res.date = dateArr[0];
    res.time = dateArr[1];
  }

  return res;
};

const meta: Meta = {
  component: VTable,
  argTypes: {
    clientPagination: {
      description: 'Пагинация, фильтрация, поиск на стороне клиента',
    },
    pagination: {},
  },
  args: {
    rows: rows.map((row) => ({
      ...row,
      startDate: getDateObject(row.startDate),
      completeDate: getDateObject(row.completeDate),
    })),
    columns: columns,
    pagination: {
      sortBy: null,
      descending: false,
      page: 1,
      rowsPerPage: 20,
      rowsNumber: 100,
      filterBy: {},
      searchBy: {},
      dateFilter: {
        from: '04-01-2025',
        to: '18-01-2025',
      },
    },
  },
  render: (args: Args) => ({
    components: { VTable, QTd, PieProgress, Notify },
    setup() {
      const argsModel = ref({ ...args });
      const bindingPagination = ref<VTablePagination>({
        ...(typeof args.pagination === 'object' ? args.pagination : {}),
        rowsNumber: args.clientPagination ? undefined : args.pagination?.rowsNumber,
      });

      const onRequest = (data: VTableEmitsRequest) => {
        console.log('ON REQUEST = ', data.pagination);
        argsModel.value.pagination = data.pagination;
      };

      const onRowClick = (_: any, row: ColFields) => {
        Notify.create({
          message: `Нажатие по ${row.id}`,
        });
      };

      return {
        argsModel,
        onRequest,
        onRowClick,
        bindingPagination,
      };
    },
    template: `
      <v-table
        :columns="argsModel.columns"
        :rows="argsModel.rows"
        v-model:pagination="bindingPagination"
        @rowClick="onRowClick"
        @request="onRequest"
      >
        <template #body-cell-startDate="props">
          <q-td :props="props">{{ props.value.date }}<span>{{ props.value.time }}</span></q-td>
        </template>
        <template #body-cell-startCompleteDates="props">
          <q-td :props="props">
            <div class="flex no-wrap">
              <div style="border-right: 1px solid #D9D9D9; padding-right: 8px; min-width: 124px">
                {{ props.row.startDate.date }}
                <span>
                  {{ props.row.startDate.time }}
                </span>
              </div>
              <div style="padding-left:8px">
                {{ props.row.completeDate.date }}
                <span>
                  {{ props.row.completeDate.time }}
                </span>
              </div>
            </div>
          </q-td>
        </template>
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

export default meta;

export const ServerPagination: Story = {};

export const ClientPagination: Story = {
  args: {
    clientPagination: true,
  },
};
