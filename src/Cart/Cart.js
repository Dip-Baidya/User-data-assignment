import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let totalSallery = 0;
    for (let i = 0; i < cart.length; i++) {
        const user = cart[i];
        totalSallery = totalSallery + user.salary;
    }

    return (
        <div>
            <h3>This Is our cart: {cart.length}</h3>
            <h1>name: {}</h1>
            <h4>Total Salary: {totalSallery}</h4>
          
        </div>
    );
};

export default Cart;