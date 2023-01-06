import React, { useEffect, useState } from 'react'
import './index.scss'
import Card from './components/card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCartOpened] = useState(false)

    useEffect(() => {
        fetch('https://63999aba29930e2bb3d8b29d.mockapi.io/items')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setItems(json)
            })
    }, [])

    const onAddToCart = (obj) => {
        setCartItems((prev) => [...cartItems, obj])
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="wrapper clear">
            {cartOpened ? (
                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpened(false)}
                />
            ) : null}
            <Header onClickCart={() => setCartOpened(true)} />

            <div className="content p-40">
                <div className="d-flex align-center justify-between  mb-40">
                    <h1>
                        {searchValue
                            ? `Пошук по запросу: "${searchValue}"`
                            : 'Всі кросівки'}
                    </h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search" />
                        <input
                            onChange={onChangeSearchInput}
                            placeholder="Пошук..."
                        />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onFavorite={() => console.log('Додали в закладки')}
                            onPlus={(obj) => onAddToCart(item)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
