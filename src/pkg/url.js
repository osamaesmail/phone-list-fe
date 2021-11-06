export const generateQueryString = (params) => {
  let qs = Object.keys(params)
    .filter((key) => ![undefined, null, ''].includes(params[key]))
    .map((key) => key + '=' + params[key])
    .join('&');

  return qs ? `?${qs}` : qs;
};
