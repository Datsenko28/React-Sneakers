import './index.scss'

function App() {
    return (
        <div className="wrapper">
            <header>
                <div className="headerLeft">
                    <svg />
                    <div headerInfo>
                        <h3>React Sneakers</h3>
                        <p>Магазин кращих кросівок</p>
                    </div>
                </div>

                <ul className="headerRight">
                    <li>
                        <svg />
                        <span>1300грн</span>
                    </li>
                    <li>
                        <svg />
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
