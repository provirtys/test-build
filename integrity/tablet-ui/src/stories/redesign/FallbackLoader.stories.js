import FallbackLoader from '../../components/redesign/FallbackLoader.vue'
import { ref } from 'vue'

/**
 * Компонент представляет собой кастомизируемый лоадер с кнопкой повторной отправки запроса. Можно изменять текст загрузки, текст ошибки, иконку после ошибки и текст для кнопки повторного отправки запроса
 */
export default {
  title: 'TabletUI-redesign/FallbackLoader',
  component: FallbackLoader,
  tags: ['autodocs'],
  argTypes: {
    loadingText: {
      description: 'Текст во время загрузки',
    },
    fallbackText: {
      description: 'Текст когда загрузка завершилась с ошибкой',
    },
    fallbackIcon: {
      description: 'Имя иконки',
    },
    updateBtnText: {
      description: 'Текст для перезагрузки',
    },
    isLoading: {
      type: 'boolean',
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

const createMockFetch = (loadingTime, shouldFail, mockData) => {
  return () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error('Ошибка загрузки данных'))
        } else {
          resolve(mockData)
        }
      }, loadingTime)
    })
  }
}

const BaseArgs = {
  fallbackIcon: 'status-error',
  loadingText: 'Обновление...',
  fallbackText: 'Ошибка',
  updateBtnText: 'Обновить',
  isLoading: false,
}

const BaseComponent = (args) => ({
  components: { FallbackLoader },
  setup() {
    const isLoading = ref(false)

    const mockFetch = createMockFetch(2000, args.shouldFail || false)

    const handleUpdate = async () => {
      isLoading.value = true

      try {
        await mockFetch()
        if (!args.shouldFail) {
          setTimeout(() => {
            isLoading.value = false
          }, 1000)
        }
      } catch (error) {
        isLoading.value = false
      }
    }

    return {
      args,
      isLoading,
      handleUpdate,
    }
  },
  template: `
    <FallbackLoader
      :isLoading="isLoading"
      :fallback-text="args.fallbackText"
      :loading-text="args.loadingText"
      :update-btn-text="args.updateBtnText"
      :fallback-icon="args.fallbackIcon"
      @on-update="handleUpdate"
    />
  `,
  args: {
    loadingText: 'teqwe',
  },
})

export const Primary = BaseComponent.bind({})
Primary.args = {
  ...BaseArgs,
}

export const IconChange = BaseComponent.bind({})
IconChange.args = {
  ...BaseArgs,
  fallbackIcon: 'bad',
}

export const CustomText = BaseComponent.bind({})
CustomText.args = {
  ...BaseArgs,
  fallbackText: 'Что-то пошло не так',
  loadingText: 'Загрузка данных...',
  updateBtnText: 'Повторить запрос',
}

export const NoLoadingText = BaseComponent.bind({})
NoLoadingText.args = {
  ...BaseArgs,
  loadingText: '',
}

export const NoFallbackText = BaseComponent.bind({})
NoFallbackText.args = {
  ...BaseArgs,
  fallbackText: '',
}

export const NoFallbackIcon = BaseComponent.bind({})
NoFallbackIcon.args = {
  ...BaseArgs,
  fallbackIcon: '',
}
