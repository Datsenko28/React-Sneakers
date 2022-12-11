import React from 'react'

const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center	">
                <img width={40} height={40} src="/img/logo.png" />
                <div className="headerInfo">
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин кращих кросівок</p>
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
    )
}

export default Header