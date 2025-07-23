import { VIcon } from '@base';
import { computed, onMounted, ref } from 'vue';
import './style.scss';

const dataMatrix = 'data-matrix';

/** Компонент для вывода иконки. <br>
 * Иконки берутся из пакета @integrity/icons. <br>
 * Поддерживает динамическую смену цвета и размера. <br>
 * Можно отдельно менять ширину и высоту, для этого существуют пропсы `width` и `height`. Но в большинстве случаев используйте проп `size` <br>
 * Если размер не задан, то размер берется из viewbox самой иконки. Размер задается либо числом (например, `40`), либо строкой (например, `'40px'`) <br>
 * */
export default {
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
    width: '80px',
    height: '80px',
    size: '80px',
    color: '',
  },
};

export const Big = {
  name: '80px',
};

export const Standard = {
  name: '40px',
};

export const Small = {
  name: '20px',
  args: {
    size: '20px',
  },
};

const AllIconsComponent = (args) => ({
  components: { VIcon },
  setup() {
    const iconIds = ref([]);
    const iconItemStyle = computed(() => ({
      color: args.color,
    }));

    onMounted(() => {
      const iconSymbols = Array.from(document.querySelectorAll('#svg-sprite symbol'));
      if (!iconSymbols.length) return;

      for (const symbol of iconSymbols) {
        const rawId = symbol.getAttribute('id');
        const needleId = rawId.split('icon-')[1];
        iconIds.value.push(needleId);
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
});

export const AllIcons = AllIconsComponent.bind({});

AllIcons.args = {
  size: 40,
};
