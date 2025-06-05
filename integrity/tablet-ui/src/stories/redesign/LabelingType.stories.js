import LabelingType from '../../components/redesign/LabelingType.vue'

export default {
  title: 'TabletUI-redesign/LabelingType',
  component: LabelingType,
  tags: ['autodocs'],
  argTypes: {
    textAuto: {
      description: 'Текст левой кнопки.',
    },
    textList: {
      description: 'Текст правой кнопки.',
    },
    isActive: {
      description: 'Выбранное состояние.',
      options: [true, false],
      control: { type: 'radio' },
    },
    isDisabled: {
      description: 'Не активное состояние.',
      options: [true, false],
      control: { type: 'radio' },
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
    textAuto: 'Авто',
    textList: 'Ручная',
    isActive: true,
    isDisabled: false,
  },
}

export const PrimaryMVP = {
  args: {
    textAuto: 'Подтверждение',
    textList: 'Маркировка',
    isActive: true,
    isDisabled: true,
  },
}
