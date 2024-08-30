import { mount } from '@vue/test-utils';
import Tablet from './tablet.vue';

describe('Tablet', () => {
  it('renders properly', () => {
    const wrapper = mount(Tablet, {});
    expect(wrapper.text()).toContain('Welcome to Tablet');
  });
});
