import { getISOFormattedDate, extend } from "../utils";
import { ActionType } from "../store/action";

const initialState = {
  history: [{ date: "", from: "", to: "" }],
  haveCurrency: "RUB",
  wantCurrency: "USD",
  date: getISOFormattedDate(new Date()),
  exchangeRate: {},
  loading: false,
  error: false,
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
    case ActionType.SAVE_HISTORY:
      return extend(state, {
        history: [...state.history, action.payload],
      });
    case ActionType.CLEAR_CURRENCY:
      return extend(state, {
        history: null,
      });
    case ActionType.UPDATE_EXCHANE_RATE:
      return extend(state, {
        exchangeRate: action.payload,
        loading: false,
      });
    case ActionType.GET_EXCHANGE_RATE:
      return extend(state, {
        loading: true,
        error: false,
      });
    case ActionType.GET_EXCHANGE_RATE_FAIL:
      return extend(state, {
        loading: false,
        error: true,
      });
    default:
      return state;
  }
}
