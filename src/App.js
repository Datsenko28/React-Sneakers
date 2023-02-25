import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import './index.scss'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    // const [favorites, setFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cartOpened, setCartOpened] = useState(false)

    useEffect(() => {
        axios
            .get('https://63999aba29930e2bb3d8b29d.mockapi.io/items')
            .then((res) => {
                setItems(res.data)
            })
        axios
            .get('https://63999aba29930e2bb3d8b29d.mockapi.io/cart')
            .then((res) => {
                setCartItems(res.data)
            })

        // axios
        //     .get('https://63999aba29930e2bb3d8b29d.mockapi.io/favorite')
        //     .then((res) => {
        //         setCartItems(res.data)
        //     })
    }, [])

    const onAddToCart = (obj) => {
        axios.post('https://63999aba29930e2bb3d8b29d.mockapi.io/cart', obj)

        setCartItems((prev) => [...prev, obj])
    }

    const onRemoveItem = (id) => {
        console.log(id)
        axios.delete(`https://63999aba29930e2bb3d8b29d.mockapi.io/cart/${id}`)

        setCartItems((prev) => [...prev.filter((item) => item.id !== id)])
    }
    const onAddFavorite = (obj) => {
        axios.post('https://63999aba29930e2bb3d8b29d.mockapi.io/cart', obj)

        setCartItems((prev) => [...prev, obj])
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
                    onRemove={onRemoveItem}
                />
            ) : null}
            <Header onClickCart={() => setCartOpened(true)} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            items={items}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            onAddFavorite={onAddFavorite}
                            onAddToCart={onAddToCart}
                        />
                    }
                ></Route>
            </Routes>
            <Routes>
                <Route path="/favorites" element={<Favorites />}></Route>
            </Routes>
        </div>
    )
}

export default App
