import { uint8ArrayToFile } from '@integrity/shared/helpers';
import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import { VFileUpload } from './index';

type Story = StoryObj<typeof VFileUpload>;

/**Компонент для загрузки файла. Принимает в качестве `modelValue` экземпляр типа File, и `image` в качестве исходного значения, который внутри преобразовывается в File.  */
const meta: Meta<typeof VFileUpload> = {
  component: VFileUpload,
  argTypes: {
    image: {
      description: 'Исходный файл в Uint8Array',
    },
    modelValue: {
      description: 'Загружаемый в компонент файл',
      table: {
        category: 'props',
      },
    },
    label: {
      description: 'Заголовок поля',
    },
    formats: {
      description: 'Разрешенные форматы',
    },
  },
  args: {},
  render: (args) => ({
    components: { VFileUpload },
    setup() {
      const file = ref<File>();

      return {
        file,
        args,
      };
    },
    template: `
      <v-file-upload v-model="file" v-bind="args"/>`,
  }),
};

export default meta;

export const Standard: Story = {};

export const WithInitialFile: Story = {
  args: {
    image: `^XA
  ^FX Top section with logo, name and address.
  ^CF0,60
  ^FO50,50^GB100,100,100^FS
  ^FO75,75^FR^GB100,100,100^FS
  ^FO93,93^GB40,40,40^FS
  ^FO220,50^FDIntershipping, Inc.^FS
  ^CF0,30
  ^FO220,115^FD1000 Shipping Lane^FS
  ^FO220,155^FDShelbyville TN 38102^FS
  ^FO220,195^FDUnited States (USA)^FS
  ^FO50,250^GB700,3,3^FS

  ^FX Second section with recipient address and permit information.
  ^CFA,30
  ^FO50,300^FDJohn Doe^FS
  ^FO50,340^FD100 Main Street^FS
  ^FO50,380^FDSpringfield TN 39021^FS
  ^FO50,420^FDUnited States (USA)^FS
  ^CFA,15
  ^FO600,300^GB150,150,3^FS
  ^FO638,340^FDPermit^FS
  ^FO638,390^FD123456^FS
  ^FO50,500^GB700,3,3^FS

  ^FX Third section with bar code.
  ^BY5,2,270
  ^FO100,550^BC^FD12345678^FS

  ^FX Fourth section (the two boxes on the bottom).
  ^FO50,900^GB700,250,3^FS
  ^FO400,900^GB3,250,3^FS
  ^CF0,40
  ^FO100,960^FDCtr. X34B-1^FS
  ^FO100,1010^FDREF1 F00B47^FS
  ^FO100,1060^FDREF2 BL4H8^FS
  ^CF0,190
  ^FO470,955^FDCA^FS

  ^XZ`,
  },
  render: (args) => ({
    components: { VFileUpload },
    setup() {
      const file = ref<File>(uint8ArrayToFile(args.image as unknown as Uint8Array, 'testName'));

      return {
        file,
        args,
      };
    },
    template: `
      <v-file-upload v-model="file" v-bind="args"/>`,
  }),
};
