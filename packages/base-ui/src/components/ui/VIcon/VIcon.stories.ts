import { VIcon } from '@base';
import { computed, onMounted, ref } from 'vue';
import './style.scss';
import type { ExtendedArgs, ExtendedMeta, ExtendedStory } from '@/types/story';

type AdditionalArgs = {
  color?: string;
};

type Meta = ExtendedMeta<typeof VIcon, AdditionalArgs>;
type Args = ExtendedArgs<typeof VIcon, AdditionalArgs>;
type Story = ExtendedStory<typeof VIcon, AdditionalArgs>;

const dataMatrix = 'data-matrix';

/** Компонент для вывода иконки. <br>
 * Иконки берутся из пакета @integrity/icons. <br>
 * Поддерживает динамическую смену цвета и размера. <br>
 * Можно отдельно менять ширину и высоту, для этого существуют пропсы `width` и `height`. Но в большинстве случаев используйте проп `size` <br>
 * Если размер не задан, то размер берется из viewbox самой иконки. Размер задается либо числом (например, `40`), либо строкой (например, `'40px'`) <br>
 * */
const meta: Meta = {
  component: VIcon,
  argTypes: {
    name: {
      description:
        'Id иконки из svg-sprite. Можно узнать из пакета @integrity/icons в папке icons, либо в `AllIcons` на этой же story',
      control: {
        type: 'text',
      },
    },
    size: {
      description: 'Приоритет ниже, чем у `width ` и `height`',
      control: {
        type: 'text',
      },
    },
    width: {
      description: 'Приоритет выше, чем у `size`',
      control: {
        type: 'text',
      },
    },
    height: {
      description: 'Приоритет выше, чем у `size`',
      control: {
        type: 'text',
      },
    },
    color: {
      description:
        'Цвет иконки (используется в `AllIcons` story). При использовании меняется автоматически на основе родительского css-свойства `color`',
      control: {
        type: 'color',
      },
    },
  },
  args: {
    name: dataMatrix,
    width: '',
    height: '',
    size: '80px',
    color: '',
  },
};

export default meta;

export const Big: Story = {
  name: '80px',
  args: {
    size: '80px',
  },
};

export const Standard: Story = {
  name: '40px',
  args: {
    size: '40px',
  },
};

export const Small: Story = {
  name: '20px',
  args: {
    size: '20px',
  },
};

export const AllIcons: Story = {
  args: {
    size: 40,
  },
  render: (args: Args) => ({
    components: { VIcon },
    setup() {
      const iconIds = ref<string[]>([]);
      const iconItemStyle = computed(() => ({
        color: args.color,
      }));

      onMounted(() => {
        const iconSymbols = Array.from(document.querySelectorAll('#svg-sprite symbol'));
        if (!iconSymbols.length) return;

        for (const symbol of iconSymbols) {
          const rawId = symbol.getAttribute('id');
          const needleId = rawId?.split('icon-')[1];
          if (needleId) iconIds.value.push(needleId);
        }
      });

      return {
        iconIds,
        iconItemStyle,
        iconSize: args.size,
      };
    },
    template: `
    <div class="icon-list">
      <div v-for="icon in iconIds" :key="icon" class="icon-item" :style=iconItemStyle>
        <span class="icon-item__name">{{ icon }}</span>
        <v-icon :name="icon" :size="iconSize"/>
      </div>
    </div>
  `,
  }),
};
