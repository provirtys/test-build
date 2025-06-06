import Switcher from '../../components/redesign/Switcher.vue'

const options = [
  { label: 'Опция 1', value: 'left', slot: 'one', iconName: 'aggregation' },
  { label: 'Опция 2', value: 'right', slot: 'two', iconName: 'print' },
]

/** Компонент переключатель. Принимает в себя 2 опции, у которых настраивается выводимый текст и иконка. Можно растягивать компонент на всю доступную ширину, позиционировать контент, а также сделать компонент отключенным.  */
export default {
  title: 'TabletUI-redesign/Switcher',
  component: Switcher,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      description: 'Значение модели',
      options: options.map((o) => o.value),
      control: {
        type: 'radio',
        labels: options.reduce((acc, option) => {
          acc[option.value] = option.label
          return acc
        }, {}),
      },
    },
    disable: {
      description: 'Отключить изменение состояния',
    },
    align: {
      description: 'Позиционирование текста и иконки',
      options: ['left', 'center', 'right'],
      control: {
        type: 'radio',
        labels: {
          left: 'Слева',
          center: 'По центру',
          right: 'Справа',
        },
      },
    },
    spread: {
      description: 'Занимать всю доступную ширину',
    },
  },
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

export const Primary = {
  args: {
    options: options,
    modelValue: 'left',
    disable: false,
    align: 'left',
    spread: true,
  },
}

export const AlignCenter = {
  args: {
    options: options,
    modelValue: 'left',
    disable: false,
    align: 'center',
    spread: true,
  },
}

export const AlignRight = {
  args: {
    options: options,
    modelValue: 'left',
    disable: false,
    align: 'right',
    spread: true,
  },
}

export const WithoutIcons = {
  args: {
    options: options.map(option => ({
      ...option,
      iconName: undefined,
    })),
    modelValue: 'left',
    disable: false,
    align: 'left',
    spread: true,
  },
}

export const Disable = {
  args: {
    options: options,
    modelValue: 'left',
    disable: true,
    align: 'left',
    spread: true,
  },
}

export const NotSpread = {
  args: {
    options: options,
    modelValue: 'left',
    disable: false,
    align: 'left',
    spread: false,
  },
}
