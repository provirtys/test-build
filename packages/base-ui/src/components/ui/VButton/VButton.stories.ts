import type { ExtendedArgs, ExtendedMeta, ExtendedStory } from '@integrity/shared/types/story';
import { QMenu } from 'quasar';
import { computed } from 'vue';
import type { VButtonColor, VButtonTextAlignment } from '@/components/ui/VButton/VButton.types';
import { VButton } from './index';

type AdditionalArgs = {
  text?: string;
};

type Meta = ExtendedMeta<typeof VButton, AdditionalArgs>;
type Args = ExtendedArgs<typeof VButton, AdditionalArgs>;
type Story = ExtendedStory<typeof VButton, AdditionalArgs>;

//Цвет кнопки
const colors: Record<VButtonColor, string> = {
  primary: 'Основной',
  secondary: 'Второстепенный',
  plain: 'Плоский',
  outline: 'С границей',
  red: 'Красная',
};

//Выравнивание текста
const textAlignments: Record<VButtonTextAlignment, string> = {
  left: 'Слева',
  center: 'По центру',
  right: 'Справа',
};

//Названия иконок
const bad = 'bad';
const arrow = 'arrow';
const aggregation = 'aggregation';
const finishAggregation = 'finish-aggregation';
const barcode = 'barcode';
const dataMatrix = 'data-matrix';
const restart = 'restart';

const iconNames = {
  Нет: undefined,
  bad,
  arrow,
  aggregation,
  finishAggregation,
  barcode,
  dataMatrix,
  restart,
};

/** Компонент кнопки, базово использует QBtn. Поддерживает отображение иконок с обеих сторон, удержание кнопки, а также однократное срабатывание. <br/>
 *  Кнопка принимает квадратный вид, если используется только ОДНА иконка, проп `fit-width = true` и в слот `default` не прокидывается ничего (см. пример [OnlyIcon](?path=/story/ui-vbutton--only-icon)) <br/>
 *  Проп `size` вынесен из этого компонента и настраивается для каждого пакета индивидуально через пропсы `fontSize`, `height`, `padding`, `gap`, `iconSize`.
 * */
const meta: Meta = {
  component: VButton,
  argTypes: {
    color: {
      description: 'Цвет кнопки',
      options: Object.keys(colors),
      control: {
        type: 'select',
        labels: colors,
      },
    },
    text: {
      description: 'Текст кнопки',
    },
    textAlignment: {
      description: 'Положение текста',
      options: Object.keys(textAlignments),
      control: {
        type: 'select',
        labels: textAlignments,
      },
    },
    centeredContent: {
      description:
        'Располагать контент по центру <br/>' +
        'Если `true`, то проп `textAlignment` не учитывается при расположении текста',
    },
    disable: {
      description: 'Неактивное состояние',
      options: [true, false],
      control: { type: 'boolean' },
    },
    fontSize: {
      description: 'Размер шрифта. <br/> Переопределяет соответствующее значение из пропа `size`',
    },
    height: {
      description: 'Высота кнопки. <br/> Переопределяет соответствующее значение из пропа `size`',
    },
    gap: {
      description: 'Расстояние между текстом и иконками. <br/> Переопределяет соответствующее значение из пропа `size`',
    },
    padding: {
      description: 'Внутренний отступ кнопки. <br/> Переопределяет соответствующее значение из пропа `size`',
      control: {
        type: 'text',
      },
    },
    icon: {
      description: 'Имя для левой иконки (название файла из папки с иконками без расширения)',
      options: Object.keys(iconNames),
      mapping: iconNames,
      control: {
        type: 'select',
        labels: iconNames,
      },
    },
    iconRight: {
      description: 'Имя для правой иконки (название файла из папки с иконками без расширения)',
      options: Object.keys(iconNames),
      mapping: iconNames,
      control: {
        type: 'select',
        labels: iconNames,
      },
    },
    iconSize: {
      description: 'Размер иконки. <br/> Переопределяет соответствующее значение из пропа `size`',
      control: 'text',
    },
    fitWidth: {
      description: 'Отменить растягивание кнопки',
      options: [true, false],
      control: { type: 'boolean' },
    },
    once: {
      description: 'Кнопка срабатывает один раз, после чего становится disable, и иконка меняется на галочку',
      options: [true, false],
      control: { type: 'boolean' },
    },
    enableHold: {
      description: 'Удерживание кнопки с прогресс баром',
      options: [true, false],
      control: { type: 'boolean' },
    },
    borderRadius: {
      description: 'Радиус границы',
    },
    default: {
      table: {
        disable: true,
      },
    },
    menu: {
      description: 'Слот для меню. <br/> Пример использования см. ниже',
    },
    noCaps: {
      table: {
        disable: true,
      },
    },
    push: {
      table: {
        disable: true,
      },
    },
    unelevated: {
      table: {
        disable: true,
      },
    },
    ripple: {
      table: {
        disable: true,
      },
    },
    glossy: {
      table: {
        disable: true,
      },
    },
    flat: {
      table: {
        disable: true,
      },
    },
    rounded: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    color: 'primary',
    text: 'Кнопка',
    textAlignment: 'center',
    centeredContent: true,
    borderRadius: '8px',
    disable: false,
    icon: undefined,
    iconRight: undefined,
    iconSize: 20,
    fitWidth: false,
    once: false,
    enableHold: false,
    fontSize: undefined,
    height: undefined,
    gap: undefined,
    padding: undefined,
  },
  render: (args: Args) => ({
    components: { VButton },
    setup() {
      const bindingArgs = computed(() => {
        const { text, ...restArgs } = args;
        return restArgs;
      });

      const text = computed(() => args.text);

      return {
        bindingArgs,
        text,
      };
    },
    template: `
      <v-button v-bind="bindingArgs">
        <template #default v-if="text">
          {{ text }}
        </template>
      </v-button>`,
  }),
};

