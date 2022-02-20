import type { ParsedUrlQuery } from 'querystring';

export const getQueryValue = (
  query: ParsedUrlQuery,
  keyName: string,
  defauleValue: any = undefined,
  validValues?: Array<number | string>,
) => {
  const queryValue = query[keyName] ?? defauleValue;
  const value = Array.isArray(queryValue) ? queryValue[0] : queryValue;

  return validValues
    ? (validValues.includes(value) ? value :defauleValue)
    : value;
};
