import { sleep } from '@base/utils/sleep.js';
import { expect, userEvent, waitFor } from 'storybook/test';
import { computed } from 'vue';
import { VExpansionItem } from './index.js';

/**
 * Компонент раскрывающегося элемента. Является оберткой над аналогичным компонентом из Quasar. <br>
 * Поддерживает всё API из оригинального компонента <a href="https://quasar.dev/vue-components/expansion-item#qexpansionitem-api" target="_blank">QExpansionItem</a>
 */
export default {
  component: VExpansionItem,
  argTypes: {
    label: {
      description: 'Текст шапки элемента',
    },
    noPaddings: {
      description: 'Отключить горизонтальный отступ у шапки',
    },
  },
  args: {
    label: 'Текст в шапке',
    noPaddings: false,
  },
};

const BaseComponent = (attrs) => ({
  components: { VExpansionItem },
  setup() {
    const bindingAttrs = computed(() => {
      return attrs;
    });

    return {
      bindingAttrs,
    };
  },
  template: `
    <v-expansion-item v-bind="bindingAttrs">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur culpa, dicta, ducimus ea error
      exercitationem explicabo fugiat illum ipsa iste necessitatibus nobis, odit porro praesentium provident quidem
      repellendus sapiente sed sequi sunt vitae voluptas voluptate voluptates voluptatum! Autem blanditiis dolore
      ducimus enim iusto, necessitatibus numquam praesentium sed sequi sint.
    </v-expansion-item>`,
});

export const Standard = BaseComponent.bind({});

Standard.args = {
  noPaddings: true,
};

Standard.play = async ({ canvas }) => {
  const header = canvas.getByRole('button');
  const content = document.querySelector(`#${header.getAttribute('aria-controls')}`);

  const isItemExpanded = async () => {
    await waitFor(() => {
      expect(header).toHaveAttribute('aria-expanded', 'true');
      expect(content).toBeVisible();
    });
  };

  const isItemCollapsed = async () => {
    await waitFor(() => {
      expect(header).toHaveAttribute('aria-expanded', 'false');
      expect(content).not.toBeVisible();
    });
  };

  await isItemCollapsed();

  await userEvent.click(header);
  await isItemExpanded();
  await sleep(500);

  await userEvent.click(header);
  await isItemCollapsed();
  await sleep(500);
};
