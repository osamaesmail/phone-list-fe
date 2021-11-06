import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { shallowMount } from '@vue/test-utils';
import Component from 'src/components/TDBoolean';

// Specify here Quasar config you'll need to test your component
installQuasarPlugin();

describe('TDBoolean', () => {
  describe('color', () => {
    it('should be green if the value is true', () => {
      const wrapper = shallowMount(Component, {
        props: {
          value: true,
          props: {
            value: true,
          }
        }
      });
      const { vm } = wrapper;

      expect(vm.color).toBe('green');
    });

    it('should be red if the value is false', () => {
      const wrapper = shallowMount(Component, {
        props: {
          value: false,
          props: {
            value: false,
          }
        }
      });
      const { vm } = wrapper;

      expect(vm.color).toBe('red');
    });
  });
});
