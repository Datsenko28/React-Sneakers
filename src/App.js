import './index.scss'

function App() {
    return (
        <div className="wrapper clear">
            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center	">
                    <img width={40} height={40} src="/img/logo.png" />
                    <div className="headerInfo">
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p>Магазин кращих кросівок</p>
                    </div>
                </div>

                <ul className="d-flex">
                    <li className="mr-30">
                        <img width={18} height={18} src="/img/basket.svg" />
                        <span>1300грн</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg" />
                    </li>
                </ul>
            </header>
            <div className="content p-40">
                <h1 className="mb-40">Всі кросівки</h1>

                <div className="d-flex">
                    <div className="card">
                        <img
                            width={133}
                            height={133}
                            src="/img/sneakers/1.jpg"
                            alt="Sneakers"
                        />
                        <h5>Кросівки Чоловічі Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column ">
                                <span>цена:</span>
                                <b>5000грн</b>
                            </div>

                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/plus.svg"
                                    alt="Plus"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img
                            width={133}
                            height={133}
                            src="/img/sneakers/2.jpg"
                            alt="Sneakers"
                        />
                        <h5>Кросівки Чоловічі Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column ">
                                <span>цена:</span>
                                <b>5000грн</b>
                            </div>

                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/plus.svg"
                                    alt="Plus"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img
                            width={133}
                            height={133}
                            src="/img/sneakers/3.jpg"
                            alt="Sneakers"
                        />
                        <h5>Кросівки Чоловічі Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column ">
                                <span>цена:</span>
                                <b>5000грн</b>
                            </div>

                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/plus.svg"
                                    alt="Plus"
                                />
                            </button>
                        </div>
                    </div>

                    <div className="card">
                        <img
                            width={133}
                            height={133}
                            src="/img/sneakers/4.jpg"
                            alt="Sneakers"
                        />
                        <h5>Кросівки Чоловічі Nike Blazer Mid Suede</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column ">
                                <span>цена:</span>
                                <b>5000грн</b>
                            </div>

                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/plus.svg"
                                    alt="Plus"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
