export const ActionType = {
  CHANGE_HAVE_CURRENCY: `CHANGE_HAVE_CURRENCY`,
  CHANGE_WANT_CURRENCY: "CHANGE_WANT_CURRENCY",
  CHANGE_DATE_CURRENCY: "CHANGE_DATE_CURRENCY",
  SAVE_CURRENCY: "SAVE_CURRENCY",
  CLEAR_CURRENCY: "CLEAR_CURRENCY",
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
  handleSaveCurrency: (payload) => ({
    type: ActionType.SAVE_CURRENCY,
    payload,
  }),
  handleClearCurrency: () => ({
    type: ActionType.SAVE_CURRENCY,
  }),
};
