import { describe, expect, it } from '@jest/globals';
import {url} from 'src/pkg';

describe('url', () => {
  describe('generateQueryString', () => {
    it('should create string query correctly', () => {
      expect(
        url.generateQueryString({
          foo: true,
          bar: 1,
          baz: 'baz',
        })
      ).toBe('?foo=true&bar=1&baz=baz');
    });

    it('should remove null/undefined/empty values from the query', () => {
      expect(
        url.generateQueryString({
          foo: true,
          bar: null,
          baz: undefined,
          foobar: '',
        })
      ).toBe('?foo=true');
    });

    it('should remove ? in case no query', () => {
      expect(
        url.generateQueryString({
          bar: null,
          baz: undefined,
        })
      ).toBe('');
    });
  });
});
