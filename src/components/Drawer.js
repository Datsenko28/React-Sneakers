import React from 'react'
//style={{ display: 'none' }}
const Drawer = ({ onClose, onRemove, items = [] }) => {
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

                <div className="cartEmty d-flex align-center jastify-center flex-column flex">
                    <img
                        className="mb-20"
                        width="120px"
                        height="120px"
                        src="/img/empty-card.jpg"
                        alt=""
                    />
                    <h2>Корзина пуста</h2>
                    <p className="opacity-6">
                        Добавте хоча б одну пару кросівок щоб зробити
                        замовлення
                    </p>
                    <button className="greenButton">
                        <img src="/img/arrow.svg" alt="Arrow" />
                        Повернутись назад
                    </button>
                </div>

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
                                onClick={() => onRemove(obj.id)}
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
