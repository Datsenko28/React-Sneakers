import React from 'react'

const Header = (props) => {
    // console.log(props)
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center	">
                <img
                    width={40}
                    height={40}
                    src="/img/logo.png"
                    alt="Logotype"
                />
                <div className="headerInfo">
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин кращих кросівок</p>
                </div>
            </div>

            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img
                        width={18}
                        height={18}
                        src="/img/basket.svg"
                        alt="Корзина "
                    />
                    <span>1300 грн.</span>
                </li>
                <li className="mr-2 0 cu-p">
                    <img
                        width={18}
                        height={18}
                        src="/img/heart.svg"
                        alt="Закладки"
                    />
                </li>
                <li>
                    <img
                        width={18}
                        height={18}
                        src="/img/user.svg"
                        alt="Користувачі"
                    />
                </li>
            </ul>
        </header>
    )
}

export default Header
