import type { ArgTypes, ComponentPropsAndSlots, Meta, StoryObj } from '@storybook/vue3-vite';

export type ExtendedMeta<T, K> = Meta<T> & {
  args?: Partial<K>;
  argTypes?: ArgTypes<K>;
};

export type ExtendedArgs<T, K> = ComponentPropsAndSlots<T> & K;

export type ExtendedStory<T, K> = StoryObj<T> & { args?: K };
