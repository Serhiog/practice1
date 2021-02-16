import { getExchangeRate } from "./api";
import { ActionCreator } from "./store/action";

export const fetchExchangeRate = (fromCurrency, toCurrency, date) => (dispatch) => {
  dispatch(ActionCreator.getExchangeRate());
  getExchangeRate(fromCurrency, toCurrency, date)
    .then((response) => {
      dispatch(ActionCreator.updateExchangeRate(response));
    })
    .catch(() => {
      dispatch(ActionCreator.getExchangeRateFail());
    });
};
