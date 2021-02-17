import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchExchangeRate } from "../api-actions"

const withForm = (
  Component,
  handleGetCurrencyChange,
  haveCurrency,
  wantCurrency,
  date
) => () => {
  const [haveValue, setHaveValue] = useState("");
  const [wantValue, setWantValue] = useState("");

  const onHaveValueChange = (evt) => setHaveValue(evt.target.value);
  const onWantValueChange = (evt) => setWantValue(evt.target.value);

  useEffect(() => {
    handleGetCurrencyChange(haveCurrency, wantCurrency, date);
  }, [haveCurrency, wantCurrency, handleGetCurrencyChange, date]);

  // useEffect(() => {
  //   if (!loading && !error && exchangeRate !== null) {
  //     if (haveValue !== null) {
  //       const newValue =
  //         haveValue * exchangeRate[`${haveCurrency}_${wantCurrency}`];
  //       setWantValue(newValue.toFixed(2));
  //     }
  //   }
  // }, [loading, error, exchangeRate]);

  return (
    <Component
      haveValue={haveValue}
      wantValue={wantValue}
      onHaveValueChange={onHaveValueChange}
      onWantValueChange={onWantValueChange}
    />
  );
};

const mapToStateProps = (state) => ({
  haveCurrency: state.haveCurrency,
  wantCurrency: state.wantCurrency,
  date: state.date,
  loading: state.loading,
  error: state.error,
  exchangeRate: state.exchangeRate,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetCurrencyChange(fromCurrency, toCurrency, date) {
    dispatch(fetchExchangeRate(fromCurrency, toCurrency, date));
  },
});

export default connect(mapToStateProps, mapDispatchToProps)(withForm);
