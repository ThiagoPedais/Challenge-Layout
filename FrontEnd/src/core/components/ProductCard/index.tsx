import React from 'react'
import { ReactComponent as ProductImage } from '../../assets/images/car-card.svg';
import Button from '../Button';
import './style.scss';

const ProductCard = () => {
    return (
        <div className="card-base border-radius-10 product-card">
            <ProductImage />

            <div className="product-info">

                <h5 className="product-name">
                    Audi Supra TT
                </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>

                <div className="product-price-container">
                    <Button text="Comprar"/>
                </div>

            </div>
        </div>
    )
}
export default ProductCard;