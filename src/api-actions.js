import { getExchangeRate } from "./api";

export const fetchExchangeRate = () => (dispatch) => {
  getExchangeRate()
  .then((response) => {
    console.log(response);
  });
};
