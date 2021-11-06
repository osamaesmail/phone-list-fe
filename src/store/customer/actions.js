import {getCustomerList} from 'src/api';
import {error} from 'src/pkg';
import {FAILED_LOADING_CUSTOMERS} from 'src/constants/error';

export async function loadData(context, filter) {
  context.commit('setList', undefined);
  try {
    const {data} = await getCustomerList(filter);
    context.commit('setList', data?.rows || []);
    context.commit('setTotal', data?.total || 0);
  } catch (e) {
    context.commit('setList', undefined);
    error.report(e, FAILED_LOADING_CUSTOMERS)
  }
}
