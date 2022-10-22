import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { deleteShoppingCart } from '../../utilities/localDb'
import React from 'react';
import './Cart.css'

const Cart = ({cart, children}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    let count = 0;
    for(const product of cart) {
        count = count + 1;
        quantity += product.quantity;
        total += product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart'>
            <h2>Your Orders</h2>
            <p>Selected Items: {quantity} </p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            <button className='red-button' onClick={deleteShoppingCart}>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Cart;