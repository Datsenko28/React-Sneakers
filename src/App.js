import './index.scss'

function App() {
    return (
        <div className="wrapper">
            <header className="d-flex justify-between">
                <div className="d-flex align-center	">
                    <img width={40} height={40} src="/img/logo.png" />
                    <div headerInfo>
                        <h3>React Sneakers</h3>
                        <p>Магазин кращих кросівок</p>
                    </div>
                </div>

                <ul className="headerRight">
                    <li>
                        <img width={18} height={18} src="/img/basket.svg" />
                        <span>1300грн</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/user.svg" />
                    </li>
                </ul>
            </header>
            <div className="content">
                <h1>Всі кросівки</h1>
                ...
            </div>
        </div>
    )
}

export default App
