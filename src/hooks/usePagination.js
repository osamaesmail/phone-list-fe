import {ref, computed} from "vue";

export const usePagination = (limit, total) => {
  const pagesCount = computed(() => Math.ceil(total.value/limit));
  const page = ref(1);

  const pagination = computed(() => {
    return {
      limit: limit,
      offset: limit * (page.value - 1 || 0),
    }
  });

  return [
    page,
    pagesCount,
    pagination,
  ];
}
