import BaseTable from '../../components/redesign/BaseTable.vue'

export default {
  title: 'TabletUI-redesign/BaseTable',
  component: BaseTable,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'white', value: '#ffffff' },
        { name: 'light', value: '#ededed' },
        { name: 'light-gray', value: '#f1f1f1' },
      ],
    },
  },
}

export const PrimaryList = {
  args: {
    rows: [
      {
        name: 'Test A.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Выпусков В. В.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Рандом Р. Р.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Тестов Т. Т.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Тестовый П. О.',
        jobTitle: 'ОТК',
      },
    ],
    columns: [
      {
        label: 'ФИО',
        align: 'left',
        field: 'name',
        headerClasses: 'base-table-header',
        classes: 'base-table-row',
      },
      {
        label: 'Роль',
        align: 'left',
        field: 'jobTitle',
        headerClasses: 'base-table-header',
        classes: 'base-table-row text-medium',
      },
    ],
  },
}

export const UsersListEmpty = {
  args: {
    columns: [
      {
        label: 'ФИО',
        field: 'name',
        headerClasses: 'base-table-header',
      },
      {
        label: 'Роль',
        align: 'left',
        headerClasses: 'base-table-header',
      },
    ],
  },
}

export const NoHorizontalScroll = {
  args: {
    rows: [
      {
        name: 'Test A.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Выпусков В. В.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Рандом Р. Р.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Тестов Т. Т.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Тестовый П. О.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Test A.',
        jobTitle: 'Адмнистратор',
      },
      {
        name: 'Выпусков В. В.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Рандом Р. Р.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Тестов Т. Т.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Тестовый П. О.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Test A.',
        jobTitle: 'Адмнистратор',
      },
      {
        name: 'Выпусков В. В.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Рандом Р. Р.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Тестов Т. Т.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Тестовый П. О.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Выпусков В. В.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Рандом Р. Р.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Тестов Т. Т.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Тестовый П. О.',
        jobTitle: 'ОТК',
      },
    ],
    columns: [
      {
        label: 'ФИО',
        align: 'left',
        field: 'name',
        headerClasses: 'base-table-header',
        classes: 'base-table-row truncate-text',
      },
      {
        label: 'Роль',
        align: 'left',
        field: 'jobTitle',
        headerClasses: 'base-table-header',
        classes: 'base-table-row text-medium truncate-text',
      },
    ],
  },
}

export const WordBreakAll = {
  args: {
    rows: [
      {
        name: 'Testtestovichtestovtesting A.A.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Выпусков В. В.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Рандом Р. Р.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Тестоновичтестовичтестовтестинг Т. Т.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Тестовый П. О.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Test A.',
        jobTitle: 'Адмнистраторадминов',
      },
    ],
    columns: [
      {
        label: 'ФИО',
        align: 'left',
        field: 'name',
        headerClasses: 'base-table-header',
        classes: 'base-table-row move-word',
      },
      {
        label: 'Роль',
        align: 'left',
        field: 'jobTitle',
        headerClasses: 'base-table-header',
        classes: 'base-table-row text-medium move-word',
      },
    ],
  },
}

export const WordBreakAllHeader = {
  args: {
    rows: [
      {
        name: 'Testtestovichtestovtesting A.A.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Выпусков В. В.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Рандом Р. Р.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Тестоновичтестовичтестовтестинг Т. Т.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Тестовый П. О.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Test A.',
        jobTitle: 'Адмнистраторадминов',
      },
    ],
    columns: [
      {
        label: 'Фамилия имя отчество сотрудника',
        align: 'left',
        field: 'name',
        headerClasses: 'base-table-header move-word',
        classes: 'base-table-row move-word',
      },
      {
        label: 'Административная роль сотрудника',
        align: 'left',
        field: 'jobTitle',
        headerClasses: 'base-table-header move-word',
        classes: 'base-table-row text-medium move-word',
      },
    ],
  },
}

export const CroppingLineWithEllipsis = {
  args: {
    rows: [
      {
        name: 'Testtestovichtestovtesting A.A.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Выпусков В. В.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Рандом Р. Р.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Тестоновичтестовичтестовтестинг Т. Т.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Тестовый П. О.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Test A.',
        jobTitle: 'Адмнистраторадминов',
      },
    ],
    columns: [
      {
        label: 'ФИО',
        align: 'left',
        field: 'name',
        headerClasses: 'base-table-header ',
        classes: 'base-table-row truncate-text',
      },
      {
        label: 'Роль',
        align: 'left',
        field: 'jobTitle',
        headerClasses: 'base-table-header ',
        classes: 'base-table-row text-medium truncate-text',
      },
    ],
  },
}

export const CroppingLineWithEllipsisHeader = {
  args: {
    rows: [
      {
        name: 'Testtestovichtestovtesting A.A.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Выпусков В. В.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Рандом Р. Р.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Тестоновичтестовичтестовтестинг Т. Т.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Тестовый П. О.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Test A.',
        jobTitle: 'Адмнистраторадминов',
      },
    ],
    columns: [
      {
        label: 'Фамилия имя отчество сотрудника',
        align: 'left',
        field: 'name',
        headerClasses: 'base-table-header truncate-text',
        classes: 'base-table-row truncate-text',
      },
      {
        label: 'Административная роль сотрудника',
        align: 'left',
        field: 'jobTitle',
        headerClasses: 'base-table-header truncate-text',
        classes: 'base-table-row text-medium truncate-text',
      },
    ],
  },
}

export const HorizontalScroll = {
  args: {
    rows: [
      {
        name: 'Testtestovichtestovtesting A.A.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Выпусков В. В.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Рандом Р. Р.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Тестоновичтестовичтестовтестинг Т. Т.',
        jobTitle: 'Администратор',
      },
      {
        name: 'Тестовый П. О.',
        jobTitle: 'ОТК',
      },
      {
        name: 'Test A.',
        jobTitle: 'Адмнистраторадминов',
      },
    ],
    columns: [
      {
        label: 'Фамилия имя отчество сотрудника',
        align: 'left',
        field: 'name',
        headerClasses: 'base-table-header scroll-text',
        classes: 'base-table-row scroll-text',
      },
      {
        label: 'Административная роль сотрудника',
        align: 'left',
        field: 'jobTitle',
        headerClasses: 'base-table-header scroll-text',
        classes: 'base-table-row text-medium scroll-text',
      },
    ],
  },
}