export default meta;

export const Primary: Story = {
  args: {
    text: 'Основной вариант',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Вторичный вариант',
    color: 'secondary',
  },
};

export const Plain: Story = {
  args: {
    text: 'Вариант без границы и заднего фона',
    color: 'plain',
  },
};

export const Outline: Story = {
  args: {
    text: 'Вариант с границами',
    color: 'outline',
  },
};

export const Red: Story = {
  args: {
    text: 'Красная кнопка',
    color: 'red',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Неактивная кнопка',
    disable: true,
  },
};

export const BorderRadius4px: Story = {
  name: 'Border Radius 4px',
  args: {
    borderRadius: '4px',
  },
};

export const Square: Story = {
  args: {
    text: 'Не скругленная',
    borderRadius: '0',
  },
};

export const TextLeft: Story = {
  args: {
    text: 'Текст слева',
    textAlignment: 'left',
    centeredContent: false,
  },
};

export const TextRight: Story = {
  args: {
    text: 'Текст справа',
    textAlignment: 'right',
    centeredContent: false,
  },
};

export const IconLeftWithTextLeft: Story = {
  args: {
    text: 'Иконка слева текст слева',
    icon: 'bad',
    textAlignment: 'left',
    centeredContent: false,
  },
};

export const IconLeftWithTextCenter: Story = {
  args: {
    text: 'Иконка слева текст по центру',
    icon: 'bad',
    centeredContent: false,
  },
};

export const IconLeftWithTextRight: Story = {
  args: {
    text: 'Иконка слева текст справа',
    icon: 'bad',
    textAlignment: 'right',
    centeredContent: false,
  },
};

export const IconRightWithTextLeft: Story = {
  args: {
    text: 'Иконка справа текст слева',
    iconRight: 'bad',
    textAlignment: 'left',
    centeredContent: false,
  },
};

export const IconRightTextCenter: Story = {
  args: {
    text: 'Иконка справа текст по центру',
    iconRight: 'bad',
    centeredContent: false,
  },
};

export const IconRightWithTextCenter: Story = {
  args: {
    text: 'Иконка справа текст справа',
    iconRight: 'bad',
    textAlignment: 'right',
    centeredContent: false,
  },
};

export const BothIconsWithTextLeft: Story = {
  args: {
    text: 'Обе иконки текст слева',
    icon: 'arrow',
    iconRight: 'bad',
    textAlignment: 'left',
    centeredContent: false,
  },
};

export const BothIconsWithTextCenter: Story = {
  args: {
    text: 'Обе иконки текст по центру',
    icon: 'arrow',
    iconRight: 'bad',
    textAlignment: 'center',
    centeredContent: false,
  },
};

export const BothIconsWithTextRight: Story = {
  args: {
    text: 'Обе иконки текст справа',
    icon: 'arrow',
    iconRight: 'bad',
    textAlignment: 'right',
    centeredContent: false,
  },
};

export const Hold: Story = {
  args: {
    text: 'Кнопка с удержанием',
    enableHold: true,
  },
};

export const Once: Story = {
  args: {
    text: 'Однократное срабатывание',
    once: true,
  },
};

export const OnceWithHold: Story = {
  args: {
    text: 'Однократное срабатывание с удержанием',
    once: true,
    enableHold: true,
  },
};

export const WithMenu: Story = {
  render: () => ({
    components: { VButton, QMenu },
    setup() {},
    template: `
      <v-button>
        Кнопка с меню
        <template #menu>
          <q-menu class="q-pa-sm">
            <ul>
              <li class="q-pa-sm">Пункт 1</li>
              <li class="q-pa-sm">Пункт 2</li>
              <li class="q-pa-sm">Пункт 3</li>
            </ul>
          </q-menu>
        </template>
      </v-button>`,
  }),
};

export const OnlyIcon: Story = {
  args: {
    text: undefined,
    icon: 'pencil',
    fitWidth: true,
  },
};
