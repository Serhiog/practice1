import { useLayoutEffect } from "react";
import { API_KEY } from "./consts";

export const getExchangeRate = (fromCurrency, toCurrency, date) => {
  // return fetch(
  //   `https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${API_KEY}`
  // ).then((response) => {
  //   return response.json();
  // });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        [`${fromCurrency}_${toCurrency}`]: 47.935998,
        [`${toCurrency}_${fromCurrency}`]: 0.020859,
      });
    }, 1000);
  });
};
