import { describe, expect, it } from '@jest/globals';
import {usePagination} from 'src/hooks';

describe('usePagination', () => {
  it('should calculate values correctly', () => {
    const [page, pagesCount, pagination] = usePagination(5, {value: 21});

    expect(page.value).toBe(1);
    expect(pagesCount.value).toBe(5);
    expect(pagination.value).toEqual({
      limit: 5,
      offset: 0,
    });
  });

  it('should calculate offset/page correctly', () => {
    const [page, pagesCount, pagination] = usePagination(5, {value: 21});
    page.value = 2;

    expect(page.value).toBe(2);
    expect(pagesCount.value).toBe(5);
    expect(pagination.value).toEqual({
      limit: 5,
      offset: 5,
    });
  });
});
