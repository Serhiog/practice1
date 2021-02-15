import { getISOFormattedDate, extend } from "../utils";
import { ActionType } from "../store/action";

const initialState = {
  history: [
    { date: "1.12.2020", from: "1000 RUB", to: "13,1234 USD" },
    { date: "1.10.2020", from: "1400 RUB", to: "122,1234 USD" },
  ],
  haveCurrency: "RUB",
  wantCurrency: "USD",
  date: getISOFormattedDate(new Date()),
  exchangeRate: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.CHANGE_HAVE_CURRENCY:
      return extend(state, {
        haveCurrency: action.payload,
      });
    case ActionType.CHANGE_WANT_CURRENCY:
      return extend(state, {
        wantCurrency: action.payload,
      });
    case ActionType.CHANGE_DATE_CURRENCY:
      return extend(state, {
        date: action.payload,
      });
    case ActionType.SAVE_CURRENCY:
      return extend(state, {
        history: action.payload,
      });
    case ActionType.CLEAR_CURRENCY:
      return extend(state, {
        history: null,
      });
    default:
      return state;
  }
}
