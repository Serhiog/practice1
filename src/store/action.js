export const ActionType = {
  CHANGE_HAVE_CURRENCY: `CHANGE_HAVE_CURRENCY`,
  CHANGE_WANT_CURRENCY: "CHANGE_WANT_CURRENCY",
  CHANGE_DATE_CURRENCY: "CHANGE_DATE_CURRENCY",
  CLEAR_CURRENCY: "CLEAR_CURRENCY",
  UPDATE_EXCHANE_RATE: "UPDATE_EXCHANE_RATE",
  GET_EXCHANGE_RATE: "GET_EXCHANGE_RATE",
  GET_EXCHANGE_RATE_FAIL: "GET_EXCHANGE_RATE_FAIL",
  SAVE_HISTORY: "SAVE_HISTORY",
};

export const ActionCreator = {
  handleHaveCurrencyChange: (payload) => ({
    type: ActionType.CHANGE_HAVE_CURRENCY,
    payload,
  }),
  handleWantCurrencyChange: (payload) => ({
    type: ActionType.CHANGE_WANT_CURRENCY,
    payload,
  }),
  handleDateCurrencyChange: (payload) => ({
    type: ActionType.CHANGE_DATE_CURRENCY,
    payload,
  }),
  handleHistorySave: (payload) => ({
    type: ActionType.SAVE_HISTORY,
    payload,
  }),
  handleClearCurrency: () => ({
    type: ActionType.SAVE_CURRENCY,
  }),
  updateExchangeRate: (payload) => ({
    type: ActionType.UPDATE_EXCHANE_RATE,
    payload,
  }),
  getExchangeRate: () => ({
    type: ActionType.GET_EXCHANGE_RATE,
  }),
  getExchangeRateFail: () => ({
    type: ActionType.GET_EXCHANGE_RATE_FAIL,
  }),
  handleDateChange: (payload) => ({
    type: ActionType.CHANGE_DATE_CURRENCY,
    payload,
  }),
};
