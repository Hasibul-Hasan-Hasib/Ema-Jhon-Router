import React from 'react';
import useProducts from '../Hooks/Hooks';
import useCart from '../Hooks/useCart';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h1>{products.length}</h1>
            <h2>{cart.length}</h2>
        </div>
    );
};

export default OrderReview;