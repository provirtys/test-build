import type { ExtendedArgs, ExtendedMeta, ExtendedStory } from '@base/types/story';
import { ref } from 'vue';
import { FallbackLoader } from './index';

interface AdditionalArgs {
  shouldFail?: boolean;
}

type Story = ExtendedStory<typeof FallbackLoader, AdditionalArgs>;
type Args = ExtendedArgs<typeof FallbackLoader, AdditionalArgs>;
type Meta = ExtendedMeta<typeof FallbackLoader, AdditionalArgs>;

/**
 * Компонент представляет собой кастомизируемый лоадер с кнопкой повторной отправки запроса. Можно изменять текст загрузки, текст ошибки, иконку после ошибки и текст для кнопки повторного отправки запроса
 */
const meta: Meta = {
  component: FallbackLoader,
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
  render: (args: Args) => ({
    components: { FallbackLoader },
    setup() {
      const isLoading = ref(false);
      const mockFetch = createMockFetch(2000, args?.shouldFail ?? false);

      const handleUpdate = async () => {
        isLoading.value = true;

        try {
          const response = await mockFetch();
          console.log(response);
        } catch (_error) {
          console.log('error = ', _error);
        } finally {
          isLoading.value = false;
        }
      };

      return {
        args,
        isLoading,
        handleUpdate,
      };
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
  }),
};
export default meta;

const createMockFetch = (loadingTime: number, shouldFail: boolean) => {
  return () => {
    return new Promise<void>((resolve, reject) => {
      console.log(shouldFail);
      setTimeout(() => {
        if (shouldFail) {
          reject(new Error('Ошибка загрузки данных'));
        } else {
          resolve();
        }
      }, loadingTime);
    });
  };
};

const BaseArgs = {
  fallbackIcon: 'status-error',
  loadingText: 'Обновление...',
  fallbackText: 'Ошибка',
  updateBtnText: 'Обновить',
  isLoading: false,
};

export const Primary: Story = {
  args: {
    ...BaseArgs,
  },
};

export const IconChange: Story = {
  args: {
    ...BaseArgs,
    fallbackIcon: 'bad',
  },
};

export const CustomText: Story = {
  args: {
    ...BaseArgs,
    fallbackText: 'Что-то пошло не так',
    loadingText: 'Загрузка данных...',
    updateBtnText: 'Повторить запрос',
  },
};

export const NoLoadingText: Story = {
  args: {
    ...BaseArgs,
    loadingText: '',
  },
};

export const NoFallbackText: Story = {
  args: {
    ...BaseArgs,
    fallbackText: '',
  },
};

export const NoFallbackIcon: Story = {
  args: {
    ...BaseArgs,
    fallbackIcon: '',
  },
};

export const WithErrorMessage: Story = {
  args: {
    ...BaseArgs,
    shouldFail: true,
  },
};
