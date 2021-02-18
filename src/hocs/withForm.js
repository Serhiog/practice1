import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchExchangeRate} from "../api-actions";
import PropTypes from "prop-types";

const withForm = (Component) => {
  function FormWrapperComponent({
    handleGetCurrencyChange,
    haveCurrency,
    wantCurrency,
    date,
    loading,
    error,
    exchangeRate,
  }) {

    FormWrapperComponent.propTypes = {
      handleGetCurrencyChange: PropTypes.any,
      haveCurrency: PropTypes.any,
      wantCurrency: PropTypes.any,
      date: PropTypes.any,
      loading: PropTypes.any,
      error: PropTypes.any,
      exchangeRate: PropTypes.any,
    };
    const [haveValue, setHaveValue] = useState(``);
    const [wantValue, setWantValue] = useState(``);

    const onHaveValueChange = (value) => setHaveValue(value);
    const onWantValueChange = (value) => setWantValue(value);

    useEffect(() => {
      handleGetCurrencyChange(haveCurrency, wantCurrency, date);
    }, [haveCurrency, wantCurrency, handleGetCurrencyChange, date]);

    useEffect(() => {
      if (!loading && !error && exchangeRate !== null) {
        if (haveValue !== null) {
          const newValue =
            haveValue * exchangeRate[`${haveCurrency}_${wantCurrency}`];
          setWantValue(newValue.toFixed(2));
        }
      }
    }, [loading, error, exchangeRate]);

    return (
      <Component
        haveValue={haveValue}
        wantValue={wantValue}
        onHaveValueChange={onHaveValueChange}
        onWantValueChange={onWantValueChange}
      />
    );
  }

  return connect(mapToStateProps, mapDispatchToProps)(FormWrapperComponent);
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

export default withForm;
