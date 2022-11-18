import './index.scss'
import Card from './components/Card'
import Header from './components/Header'
function App() {
    return (
        <div className="wrapper clear">
            <div style={{ display: 'none' }} className="overlay">
                <div className="drawer">
                    <h2 className="d-flex justify-between mb-30 ">
                        Корзина
                        <img
                            className="cu-p"
                            src="/img/btn-remove.svg"
                            alt="Remove"
                        />
                    </h2>

                    <div className="items">
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{
                                    backgroundImage: 'url(/img/sneakers/1.jpg)',
                                }}
                                className="cartItemImg"
                            ></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">
                                    Чоловічі кросівки Nike Air Max 270
                                </p>
                                <b>5000 грн</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="/img/btn-remove.svg"
                                alt="Remove"
                            />
                        </div>
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{
                                    backgroundImage: 'url(/img/sneakers/1.jpg)',
                                }}
                                className="cartItemImg"
                            ></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">
                                    Чоловічі кросівки Nike Air Max 270
                                </p>
                                <b>5000 грн</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="/img/btn-remove.svg"
                                alt="Remove"
                            />
                        </div>
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{
                                    backgroundImage: 'url(/img/sneakers/1.jpg)',
                                }}
                                className="cartItemImg"
                            ></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">
                                    Чоловічі кросівки Nike Air Max 270
                                </p>
                                <b>5000 грн</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="/img/btn-remove.svg"
                                alt="Remove"
                            />
                        </div>
                    </div>

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Разом</span>
                                <div></div>
                                <b>16 499 грн.</b>
                            </li>
                            <li>
                                <span>Податок 5%:</span>
                                <div></div>
                                <b> 824,95 грн.</b>
                            </li>
                        </ul>
                        <button className="greenButton">
                            Оформити замовлення
                            <img src="/img/arrow.svg" alt="Arrow" />
                        </button>
                    </div>
                </div>
            </div>
            <Header />

            <div className="content p-40">
                <div className="d-flex align-center justify-between  mb-40">
                    <h1>Всі кросівки</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search" />
                        <input placeholder="Пошук..." />
                    </div>
                </div>

                <div className="d-flex">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default App
