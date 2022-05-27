import React from 'react'

import classes from './Cart.module.css'

import Modal from '../UI/Modal'

export default function Cart(props) {

  const cartItems = <ul className={classes['cart-items']}>
    {[
        {
            id: 'c1',
            name: 'Sushi',
            amount: 2,
            price: 12.99
        },
    ].map((item) => (
        <li>{item.name}</li>
    ))}
  </ul>

  return (
    <Modal onCloseModal={props.onHideModal}>
        {cartItems}

        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>

        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideModal}>
                Close
            </button>
            <button className={classes.button}>
                Order
            </button>
        </div>
    </Modal>
  )
}
