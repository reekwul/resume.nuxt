import { mountSuspended } from '@nuxt/test-utils/runtime';
import { HeaderNavigation } from '#components';
import { it, expect, describe, vi } from 'vitest';

vi.mock('~/app/constants', () => ({
  default: {
    MENU_LIST: [
      {
        path: '/',
        text: 'Home',
        icon: 'HomeFilled',
      },
      {
        path: '/about',
        text: 'About',
        icon: 'InfoFilled',
      },
    ],
  },
}));

const options = {
  global: {
    stubs: {
      NuxtLink: {
        template: '<a><slot /></a>',
        props: ['to'],
      },
      ElIcon: {
        template: '<span><slot /></span>',
      },
    },
  },
};

describe('HeaderNavigation', () => {
  it('can mount some component', async () => {
    const component = await mountSuspended(HeaderNavigation, options);
    expect(component.exists()).toBe(true);
    expect(component.vm).toBeDefined();
    expect(component.html()).toBeDefined();
  });
});
