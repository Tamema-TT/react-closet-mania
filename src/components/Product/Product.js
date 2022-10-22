import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Rating from '@mui/material/Rating';
import React from 'react';
import './Product.css'

const Product = ({addToCart, product}) => {
    const {name, img, price, rating} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h4>{name}</h4>
                <h5>Price: ${price} </h5>
                <div className='rating'>
                    <p> Ratings: </p>
                    <Rating name="read-only" value={rating.rate} readOnly />
                </div>
            </div>
            <button onClick={() => addToCart(product)} className='cart-btn'>
                <p>Add to cart</p> 
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;