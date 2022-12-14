import React from 'react'
//style={{ display: 'none' }}
const Drawer = ({ onClose, items = [] }) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30 ">
                    Корзина
                    <img
                        onClick={onClose}
                        className="cu-p"
                        src="/img/btn-remove.svg"
                        alt="Close"
                    />
                </h2>

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{
                                    backgroundImage: `url(${obj.imageUrl})`,
                                }}
                                className="cartItemImg"
                            ></div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}</b>
                            </div>
                            <img
                                className="removeBtn"
                                src="/img/btn-remove.svg"
                                alt="Remove"
                            />
                        </div>
                    ))}
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
    )
}

export default Drawer
