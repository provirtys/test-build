import StatusCode from '../../components/redesign/StatusCode.vue'

const dataMatrix = 'DataMatrix'
const code128 = 'Code128'

const verified = 'verified'
const synced = 'synced'
const broken = 'broken'
const none = 'none'

const info = 'info'
const success = 'success'
const error = 'error'
const warning = 'warning'

const colors = { info, warning, success, error }
const codeTypes = { dataMatrix, code128 }
const statuses = { none, verified, synced, broken }

/** Компонент отображает информацию о маркировке кода. Можно настроить тип, текст, статус кода, время и номер позиции.  */
export default {
  title: 'TabletUI-redesign/StatusCode',
  component: StatusCode,
  tags: ['autodocs'],
  argTypes: {
    codeType: {
      description: 'Тип кода',
      options: Object.keys(codeTypes),
      mapping: codeTypes,
      control: {
        type: 'radio',
        labels: {
          dataMatrix: 'DataMatrix',
          code128: 'Code128',
        },
      },
    },
    color: {
      description: 'Иконка статуса',
      options: Object.keys(colors),
      mapping: colors,
      control: {
        type: 'radio',
        labels: {
          info: 'Info',
          success: 'Success',
          error: 'Error',
          warning: 'Warning',
        },
      },
    },
    status: {
      description: 'Статус кода',
      options: Object.keys(statuses),
      mapping: statuses,
      control: {
        type: 'radio',
        labels: {
          none: 'Стандартное',
          verified: 'В процессе',
          broken: 'Ошибка',
          synced: 'Синхронизация (анимированное состояние иконки)',
        },
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'dark', value: '#242a2b' },
        { name: 'light', value: '#f4f4f4' },
        { name: 'white', value: '#fff' },
        { name: 'light-gray-55', value: '#f1f1f1' },
      ],
    },
  },
}

export const DataMatrixPrimary = {
  args: {
    codeType: 'DataMatrix',
    status: 'none',
  },
}
export const DataMatrixVerified = {
  args: {
    codeType: 'DataMatrix',
    status: 'verified',
  },
}
export const DataMatrixBroken = {
  args: {
    codeType: 'DataMatrix',
    status: 'broken',
  },
}
export const Code128Primary = {
  args: {
    codeType: 'code128',
    status: 'none',
  },
}
export const Code128Verified = {
  args: {
    codeType: 'code128',
    status: 'verified',
  },
}
export const Code128Broken = {
  args: {
    codeType: 'code128',
    status: 'broken',
  },
}
