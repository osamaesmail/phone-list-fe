import axios from 'axios';
import {url} from 'src/pkg';
import {CUSTOMER_LIST} from 'src/api/urls';

export const getCustomerList = async (filter) => {
  return axios.get(CUSTOMER_LIST + url.generateQueryString(filter))
}
