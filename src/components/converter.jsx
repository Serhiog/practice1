import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../store/action"
import { fetchExchangeRate } from "../api-actions"

const Converter = ({ haveCurrency, wantCurrency, date, handleHaveCurrencyChange, handleGetCurrencyChange, handleWantCurrencyChange, exchangeRate, handleDateChange, handleHistorySave }) => {
    useEffect(() => { handleGetCurrencyChange(haveCurrency, wantCurrency, date) }, [haveCurrency, wantCurrency, handleGetCurrencyChange, date]);

    const [haveValue, setHaveValue] = useState('')
    const [wantValue, setWantValue] = useState('')

    const handleHaveInputChange = ((evt) => {
        const value = parseInt(evt.target.value, 10)
        setHaveValue(evt.target.value);
        if (isNaN(value)) {
            setWantValue('')
        } else {
            const newValue = value * exchangeRate[`${haveCurrency}_${wantCurrency}`]
            setWantValue(newValue.toFixed(2))
        }
    })
    const handleWantInputChange = ((evt) => {
        const value = parseInt(evt.target.value, 10)
        setWantValue(evt.target.value);
        if (isNaN(value)) {
            setHaveValue('')
        } else {
            const newValue = value * exchangeRate[`${wantCurrency}_${haveCurrency}`]
            setHaveValue(newValue.toFixed(2))
        }
    })

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
    handleHistorySave(date, haveCurrency, wantCurrency, haveValue, wantValue) {
        dispatch(ActionCreator.handleHistorySave(date, haveCurrency, wantCurrency, haveValue, wantValue));
    }
});


export default connect(mapToStateProps, mapDispatchToProps)(Converter);
