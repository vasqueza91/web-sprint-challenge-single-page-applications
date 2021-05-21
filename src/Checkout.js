import React from 'react';

function Checkout(props) {
    const {newOrder} = props
    return (
        <div>
            <h2>Your Order Has Been Submitted And Is Ready To Bake</h2>
            <p>Name: {newOrder.name}</p>
            <p>Size: {newOrder.size}</p>
            <p>Sauce: {newOrder.sauce}</p>
            <p>Special Instructions: {newOrder.special}</p>
        </div>
    )
}
export default Checkout