import { mount } from '@vue/test-utils';
import Mobile from './mobile.vue';

describe('Mobile', () => {
  it('renders properly', () => {
    const wrapper = mount(Mobile, {});
    expect(wrapper.text()).toContain('Welcome to Mobile');
  });
});
