import React from "react";

const Converter = () => {
    return (
        <section className="converter">
            <div className="converter__wrapper">
                <h2 className="converter__title">Конвертер валют</h2>
                <form className="converter__form">
                    <div className="converter__got">
                        <label className="converter__got-text" htmlFor="got">У меня есть</label>
                        <input className="converter__input" type="number" id="got" />
                        <select className="converter__select">
                            <option className="converter__option" />
                        </select>
                        <span className="converter__check-box-got"></span>
                    </div>
                    <div className="converter__get">
                        <label className="converter__got-text" htmlFor="get">Хочу приобрести</label>
                        <input className="converter__input" type="number" id="get" />
                        <select className="converter__select">
                            <option className="converter__option" />
                        </select>
                        <span className="converter__check-box-get"></span>
                    </div>
                    <div className="converter__date">
                        <input className="converter__input" type="date" />
                        <input className="converter__btn" type="submit" value="Сохранить результат" />
                    </div>
                </form>
            </div>
        </section>

    );
};


export default Converter;

