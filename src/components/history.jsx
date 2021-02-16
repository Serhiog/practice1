import React from "react";
import { connect } from "react-redux";

const History = ({ history }) => {
    if (history.length === 0) {
        return null
    }
    return (
        <section className="history">
            <div className="history__wrapper">
                <h3 className="history__title">История конвертация</h3>
                <ul className="history__list">

                    {history.map((item, i) => {
                        return <li className="history__item" key={i}>
                            <time className="history__date" dateTime={item.date}>{item.date}</time>
                            <p className="history__info"><span className="history__before">{item.from}</span><span className="history__after">{item.to}</span></p>
                        </li>
                    })}


                </ul>
                <button className="history__clear">Очистить историю</button>
            </div>
        </section>
    );
};


const mapToStateProps = (state) => ({
    history: state.history
});

// const mapDispatchToProps = (dispatch) => ({

// });




export default connect(mapToStateProps)(History);