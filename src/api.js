import { API_KEY } from "./consts";

export const getExchangeRate = (fromCurrency, toCurrency) => {
  return fetch(
    `https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${API_KEY}`
  ).then((response) => {
    return response.json();
  });
};
