import MyText from './MyText.vue';

export default {
  title: 'UI/MyText',
  component: MyText,
};

const Template = (args) => ({
  components: { MyText },
  setup() {
    return { args };
  },
  template: '<MyText v-bind="args"></MyText>',
});

export const Primary = Template.bind({});
Primary.args = {};