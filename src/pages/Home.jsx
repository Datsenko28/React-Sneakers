import React from 'react';
import Card from '../components/card'


const Home = ({items,searchValue,setSearchValue,onChangeSearchInput,onAddFavorite,onAddToCart}) => {
    return (
        <>
            <div className="content p-40">
                <div className="d-flex align-center justify-between  mb-40">
                    <h1>
                        {searchValue
                            ? `Пошук по запросу: "${searchValue}"`
                            : 'Всі кросівки'}
                    </h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="Search" />
                        {searchValue && (
                            <img
                                onClick={() => setSearchValue('')}
                                className=" clear cu-p"
                                src="/img/btn-remove.svg"
                                alt="Clear"
                            />
                        )}
                        <input
                            onChange={onChangeSearchInput}
                            value={searchValue}
                            placeholder="Пошук..."
                        />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items
                        .filter((item) =>
                            item.title
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .map((item, index) => (
                            <Card
                                key={index}
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onFavorite={() =>
                                    console.log('Додали в закладки')
                                }
                                onPlus={(obj) => onAddToCart(item)}
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Home;