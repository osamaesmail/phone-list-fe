import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { shallowMount } from '@vue/test-utils';
import store from 'src/store';
import Page from 'src/pages/Index';

// Specify here Quasar config you'll need to test your component
installQuasarPlugin();

describe('IndexPage', () => {
  it('has load method', () => {
    const wrapper = shallowMount(Page, {
      plugins: [store],
      global: {
        provide: {
          store,
        },
      },
    });
    const { vm } = wrapper;

    expect(typeof vm.loadData).toBe('function');
  });
});
