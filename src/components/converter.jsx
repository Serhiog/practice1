import React from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../store/action"
import { fetchExchangeRate } from "../api-actions"
import withForm from "../hocs/withForm"


const Converter = ({ haveCurrency, wantCurrency, date, loading, error, handleHaveCurrencyChange, handleGetCurrencyChange, handleWantCurrencyChange, exchangeRate, handleDateChange, saveToHistory, haveValue, wantValue, onWantValueChange, onHaveValueChange }) => {


    const handleHaveInputChange = ((evt) => {
        const value = parseInt(evt.target.value, 10)
        onHaveValueChange(evt.target.value);
        if (isNaN(value)) {
            onWantValueChange('')
        } else {
            const newValue = value * exchangeRate[`${haveCurrency}_${wantCurrency}`]
            onWantValueChange(newValue.toFixed(2))
        }
    })
    const handleWantInputChange = ((evt) => {
        const value = parseInt(evt.target.value, 10)
        onWantValueChange(evt.target.value);
        if (isNaN(value)) {
            onHaveValueChange('')
        } else {
            const newValue = value * exchangeRate[`${wantCurrency}_${haveCurrency}`]
            onHaveValueChange(newValue.toFixed(2))
        }
    })

    const handleHistorySave = () => {
        saveToHistory(date, haveCurrency, wantCurrency, haveValue, wantValue);
    };

    return (
        <section className="converter">
            <div className="converter__wrapper">
                <h2 className="converter__title">Конвертер валют</h2>
                <form className="converter__form">
                    <div className="converter__got">
                        <label className="converter__got-text" htmlFor="got">У меня есть</label>
                        <input className="converter__input" type="number" id="got" onChange={handleHaveInputChange} value={haveValue} />
                        <select className="converter__select" value={haveCurrency} onChange={handleHaveCurrencyChange}>
                            <option className="converter__option" value="RUB">RUB</option>
                            <option className="converter__option" value="USD">USD</option>
                            <option className="converter__option" value="EUR">EUR</option>
                            <option className="converter__option" value="GBR">GBR</option>
                            <option className="converter__option" value="CNY">CNY</option>
                        </select>
                        <span className="converter__check-box-got"></span>
                    </div>
                    <div className="converter__get">
                        <label className="converter__got-text" htmlFor="get">Хочу приобрести</label>
                        <input className="converter__input" type="number" id="get" onChange={handleWantInputChange} value={wantValue} />
                        <select className="converter__select" value={wantCurrency} onChange={handleWantCurrencyChange}>
                            <option className="converter__option" value="RUB">RUB</option>
                            <option className="converter__option" value="USD">USD</option>
                            <option className="converter__option" value="EUR">EUR</option>
                            <option className="converter__option" value="GBR">GBR</option>
                            <option className="converter__option" value="CNY">CNY</option>
                        </select>
                        <span className="converter__check-box-get"></span>
                    </div>
                    <div className="converter__date">
                        <input className="converter__input" type="date" value={date} onChange={handleDateChange} />
                        <button className="converter__btn" type="button" onClick={handleHistorySave}>Сохранить результат</button>
                    </div>
                </form>
            </div>
        </section>

    );
};


const mapToStateProps = (state) => ({
    haveCurrency: state.haveCurrency,
    wantCurrency: state.wantCurrency,
    date: state.date,
    loading: state.loading,
    error: state.error,
    exchangeRate: state.exchangeRate
});

const mapDispatchToProps = (dispatch) => ({
    handleHaveCurrencyChange(evt) {
        dispatch(ActionCreator.handleHaveCurrencyChange(evt.target.value));
    },
    handleWantCurrencyChange(evt) {
        dispatch(ActionCreator.handleWantCurrencyChange(evt.target.value));
    },
    handleGetCurrencyChange(fromCurrency, toCurrency, date) {
        dispatch(fetchExchangeRate(fromCurrency, toCurrency, date));
    },
    handleDateChange(evt) {
        dispatch(ActionCreator.handleDateChange(evt.target.value));
    },
    saveToHistory(date, haveCurrency, wantCurrency, haveValue, wantValue) {
        const payload = {
            date,
            from: `${haveValue} ${haveCurrency}`,
            to: `${wantValue} ${wantCurrency}`,
        }
        dispatch(ActionCreator.handleHistorySave(payload));
    }
});


export default withForm(connect(mapToStateProps, mapDispatchToProps)(Converter));
