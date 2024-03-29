import { useEffect, useState } from 'react'
import styles from './Card.module.scss'

function Card({ imageUrl, title, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)

    const onClickPlus = () => {
        onPlus({ imageUrl, title, price })
        setIsAdded(!isAdded)
    }
    const onClickFavorite = () => {
        onFavorite(imageUrl, title, price)
        setIsFavorite(!isFavorite)
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img
                    onClick={onClickFavorite}
                    src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
                    alt="Unliked"
                />
            </div>

            <img width={133} height={133} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>цена:</span>
                    <b>{price} грн.</b>
                </div>

                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
                    alt="Plus"
                />
            </div>
        </div>
    )
}
export default Card
