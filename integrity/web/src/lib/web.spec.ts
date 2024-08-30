import { mount } from '@vue/test-utils';
import Web from './web.vue';

describe('Web', () => {
  it('renders properly', () => {
    const wrapper = mount(Web, {});
    expect(wrapper.text()).toContain('Welcome to Web');
  });
});
