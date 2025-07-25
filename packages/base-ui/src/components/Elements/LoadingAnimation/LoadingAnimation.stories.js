import { LoadingAnimation } from '@base';

export default {
  component: LoadingAnimation,
  argTypes: {
    loadingType: {
      options: ['loading', 'photo', 'connection', 'check', 'internet_false', 'try_again', 'retry'],
      control: { type: 'select' },
    },
  },
};

export const Primary = {};
