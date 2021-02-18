import {getISOFormattedDate, extend} from "../utils";
import {ActionType} from "../store/action";
import {MAX_HISTORY_SIZE} from "../consts";

const initialState = {
  history: [],
  haveCurrency: `RUB`,
  wantCurrency: `USD`,
  date: getISOFormattedDate(new Date()),
  exchangeRate: null,
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
        history: [action.payload, ...state.history].slice(0, MAX_HISTORY_SIZE),
      });
    case ActionType.CLEAR_CURRENCY:
      return extend(state, {
        history: [],
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
