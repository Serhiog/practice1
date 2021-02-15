import React from "react";
import { connect } from "react-redux";
import { ActionCreator } from "../store/action"

const Converter = ({ haveCurrency, wantCurrency, date, handleHaveCurrencyChange }) => {
    return (
        <section className="converter">
            <div className="converter__wrapper">
                <h2 className="converter__title">Конвертер валют</h2>
                <form className="converter__form">
                    <div className="converter__got">
                        <label className="converter__got-text" htmlFor="got">У меня есть</label>
                        <input className="converter__input" type="number" id="got" />
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
                        <input className="converter__input" type="number" id="get" />
                        <select className="converter__select" value={wantCurrency}>
                            <option className="converter__option" value="RUB">RUB</option>
                            <option className="converter__option" value="USD">USD</option>
                            <option className="converter__option" value="EUR">EUR</option>
                            <option className="converter__option" value="GBR">GBR</option>
                            <option className="converter__option" value="CNY">CNY</option>
                        </select>
                        <span className="converter__check-box-get"></span>
                    </div>
                    <div className="converter__date">
                        <input className="converter__input" type="date" value={date} />
                        <button className="converter__btn" type="submit">Сохранить результат</button>
                    </div>
                </form>
            </div>
        </section>

    );
};


const mapToStateProps = (state) => ({
    haveCurrency: state.haveCurrency,
    wantCurrency: state.wantCurrency,
    date: state.date
});

const mapDispatchToProps = (dispatch) => ({
    handleHaveCurrencyChange(evt) {
        dispatch(ActionCreator.handleHaveCurrencyChange(evt.target.value));
    },
});


export default connect(mapToStateProps, mapDispatchToProps)(Converter);
