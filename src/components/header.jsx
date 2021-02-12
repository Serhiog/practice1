import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__logo-container">
                    <img src="./img/logo-vector.svg" alt="Логотип компании" className="header__img" />
                    <p className="header__logo-text">ЛИГА Банк</p>
                </div>
                <ul className="header__nav">
                    <li className="header__nav-item">
                        <a href="#" className="header__link">Услуги</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className="header__link">Рассчитать кредит</a>
                    </li>
                    <li className="header__nav-item header__nav-item--active">
                        <a href="#" className="header__link">Конвертер валют</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className="header__link">Контакты</a>
                    </li>
                    <li className="header__nav-item">
                        <a href="#" className="header__link">Задать вопрос</a>
                    </li>
                    <li className="header__nav-item header__nav-item--login">
                        <a href="#" className="header__link">Войти в Интернет-банк</a>
                    </li>
                </ul>

            </div>
        </header>
    );
};


export default Header;

