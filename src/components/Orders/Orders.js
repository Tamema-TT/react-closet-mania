import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeFromDb } from '../../utilities/localDb';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const navigate = useNavigate();

const handleRemoveProduct = product => {
    const rest = cart.filter(pd => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
}

    return (
        <div className='shop-container'>
            <div className="review-order-container">
                {
                    cart.map(product => <ReviewOrder
                        key={product.id}
                        product = {product}
                        handleRemoveProduct = {handleRemoveProduct}
                    ></ReviewOrder>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                        <button className='red-button orange-button' onClick={() => navigate('/shipment')}>
                            <p>Proceed Checkout</p>
                            <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                        </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;