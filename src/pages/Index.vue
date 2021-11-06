<template>
  <q-page class="q-pa-lg">
    <div class="row q-mt-md">
      <q-select class="col q-pr-sm" filled v-model="country" :options="countries" label="Country" />
      <q-select class="col q-pl-sm" filled v-model="state" :options="states" label="State" />
    </div>

    <q-table
      class="q-my-lg"
      title="Phone list"
      :rows="list"
      :columns="columns"
      row-key="id"
      :loading="!list"
      hide-pagination
    >
      <template v-slot:body-cell-valid="props">
        <t-d-boolean :value="props.value"/>
      </template>
    </q-table>

    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="page"
        color="grey-8"
        :max="pagesCount"
        size="sm"
      />
    </div>
  </q-page>
</template>

<script>
import {defineComponent, computed, watch, ref} from 'vue';
import { useStore } from 'vuex';
import {columns, countries, states} from 'src/constants/customer';
import {usePagination} from 'src/hooks';
import TDBoolean from 'components/TDBoolean';

export default defineComponent({
  name: 'PageIndex',
  components: {TDBoolean},
  setup() {
    const store = useStore();
    const list = computed(() => store.getters['customer/getList']);
    const total = computed(() => store.getters['customer/getTotal']);
    const [page, pagesCount, pagination] = usePagination(5, total);
    const country = ref('');
    const state = ref('');
    const filter = computed(() => ({
      ...pagination.value,
      country: country.value.value,
      state: state.value.value,
    }));

    loadData();

    watch(filter, () => loadData());

    function loadData() {
      store.dispatch('customer/loadData', filter.value);
    }

    return {columns, list, page, pagesCount, country, state, countries, states};
  },
})
</script>
