import React from 'react'
import './index.scss'
import Card from './components/card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
    {
        title: 'Кросівки Чоловічі Nike Blazer Mid Suede',
        price: 5000,
        imageUrl: '/img/sneakers/1.jpg',
    },
    {
        title: 'Кросівки Чоловічі Nike Air Max 270',
        price: 6600,
        imageUrl: '/img/sneakers/2.jpg',
    },
    {
        title: 'Чоловічі кросівки Nike Blazer Mid Suede',
        price: 7499,
        imageUrl: '/img/sneakers/3.jpg',
    },
    {
        title: 'Кросівки Puma X Aka Boku Future Rider',
        price: 6700,
        imageUrl: '/img/sneakers/4.jpg',
    },
]
function App() {
    return (
        <div className="wrapper clear">
            <Drawer />
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
                    {arr.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            onFavorite={() => console.log('Додали в закладки')}
                            onPlus={() => console.log('Нажали плюс')}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
