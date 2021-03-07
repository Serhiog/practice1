import {API_KEY} from "./consts";

export const getExchangeRate = (fromCurrency, toCurrency, date) => {
  const from = `${fromCurrency}_${toCurrency}`;
  const to = `${toCurrency}_${fromCurrency}`;

  return fetch(
      `https://free.currconv.com/api/v7/convert?q=${from},${to}&date=${date}&compact=ultra&apiKey=${API_KEY}`
  ).then((response) => {
    return response.json();
  }).then((response) => {
    return {
      [from]: response[from][date],
      [to]: response[to][date]
    };
  });
};
