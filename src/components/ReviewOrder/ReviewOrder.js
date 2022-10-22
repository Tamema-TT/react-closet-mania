import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './ReviewOrder.css'

const ReviewOrder = ({product, handleRemoveProduct, children}) => {
    const {name, img, price, shipping, quantity} = product;
    return (
        <div className='review-order'>
            <img src={img} alt="no" />
            <div className="review-order-details-container">
                <div className="review-order-details" title={name}>
                    <h4>
                        {name.length > 20? name.slice(0, 20) + '...': name}
                    </h4>
                    <p><small>Price: <span className='orange-hl'>${price}</span></small></p>
                    <p><small>Shipping: <span className='orange-hl'>${shipping}</span></small></p>
                    <p><small>Quantity: <span className='orange-hl'>{quantity}</span></small></p>
                </div>
                <div className="delete-order">
                    <button onClick={() => handleRemoveProduct(product)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewOrder;